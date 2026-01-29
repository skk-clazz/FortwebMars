// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Form validation and submission
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    const digitsOnly = phone.replace(/\D/g, '');
    return re.test(phone) && digitsOnly.length >= 10;
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #ef4444;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        z-index: 3000;
        max-width: 90%;
        animation: slideDown 0.3s ease;
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => errorDiv.remove(), 300);
    }, 4000);
}

function showSuccessAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        z-index: 3000;
        max-width: 90%;
        animation: slideDown 0.3s ease;
    `;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

function showSuccessModal(message) {
    const modal = document.getElementById('successModal');
    const messageElement = document.getElementById('successMessage');
    messageElement.textContent = message;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal('successModal');
    }
});

// Application Form Handler
function handleApplicationSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.companyName.trim()) {
        showErrorMessage('Please enter your company name.');
        return;
    }
    
    if (!data.contactPerson.trim()) {
        showErrorMessage('Please enter your contact person name.');
        return;
    }
    
    if (!data.email.trim()) {
        showErrorMessage('Please enter your email address.');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    if (!data.phone.trim()) {
        showErrorMessage('Please enter your phone number.');
        return;
    }
    
    if (!validatePhone(data.phone)) {
        showErrorMessage('Please enter a valid phone number (at least 10 digits).');
        return;
    }

    if (!data.projectDescription.trim()) {
        showErrorMessage('Please describe your project requirements.');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    setTimeout(() => {
        // Store form data (in real app, this would be sent to a server)
        console.log('Application submitted:', data);
        
        // Reset form
        event.target.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
        // Show success message
        showSuccessModal('Your application has been submitted successfully! We will contact you within 24 hours.');
    }, 2000);
}

// Booking Form Handler
function handleBookingSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.name.trim()) {
        showErrorMessage('Please enter your full name.');
        return;
    }
    
    if (!data.email.trim()) {
        showErrorMessage('Please enter your email address.');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    if (!data.phone.trim()) {
        showErrorMessage('Please enter your phone number.');
        return;
    }
    
    if (!validatePhone(data.phone)) {
        showErrorMessage('Please enter a valid phone number (at least 10 digits).');
        return;
    }

    if (!data.date) {
        showErrorMessage('Please select a preferred date.');
        return;
    }

    if (!data.time) {
        showErrorMessage('Please select a preferred time.');
        return;
    }

    if (!data.type) {
        showErrorMessage('Please select a consultation type.');
        return;
    }
    
    // Check if date is in the future
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showErrorMessage('Please select a future date for your consultation.');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
    
    setTimeout(() => {
        // Store booking data (in real app, this would be sent to a server)
        console.log('Booking submitted:', data);
        
        // Reset form
        event.target.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
        // Format the date for display
        const dateObj = new Date(data.date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        
        // Show success message
        showSuccessModal(`Your consultation has been scheduled for ${formattedDate} at ${data.time}. We will send a confirmation email shortly.`);
    }, 2000);
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Validation
    if (!data.name.trim()) {
        showErrorMessage('Please enter your name.');
        return;
    }
    
    if (!data.email.trim()) {
        showErrorMessage('Please enter your email address.');
        return;
    }
    
    if (!validateEmail(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }

    if (!data.subject.trim()) {
        showErrorMessage('Please enter a subject.');
        return;
    }
    
    if (!data.message.trim()) {
        showErrorMessage('Please enter your message.');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    setTimeout(() => {
        // Store contact data (in real app, this would be sent to a server)
        console.log('Contact form submitted:', data);
        
        // Reset form
        event.target.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
        // Show success message
        showSuccessModal('Your message has been sent successfully! We will get back to you within 24 hours.');
    }, 2000);
}

// Newsletter Form Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value.trim();
    
    if (!email) {
        showErrorMessage('Please enter your email address.');
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address.');
        return;
    }
    
    // Simulate subscription
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalHTML = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        // Store email (in real app, this would be sent to a server)
        console.log('Newsletter subscription:', email);
        
        // Reset form
        event.target.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalHTML;
        
        // Show success message
        showSuccessAlert('Thank you for subscribing! Check your email for our latest updates.');
    }, 1500);
}

// Package Selection
function selectPackage(packageName) {
    // Scroll to application form
    scrollToSection('application');
    
    // Pre-select the package in the form (if there's a package field)
    setTimeout(() => {
        const serviceInterest = document.getElementById('service-interest');
        if (serviceInterest) {
            serviceInterest.value = 'complete-package';
        }
        
        // Focus on the first form field
        const firstField = document.getElementById('company-name');
        if (firstField) {
            firstField.focus();
        }
    }, 500);
}

// Service Modal (for detailed service information)
function openServiceModal(serviceType) {
    const serviceDetails = {
        'web-design': {
            title: 'Web Design Services',
            content: 'Our web design services include custom UI/UX design, responsive layouts, brand integration, and user-focused design principles. We create stunning websites that not only look great but also drive conversions.'
        },
        'web-development': {
            title: 'Website Development',
            content: 'We build robust, scalable websites using modern technologies. Our development services include custom coding, CMS integration, e-commerce solutions, and performance optimization.'
        },
        'web-apps': {
            title: 'Web Applications',
            content: 'Our web application development services include custom business applications, SaaS solutions, API integrations, and cloud-based platforms tailored to your specific business needs.'
        },
        'business-solutions': {
            title: 'Business Solutions',
            content: 'We provide comprehensive business solutions including digital transformation strategy, process automation, analytics implementation, and custom software development to streamline your operations.'
        }
    };
    
    const service = serviceDetails[serviceType];
    if (service) {
        showSuccessModal(`${service.title}: ${service.content}`);
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .package-card, .info-card, .value-item');
    animatedElements.forEach(el => observer.observe(el));
});

// Set minimum date for booking form to today
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Add loading states to all buttons
document.querySelectorAll('.btn').forEach(button => {
    if (!button.onclick && !button.type) {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-item h3, .stat h4');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isPlus = finalValue.includes('+');
        let numericValue = parseInt(finalValue.replace(/\D/g, ''));
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(currentValue);
                if (isPlus) displayValue += '+';
                if (isPercentage) displayValue += '%';
                
                stat.textContent = displayValue;
            }, 30);
        }
    });
}

// Trigger stats animation when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats section
document.addEventListener('DOMContentLoaded', () => {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
});

// Form field formatting
document.addEventListener('DOMContentLoaded', () => {
    // Phone number formatting
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
            e.target.value = value;
        });
    });
});

// Performance optimization - Lazy loading for images (if added later)
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Keyboard accessibility - Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('successModal');
        if (modal && modal.style.display === 'block') {
            closeModal('successModal');
        }
    }
});

// Skip to main content link (accessibility)
document.addEventListener('DOMContentLoaded', () => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 0 0 4px 0;
        z-index: 1000;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Enhanced form accessibility - focus management
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('invalid', (e) => {
        const firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) {
            firstInvalid.focus();
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, true);
});

// Console welcome message
console.log('%c🚀 Welcome to Fortumars Pvt Ltd Website', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cBuilt with modern web technologies for optimal performance and user experience.', 'font-size: 14px; color: #6b7280;');
console.log('%c📧 To enable email sending, follow the setup guide in SETUP.md', 'font-size: 12px; color: #10b981;');
