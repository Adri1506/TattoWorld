# Release Checklist - TattoWorld v1.0.0

This checklist ensures a smooth and successful deployment of the TattoWorld website.

---

## Phase 1: Pre-Deploy (Before Deployment)

### 1.1 Code Quality Verification
- [ ] All tasks completed in execution_trace.md (25/26 complete, T26 is manual)
- [ ] QA Agent reported `ready_for_next: true`
- [ ] Security Agent has no critical findings pending
- [ ] All security findings remediated (SC-001 to SC-006 remediated, SC-007 accepted)

### 1.2 Environment Configuration
- [ ] Create `.env` file based on `.env.example`
- [ ] Set `SITE_URL` to your production domain
- [ ] Set `WHATSAPP_PHONE` to your WhatsApp number
- [ ] Set `FORMSPREE_FORM_ID` to your Formspree form ID
- [ ] Verify `.env` is in `.gitignore` (NEVER commit)

### 1.3 Local Testing
- [ ] Open `outputs/development/index.html` in browser
- [ ] Verify all pages load correctly:
  - [ ] Home (index.html)
  - [ ] Servicios (pages/servicios.html)
  - [ ] Galería (pages/galeria.html)
  - [ ] Contacto (pages/contacto.html)
  - [ ] Política de Privacidad (pages/politica-privacidad.html)
- [ ] Test responsive design on mobile (320px-480px)
- [ ] Test responsive design on tablet (768px-1024px)
- [ ] Test responsive design on desktop (>1024px)
- [ ] Verify WhatsApp button appears on all pages
- [ ] Verify contact form works (test submission)
- [ ] Verify gallery filters work
- [ ] Verify gallery lightbox works
- [ ] Check all images load correctly

### 1.4 Docker Testing (Optional)
- [ ] Build Docker image: `docker build -t tattoworld -f outputs/production/Dockerfile .`
- [ ] Run container: `docker run -p 3000:80 tattoworld`
- [ ] Verify site accessible at http://localhost:3000
- [ ] Verify health check works: `docker inspect --format='{{.State.Health.Status}}' <container_id>`

---

## Phase 2: Deployment (During Deployment)

### 2.1 GitHub Pages (Recommended)
- [ ] Create GitHub repository
- [ ] Push code to repository
- [ ] Go to Repository Settings > Pages
- [ ] Select `main` branch as source
- [ ] Wait for deployment (1-2 minutes)
- [ ] Verify site accessible at `https://username.github.io/tattoworld/`

### 2.2 Vercel (Alternative)
- [ ] Install Vercel CLI: `npm install -g vercel`
- [ ] Run deployment: `vercel`
- [ ] Follow prompts to connect to GitHub
- [ ] Verify site accessible at Vercel URL

### 2.3 Netlify (Alternative)
- [ ] Install Netlify CLI: `npm install -g netlify-cli`
- [ ] Run deployment: `netlify deploy --dir=outputs/development`
- [ ] Follow prompts to connect to GitHub
- [ ] Verify site accessible at Netlify URL

### 2.4 Docker (Self-hosted)
- [ ] Build production image: `docker build -t tattoworld -f outputs/production/Dockerfile .`
- [ ] Start production container: `docker compose -f outputs/production/docker-compose.prod.yml up -d`
- [ ] Verify container running: `docker ps`
- [ ] Verify site accessible at configured port
- [ ] Verify health check passing

---

## Phase 3: Post-Deploy (After Deployment)

### 3.1 Verification
- [ ] All pages accessible via production URL
- [ ] HTTPS enabled and working
- [ ] All images loading correctly
- [ ] WhatsApp button functional
- [ ] Contact form submitting successfully
- [ ] Formspree receiving submissions
- [ ] Gallery filters working
- [ ] Gallery lightbox working
- [ ] Mobile responsiveness verified
- [ ] Page load time < 3 seconds
- [ ] No console errors in browser

### 3.2 SEO Verification
- [ ] Meta tags present on all pages
- [ ] Open Graph tags working (test with Facebook Sharing Debugger)
- [ ] Favicon loading correctly
- [ ] Sitemap.xml accessible (if created)
- [ ] robots.txt accessible (if created)

### 3.3 Security Verification
- [ ] No mixed content warnings (HTTP resources on HTTPS page)
- [ ] Security headers present (check with securityheaders.com)
- [ ] No sensitive data exposed in source code
- [ ] .env not accessible via web

### 3.4 Documentation Update
- [ ] Update README.md with production URL
- [ ] Update CHANGELOG.md with deployment date
- [ ] Create Git tag: `git tag -a v1.0.0 -m "Initial production release"`
- [ ] Push tag: `git push origin v1.0.0`

### 3.5 Monitoring Setup (Optional)
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Set up analytics (Google Analytics, etc.)

---

## Phase 4: Rollback Plan

If issues are detected after deployment:

### 4.1 GitHub Pages
- [ ] Revert to previous commit: `git revert HEAD`
- [ ] Push changes: `git push`
- [ ] Wait for automatic redeployment

### 4.2 Vercel/Netlify
- [ ] Access dashboard
- [ ] Find previous successful deployment
- [ ] Promote to production

### 4.3 Docker
- [ ] Stop current container: `docker compose -f outputs/production/docker-compose.prod.yml down`
- [ ] Pull previous version: `docker pull tattoworld:previous`
- [ ] Start previous version: `docker run -d -p 80:80 tattoworld:previous`

---

## Critical Contacts

- **Developer**: [Your Name]
- **WhatsApp Support**: [Your WhatsApp Number]
- **Email Support**: [Your Email]

---

## Notes

- **Deployment Date**: TBD
- **Version**: 1.0.0
- **Expected Traffic**: < 1000 visits/month
- **Primary Audience**: Spanish-speaking tattoo clients in Chile/LatAm
- **Contact Method**: WhatsApp (preferred)

---

## Sign-off

- [ ] **Developer**: _________________ Date: _________
- [ ] **Client**: _________________ Date: _________
- [ ] **QA**: _________________ Date: _________

---

**Last Updated**: 2026-06-14
**Version**: 1.0.0
