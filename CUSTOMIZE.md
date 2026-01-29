# Quick Customization Guide

Fast reference for common customization tasks on Fortumars website.

## 🎨 Change Colors

**File**: `style.css` (Lines 8-14)

### Find This:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --primary-light: #3b82f6;
    --secondary-color: #10b981;
    --accent-color: #f59e0b;
```

### Change These Values:
- `--primary-color`: Main brand color (currently blue #2563eb)
- `--secondary-color`: Secondary color (currently green #10b981)
- `--accent-color`: Highlight color (currently orange #f59e0b)

### Useful Colors for Different Industries:
- **Tech Companies**: #2563eb (Blue), #10b981 (Green)
- **Financial**: #1e40af (Dark Blue), #fbbf24 (Gold)
- **Creative**: #d946ef (Purple), #f59e0b (Orange)
- **Healthcare**: #06b6d4 (Cyan), #10b981 (Green)

---

## 📝 Update Company Information

**File**: `index.html`

### Phone Numbers
Find and replace:
```
+91 98765 43210  → Your phone number
+91 12345 67890  → Your alternate phone
```

### Email Addresses
Find and replace:
```
info@fortumars.com → Your main email
support@fortumars.com → Your support email
```

### Office Address
Find and replace:
```
123 Business Park, Suite 100
New Delhi, India 110001
```

### Business Hours
Find and replace:
```
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 9:00 AM - 2:00 PM
```

---

## 💰 Update Pricing

**File**: `index.html` - Find "Packages Section"

### Starter Package
```html
<span class="amount">299</span>  <!-- Change to your price -->
```

### Professional Package
```html
<span class="amount">599</span>  <!-- Change to your price -->
```

### Enterprise Package
```html
<span class="amount">999</span>  <!-- Change to your price -->
```

### Update Features Lists
Find each package and update features:
```html
<li><i class="fas fa-check"></i> Your feature here</li>
```

---

## 🎯 Update Services

**File**: `index.html` - Find "Services Section"

### For Each Service Card:

#### Title
```html
<h3>Web Design</h3>  <!-- Change title -->
```

#### Description
```html
<p>Your description here...</p>
```

#### Features
```html
<li><i class="fas fa-check"></i> Feature 1</li>
<li><i class="fas fa-check"></i> Feature 2</li>
<li><i class="fas fa-check"></i> Feature 3</li>
```

#### Icon (Optional)
Change the icon class: `<i class="fas fa-paint-brush"></i>`

Popular FontAwesome icons:
- Web Design: `fas fa-paint-brush`
- Development: `fas fa-code`
- Mobile Apps: `fas fa-mobile-alt`
- Business: `fas fa-briefcase`
- Rocket: `fas fa-rocket`
- Settings: `fas fa-cog`
- Shield: `fas fa-shield-alt`
- Zap: `fas fa-bolt`

---

## 📊 Update Statistics (Hero Section)

**File**: `index.html` - Find "hero-stats"

### Change Stats:
```html
<div class="stat-item">
    <h3>500+</h3>          <!-- Change number -->
    <p>Businesses Transformed</p>  <!-- Change label -->
</div>
```

---

## 👥 Update About Section

**File**: `index.html` - Find "About Section"

### Company Mission
```html
<h3>Your Partner in Digital Growth</h3>
<p>Your mission statement here...</p>
```

### Statistics
```html
<div class="stat">
    <h4>8+ Years</h4>
    <p>Industry Experience</p>
</div>
```

### Core Values
Find and update:
```html
<h5>Excellence</h5>
<p>Your description of excellence...</p>
```

---

## 📱 Change Mobile Menu Hamburger Behavior

**File**: `script.js`

The hamburger menu automatically toggles. To customize:

### Add Smooth Transition:
Edit the CSS for `.hamburger span` with:
```css
transition: all 0.3s ease;
```

---

## 📧 Enable Email Notifications (Production)

**File**: `script.js`

### Option 1: Using FormSubmit.co (Easiest)

Find `handleApplicationSubmit` function and modify:

```javascript
// Option 1: Using FormSubmit
setTimeout(() => {
    // Submit to FormSubmit
    const form = event.target;
    form.action = 'https://formsubmit.co/your-email@example.com';
    form.method = 'POST';
    form.submit();
}, 0);
```

### Option 2: Using Custom Backend

```javascript
setTimeout(() => {
    // Send to your backend
    fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        showSuccessModal('Submitted successfully!');
    })
    .catch(error => {
        showErrorMessage('Error submitting form');
    });
}, 2000);
```

---

## 🏢 Customize Hero Section

**File**: `index.html` - Find "Hero Section"

### Main Headline
```html
<h1 class="hero-title">
    Transform Your Business with <span class="text-gradient">Digital Excellence</span>
</h1>
```

### Subheadline
```html
<p class="hero-subtitle">
    Your main value proposition here...
</p>
```

### Button Text
```html
<button class="btn btn-primary btn-large" onclick="scrollToSection('application')">
    <i class="fas fa-rocket"></i> Start Your Project
</button>
```

---

## 🎨 Change Fonts (Advanced)

**File**: `style.css` and `index.html`

### Current Font
```
Inter (Google Fonts - Modern, Professional)
```

### To Change Font:

1. In `index.html`, find:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

2. Go to [Google Fonts](https://fonts.google.com)
3. Select your font
4. Copy the import link
5. Replace the link above

6. In `style.css`, change:
```css
body {
    font-family: 'YourNewFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 🔗 Add New Navigation Links

**File**: `index.html` - Find "nav-menu"

### Add New Link:
```html
<ul class="nav-menu">
    <!-- ... existing links ... -->
    <li><a href="#blog" class="nav-link">Blog</a></li>
    <li><a href="#faq" class="nav-link">FAQ</a></li>
</ul>
```

### Create Matching Section:
```html
<section id="blog" class="blog">
    <!-- Your content here -->
</section>
```

---

## 🎁 Add New Service

**File**: `index.html` - Find "services-grid"

### Copy This Card:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description here...</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
        <li><i class="fas fa-check"></i> Feature 3</li>
    </ul>
    <button class="btn btn-primary" onclick="openServiceModal('service-id')">Learn More</button>
</div>
```

### Add Service Modal Content:

In `script.js`, find `serviceDetails` object and add:
```javascript
'service-id': {
    title: 'Service Name',
    content: 'Detailed service description...'
}
```

---

## 🎨 Change Section Background Colors

**File**: `style.css`

### Find Section Classes:
```css
.services { background: var(--bg-light); }    /* Light gray */
.packages { background: var(--bg-white); }    /* White */
.application { background: var(--bg-light); } /* Light gray */
.about { background: var(--bg-light); }       /* Light gray */
```

### Change Backgrounds:
```css
/* Option 1: Use predefined colors */
.services { background: var(--bg-white); }

/* Option 2: Custom color */
.services { background: #f0f9ff; }

/* Option 3: Gradient */
.services { background: linear-gradient(135deg, #f0f9ff, #f0fdf4); }
```

---

## 📱 Customize Button Colors

**File**: `style.css`

### Primary Button (Blue)
```css
.btn-primary {
    background: var(--gradient-primary);  /* Gradient blue */
    color: white;
}
```

### Secondary Button (Green)
```css
.btn-secondary {
    background: var(--gradient-secondary); /* Gradient green */
    color: white;
}
```

### Outline Button
```css
.btn-outline {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}
```

---

## 🔐 Add Privacy Policy

1. Create file `privacy-policy.html` with your policy
2. Link from footer:
```html
<a href="privacy-policy.html">Privacy Policy</a>
```

---

## 🔍 Add Favicon

1. Create favicon (use [favicon.io](https://favicon.io))
2. Save as `favicon.ico` in root folder
3. Add to `index.html` `<head>`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

## 📊 Track Custom Events (Analytics)

Add to `script.js`:
```javascript
// Track when user applies
function trackApplicationClick() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'application_click');
    }
}

// Track form submission
function trackFormSubmit(formName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'form_name': formName
        });
    }
}
```

---

## ✅ Common Customization Checklist

- [ ] Updated company name
- [ ] Updated phone numbers
- [ ] Updated email addresses
- [ ] Updated office address
- [ ] Updated business hours
- [ ] Updated services/pricing
- [ ] Updated company mission
- [ ] Changed colors to brand colors
- [ ] Updated hero headline
- [ ] Removed/updated social links
- [ ] Added privacy policy
- [ ] Added favicon
- [ ] Tested all forms
- [ ] Tested on mobile
- [ ] Updated meta description

---

## 🆘 Need More Help?

- Check SETUP.md for deployment help
- Check DEPLOYMENT_CHECKLIST.md before launch
- Review README.md for full documentation
- Test in browser console (F12) for errors
- Check Font Awesome icons: [fontawesome.com/icons](https://fontawesome.com/icons)

---

**Happy Customizing! Your website is ready to be personalized. 🚀**
