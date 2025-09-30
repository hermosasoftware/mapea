# 🚀 MAPEA - Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **Build Verification**
```bash
npm run build
```
- [ ] Build completes without errors
- [ ] All assets are generated in `/dist`
- [ ] Sitemap is created
- [ ] Images are optimized to WebP

### ✅ **SEO Verification**
- [ ] Meta tags are present in `/dist/index.html`
- [ ] Schema.org JSON-LD is included
- [ ] Sitemap.xml is accessible at `/sitemap.xml`
- [ ] Robots.txt is present at `/robots.txt`

### ✅ **Performance Verification**
- [ ] Code splitting is working (check chunks in `/dist/_astro/`)
- [ ] Images are optimized (WebP format)
- [ ] CSS is minified
- [ ] JavaScript is minified

## 🌐 **Deployment Options**

### **Option 1: Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### **Option 2: Vercel**
1. Connect your GitHub repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

### **Option 3: GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions workflow (see `.github/workflows/deploy.yml`)
3. Deploy automatically on push to main branch

## 🔧 **Environment Variables**

Copy `env.example` to `.env` and configure:
- `SITE_URL`: Your production domain
- `COMPANY_EMAIL`: Contact email
- `COMPANY_PHONE`: Contact phone
- Social media URLs

## 📊 **Post-Deployment**

### **SEO Testing**
- [ ] Test meta tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Submit sitemap to Google Search Console

### **Performance Testing**
- [ ] Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test with [GTmetrix](https://gtmetrix.com/)
- [ ] Verify Core Web Vitals

### **Analytics Setup**
- [ ] Add Google Analytics (if enabled)
- [ ] Set up Google Search Console
- [ ] Monitor performance metrics

## 🚨 **Troubleshooting**

### **Common Issues**
1. **Build fails**: Check for TypeScript errors
2. **Images not loading**: Verify asset paths
3. **SEO not working**: Check meta tags in HTML source
4. **Performance issues**: Verify code splitting

### **Support**
- Check Astro documentation: https://docs.astro.build/
- Check deployment logs in your hosting platform
- Verify all dependencies are installed correctly




