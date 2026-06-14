# ==============================================================
# Dockerfile - TattoWorld Static Site
# Multi-stage build optimized for production
# Stage 1: Builder (preparation) | Stage 2: Runner (nginx)
# ==============================================================

# --------------------------------------------------------------
# Stage 1: Builder
# Prepares the static files for production
# --------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only dependency-related files first (cache optimization)
# For a static site, there are no npm dependencies to install,
# but we copy the structure for consistency and future-proofing.
COPY outputs/development/package.json ./package.json 2>/dev/null || true

# Copy all static files from development output
COPY outputs/development/ ./site/

# Verify the site structure
RUN echo "=== Site Structure ===" && \
    ls -la ./site/ && \
    echo "=== Pages ===" && \
    ls -la ./site/pages/ && \
    echo "=== Assets ===" && \
    ls -la ./site/assets/

# --------------------------------------------------------------
# Stage 2: Runner (Production Nginx)
# Serves the static site with optimized Nginx configuration
# --------------------------------------------------------------
FROM nginx:1.27-alpine AS runner

# Security: Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Create non-root user for security
RUN addgroup -g 1001 -S tattoworld && \
    adduser -S tattoworld -u 1001 -G tattoworld

# Copy custom nginx configuration
COPY outputs/production/nginx.conf /etc/nginx/conf.d/tattoworld.conf

# Copy static files from builder stage
COPY --from=builder /app/site/ /usr/share/nginx/html/

# Set proper permissions for nginx
RUN chown -R tattoworld:tattoworld /usr/share/nginx/html && \
    chown -R tattoworld:tattoworld /var/cache/nginx && \
    chown -R tattoworld:tattoworld /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R tattoworld:tattoworld /var/run/nginx.pid

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Expose port
EXPOSE 80

# Switch to non-root user
USER tattoworld

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
