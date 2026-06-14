// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.stat-item, .expertise-card, .journal-card, .project-card, ' +
        '.value-card, .process-step, .team-member, .award-item, ' +
        '.journal-card-full, .project-card-large'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would normally send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Newsletter subscription
const newsletterForms = document.querySelectorAll('.newsletter-input');
newsletterForms.forEach(form => {
    const button = form.querySelector('button');
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            const email = input.value;
            
            if (email && email.includes('@')) {
                console.log('Newsletter subscription:', email);
                alert('Thank you for subscribing to our newsletter!');
                input.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#instagram' && href !== '#linkedin' && href !== '#privacy' && href !== '#terms') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
