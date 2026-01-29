# Developer Quick Reference Card

**Fortumars Pvt Ltd Website** - Quick lookup for developers and support team

---

## 🚀 Quick Start

```bash
# Open in browser
Open index.html

# Local testing
python -m http.server 8000
# Visit http://localhost:8000

# Deploy
Upload all files to hosting
```

---

## 📁 Key Files & Locations

| File | Size | Purpose |
|------|------|---------|
| index.html | 45KB | Main website content |
| style.css | 25KB | All styling & responsive |
| script.js | 15KB | Forms, navigation, interactions |
| README.md | - | Full documentation |
| SETUP.md | - | Setup & deployment guide |
| CUSTOMIZE.md | - | Customization quick guide |
| DEPLOYMENT_CHECKLIST.md | - | Pre-launch checklist |
| PERFORMANCE.md | - | Optimization guide |

---

## 🎨 Customization Quick Links

### Change Colors
**File**: style.css (Lines 8-14)
```css
--primary-color: #2563eb;      /* Main blue */
--secondary-color: #10b981;    /* Green */
--accent-color: #f59e0b;       /* Orange */
```

### Update Contact Info
**File**: index.html - Find these and replace:
- Phone: `+91 98765 43210`
- Email: `info@fortumars.com`
- Address: `123 Business Park, Suite 100`
- Hours: `Monday - Friday: 9:00 AM - 6:00 PM`

### Update Pricing
**File**: index.html - Search for:
- `<span class="amount">299</span>`  (Starter)
- `<span class="amount">599</span>`  (Professional)
- `<span class="amount">999</span>`  (Enterprise)

### Update Services
**File**: index.html - Find "Services Section"
- Edit service card titles
- Edit descriptions
- Edit feature lists
- Change icons (Font Awesome)

---

## 🔧 Form Handling

### Form Locations in HTML
- Application Form: `id="application"`
- Booking Form: `id="booking"`
- Contact Form: `id="contact"`
- Newsletter: Footer

### Form Handlers in JavaScript
- `handleApplicationSubmit(event)` - Line ~100
- `handleBookingSubmit(event)` - Line ~150
- `handleContactSubmit(event)` - Line ~200
- `handleNewsletterSubmit(event)` - Line ~250

### Enable Email (Production)

**Option 1: FormSubmit.co**
```javascript
form.action = 'https://formsubmit.co/your-email@example.com';
form.method = 'POST';
form.submit();
```

**Option 2: Netlify Forms**
```html
<form name="application" netlify>
  <!-- fields -->
</form>
```

**Option 3: Custom Backend**
```javascript
fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

---

## 🔍 Sections & IDs

| Section | ID | Page Position |
|---------|----|----|
| Home | #home | Top (Hero) |
| Services | #services | After hero |
| Packages | #packages | After services |
| Application | #application | After packages |
| Booking | #booking | After application |
| About | #about | After booking |
| Contact | #contact | Bottom |

---

## 📱 Responsive Breakpoints

```css
Desktop:     1024px+      (Full layout)
Tablet:      768px-1024px (Adjusted grid)
Mobile:      <768px       (Single column)
Small:       <480px       (Optimized text)
```

---

## 🎯 Navigation Links

```html
<!-- Update in header and footer -->
<a href="#home">Home</a>
<a href="#services">Services</a>
<a href="#packages">Packages</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
```

---

## 🔐 Form Validation Rules

| Field | Validation | Error Message |
|-------|-----------|-------|
| Email | RFC 5322 | "Please enter a valid email address." |
| Phone | 10+ digits | "Please enter a valid phone number (at least 10 digits)." |
| Date | Future only | "Please select a future date." |
| Name | Not empty | "Please enter your [field name]." |
| Text areas | Not empty | "Please [describe action]." |

---

## 🎨 Color Palette

```
Primary Blue:    #2563eb (used in buttons, headings)
Primary Dark:    #1e40af (hover states)
Primary Light:   #3b82f6 (lighter variant)
Secondary Green: #10b981 (success, accents)
Accent Orange:   #f59e0b (highlights)
Dark Text:       #1f2937 (main text)
Light Text:      #6b7280 (secondary text)
Light Gray:      #9ca3af (tertiary text)
Background:      #f9fafb (light sections)
White:           #ffffff (light sections)
Border:          #e5e7eb (lines, dividers)
```

---

## 🎬 CSS Animation Classes

```css
.fade-in       /* Opacity + translate Y */
.slide-in-left /* Translate X from left */
.slide-in-right /* Translate X from right */
```

Add to elements that need animation on scroll.

---

## 💻 JavaScript Function Reference

### Navigation
```javascript
scrollToSection(sectionId)  // Smooth scroll
```

### Forms
```javascript
handleApplicationSubmit(event)
handleBookingSubmit(event)
handleContactSubmit(event)
handleNewsletterSubmit(event)
```

### Validation
```javascript
validateEmail(email)
validatePhone(phone)
```

### UI
```javascript
showSuccessModal(message)
showErrorMessage(message)
closeModal(modalId)
```

### Utilities
```javascript
selectPackage(packageName)
openServiceModal(serviceType)
```

---

## 🐛 Common Issues & Fixes

### Issue: Mobile menu not closing
**Fix**: Check if `navMenu.classList.remove('active')` is called
**Location**: script.js, mobile navigation handler

### Issue: Forms not validating
**Fix**: Check validation functions in script.js
**Look for**: `validateEmail()`, `validatePhone()`

### Issue: Animations not smooth
**Fix**: Enable CSS transform acceleration
**Tip**: Use `transform: translateX(0)` instead of left/right

### Issue: Responsive layout broken
**Fix**: Check media queries in style.css
**Breakpoints**: 1024px, 768px, 480px

### Issue: Fonts not loading
**Fix**: Check Google Fonts link in <head>
**Verify**: Internet connection, CDN access

---

## 📊 Performance Checklist

- [ ] Gzip compression enabled
- [ ] Cache headers set
- [ ] CSS/JS minified (optional)
- [ ] Lighthouse score > 80
- [ ] Page load < 3 seconds
- [ ] No console errors
- [ ] No console warnings

---

## 🚀 Deployment Checklist

- [ ] All files uploaded
- [ ] Domain configured
- [ ] SSL certificate enabled
- [ ] Forms configured
- [ ] Analytics added (optional)
- [ ] Mobile tested
- [ ] All links work
- [ ] Forms tested

---

## 🔗 External Resources

| Resource | URL | Purpose |
|----------|-----|---------|
| Font Awesome Icons | fontawesome.com/icons | Find icon codes |
| Google Fonts | fonts.google.com | Change fonts |
| CSS Tricks | css-tricks.com | CSS help |
| MDN Docs | developer.mozilla.org | Web API reference |
| PageSpeed Insights | pagespeed.web.dev | Performance testing |
| Lighthouse | chrome://lighthouse | Local audits |

---

## 📞 Support Resources

- README.md - Full documentation
- SETUP.md - Setup guide
- CUSTOMIZE.md - Customization guide  
- DEPLOYMENT_CHECKLIST.md - Launch guide
- PERFORMANCE.md - Optimization guide
- WEBSITE_CONTENTS.md - Complete package guide

---

## 🎯 Development Workflow

```
1. Make changes to files
2. Save files
3. Refresh browser (F5)
4. Test functionality
5. Check responsive design (F12)
6. Commit changes
7. Deploy to production
8. Monitor performance
```

---

## ⌨️ Keyboard Shortcuts (Development)

```
F5              Refresh page
F12             Open DevTools
Ctrl+Shift+C    Inspect element
Ctrl+K          Search DevTools
ESC             Close DevTools
```

---

## 📧 Form Success Messages

| Form | Success Message |
|------|---|
| Application | "Your application has been submitted successfully! We will contact you within 24 hours." |
| Booking | "Your consultation has been scheduled for [DATE] at [TIME]..." |
| Contact | "Your message has been sent successfully! We will get back to you within 24 hours." |
| Newsletter | "Thank you for subscribing! Check your email for our latest updates." |

---

## 🔄 Update Process

### Content Updates
1. Edit index.html
2. Update corresponding CSS if needed
3. Test in browser
4. Upload to hosting
5. Clear cache if needed

### Style Updates
1. Edit style.css
2. Refresh browser (Ctrl+Shift+R for hard refresh)
3. Test responsiveness
4. Upload to hosting

### Functionality Updates
1. Edit script.js
2. Test in browser console (F12)
3. Test all forms
4. Upload to hosting

---

## 💡 Pro Tips

- Use DevTools (F12) to test responsive design
- Use Console tab to check for errors
- Use Network tab to see load times
- Use Lighthouse for detailed audits
- Hard refresh (Ctrl+Shift+R) to clear cache
- Test on real mobile device if possible
- Use browser extensions like Accessibility Inspector

---

## 🎓 File Structure for New Developers

```html
<!-- In index.html -->
<section id="name" class="section-name">
  <!-- Content here -->
</section>

<!-- In style.css -->
.section-name {
  padding: 5rem 0;
  background: var(--bg-light);
}

@media (max-width: 768px) {
  .section-name {
    padding: 3rem 0;
  }
}

<!-- In script.js -->
document.addEventListener('DOMContentLoaded', () => {
  // Add functionality
});
```

---

**Last Updated**: January 2024
**Version**: 1.0
**Status**: Production Ready ✅

---

**Quick Help**: 
- Issues? → Check SETUP.md troubleshooting
- Customize? → Use CUSTOMIZE.md
- Launch? → Follow DEPLOYMENT_CHECKLIST.md
- Performance? → Read PERFORMANCE.md
