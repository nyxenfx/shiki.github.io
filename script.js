// ==================== 
// MOBILE MENU TOGGLE
// ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== 
// SMOOTH SCROLL BEHAVIOR
// ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 
// FORM SUBMISSION
// ==================== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const inputs = this.querySelectorAll('input, textarea');
        const formData = new FormData();
        
        inputs.forEach(input => {
            formData.append(input.name || input.placeholder, input.value);
        });

        // Show success message
        const originalHTML = this.innerHTML;
        this.innerHTML = '<div style="text-align: center; padding: 20px; background: #e6fffa; color: #038c7f; border-radius: 8px; font-weight: 600;">Thank you! Your message has been sent successfully.</div>';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.reset();
            
            // Reattach event listener
            contactForm.addEventListener('submit', arguments.callee);
        }, 3000);
    });
}

// ==================== 
// BUTTON ANIMATIONS
// ==================== 
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== 
// SCROLL ANIMATIONS
// ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and service items
document.querySelectorAll('.about-card, .service-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ==================== 
// ACTIVE NAV LINK
// ==================== 
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// PAGE LOAD ANIMATION
// ==================== 
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initial page setup
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ==================== 
// CONSOLE MESSAGE
// ==================== 
console.log('%cWelcome to CleanWeb! 🚀', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cCheck out the beautiful code in your developer tools!', 'color: #764ba2; font-size: 14px;');