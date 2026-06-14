#!/usr/bin/env bash
# ==============================================================
# Deploy Script - TattoWorld Static Site
# Supports: GitHub Pages, Vercel, Netlify, Docker
# ==============================================================

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# --------------------------------------------------------------
# Helper functions
# --------------------------------------------------------------
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE} $1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

# --------------------------------------------------------------
# Pre-deploy checks
# --------------------------------------------------------------
print_header "Pre-deploy Checks"

# Check if Docker is installed (only needed for Docker deploys)
if command -v docker &> /dev/null; then
    print_success "Docker is installed"
else
    print_warning "Docker is not installed (only needed for Docker deploys)"
fi

# Check if .env exists
if [ -f ".env" ]; then
    print_success ".env file exists"
else
    print_warning ".env file not found (using defaults)"
fi

# Check if git is installed
if command -v git &> /dev/null; then
    print_success "Git is installed"
    print_info "Current branch: $(git branch --show-current)"
else
    print_error "Git is required for deployment"
    exit 1
fi

# Check if we're in a git repo
if git rev-parse --git-dir > /dev/null 2>&1; then
    print_success "Inside a Git repository"
else
    print_error "Not inside a Git repository"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_warning "There are uncommitted changes"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_info "Deploy cancelled"
        exit 0
    fi
fi

# --------------------------------------------------------------
# Deployment Menu
# --------------------------------------------------------------
print_header "Select Deployment Target"

echo "Available deployment options:"
echo ""
echo "  1) GitHub Pages (Recommended for this project)"
echo "  2) Vercel"
echo "  3) Netlify"
echo "  4) Docker (Self-hosted)"
echo "  5) Manual (build only)"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_header "Deploying to GitHub Pages"
        
        # Check if gh CLI is installed
        if ! command -v gh &> /dev/null; then
            print_warning "GitHub CLI (gh) is not installed"
            print_info "Install it from: https://cli.github.com/"
            print_info "Or deploy manually: push to main branch and enable GitHub Pages in repo settings"
        else
            print_success "GitHub CLI is installed"
        fi
        
        echo ""
        echo "GitHub Pages deployment steps:"
        echo ""
        echo "  1. Create a new repository on GitHub"
        echo "  2. Push your code to the repository:"
        echo ""
        echo "     git init"
        echo "     git add ."
        echo "     git commit -m 'Initial deployment'"
        echo "     git remote add origin https://github.com/YOUR_USERNAME/tattoworld.git"
        echo "     git push -u origin main"
        echo ""
        echo "  3. Go to Repository Settings > Pages"
        echo "  4. Select 'main' branch as source"
        echo "  5. Your site will be available at:"
        echo "     https://YOUR_USERNAME.github.io/tattoworld/"
        echo ""
        
        read -p "Press Enter to open GitHub Pages documentation..."
        echo ""
        
        # Try to open browser
        if command -v start &> /dev/null; then
            start "https://pages.github.com/"
        elif command -v open &> /dev/null; then
            open "https://pages.github.com/"
        fi
        ;;
        
    2)
        print_header "Deploying to Vercel"
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI is not installed"
            print_info "Installing Vercel CLI..."
            npm install -g vercel
        fi
        
        print_info "Running Vercel deployment..."
        print_warning "This will deploy to Vercel's preview environment"
        print_info "To deploy to production, run: vercel --prod"
        
        read -p "Press Enter to continue with Vercel deployment..."
        vercel
        ;;
        
    3)
        print_header "Deploying to Netlify"
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null && ! command -v ntl &> /dev/null; then
            print_warning "Netlify CLI is not installed"
            print_info "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        
        print_info "Running Netlify deployment..."
        print_warning "This will deploy to Netlify's draft environment"
        
        read -p "Press Enter to continue with Netlify deployment..."
        netlify deploy --dir=outputs/development
        ;;
        
    4)
        print_header "Deploying with Docker"
        
        # Check if Docker is installed
        if ! command -v docker &> /dev/null; then
            print_error "Docker is required for this deployment"
            print_info "Install Docker from: https://docker.com/get-started"
            exit 1
        fi
        
        # Check if Docker Compose is installed
        if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
            print_error "Docker Compose is required for this deployment"
            exit 1
        fi
        
        print_info "Building Docker image..."
        docker build -t tattoworld:latest -f outputs/production/Dockerfile .
        
        print_success "Docker image built successfully"
        
        echo ""
        echo "Docker deployment options:"
        echo "  1) Run locally (development)"
        echo "  2) Run locally (production)"
        echo "  3) Push to Docker Hub"
        echo ""
        read -p "Select Docker option (1-3): " docker_choice
        
        case $docker_choice in
            1)
                print_info "Starting development server..."
                docker compose -f outputs/production/docker-compose.dev.yml up -d
                print_success "Development server started at http://localhost:3000"
                ;;
            2)
                print_info "Starting production server..."
                docker compose -f outputs/production/docker-compose.prod.yml up -d
                print_success "Production server started at http://localhost:80"
                ;;
            3)
                read -p "Enter your Docker Hub username: " docker_username
                read -p "Enter image name (default: tattoworld): " docker_image
                docker_image=${docker_image:-tattoworld}
                
                print_info "Tagging image..."
                docker tag tattoworld:latest "$docker_username/$docker_image:latest"
                
                print_info "Pushing to Docker Hub..."
                docker push "$docker_username/$docker_image:latest"
                
                print_success "Image pushed to Docker Hub"
                ;;
        esac
        ;;
        
    5)
        print_header "Manual Build"
        
        print_info "No automated deployment selected"
        print_info "You can manually deploy the files in outputs/development/"
        echo ""
        echo "The site is ready to be deployed to any static hosting service."
        echo "Just upload the contents of outputs/development/ to your hosting provider."
        ;;
        
    *)
        print_error "Invalid choice"
        exit 1
        ;;
esac

# --------------------------------------------------------------
# Post-deploy verification
# --------------------------------------------------------------
print_header "Post-deploy Verification"

print_info "Checking site structure..."
if [ -f "outputs/development/index.html" ]; then
    print_success "index.html exists"
else
    print_error "index.html not found"
fi

if [ -d "outputs/development/pages" ]; then
    page_count=$(ls -1 outputs/development/pages/*.html 2>/dev/null | wc -l)
    print_success "Found $page_count pages"
else
    print_error "Pages directory not found"
fi

if [ -d "outputs/development/assets" ]; then
    print_success "Assets directory exists"
else
    print_error "Assets directory not found"
fi

# --------------------------------------------------------------
# Summary
# --------------------------------------------------------------
print_header "Deployment Summary"

echo -e "${GREEN}✓ Pre-deploy checks completed${NC}"
echo -e "${GREEN}✓ Deployment process finished${NC}"
echo ""
echo "Next steps:"
echo "  1. Verify your site is accessible"
echo "  2. Test all pages and functionality"
echo "  3. Check mobile responsiveness"
echo "  4. Verify form submission works"
echo "  5. Update README.md with production URL"
echo ""
echo "For more information, see RELEASE_CHECKLIST.md"
echo ""
print_success "Deployment script completed!"
