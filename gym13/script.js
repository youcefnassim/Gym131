document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('nav-link')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.main-header');
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const logoImg = document.querySelector('.logo-img');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Effet de disparition/réapparition
        if (currentScroll <= 0) {
            header.classList.remove('scrolled', 'hide');
            navbar.classList.remove('scrolled');
            logo.classList.remove('scrolled');
            logoImg.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('hide')) {
            // Défilement vers le bas
            header.classList.add('hide');
        } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
            // Défilement vers le haut
            header.classList.remove('hide');
        }
        
        // Effet de rétrécissement
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            navbar.classList.add('scrolled');
            logo.classList.add('scrolled');
            logoImg.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            navbar.classList.remove('scrolled');
            logo.classList.remove('scrolled');
            logoImg.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    if (testimonials.length > 0) {
        showTestimonial(0);
        
        nextBtn.addEventListener('click', function() {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            showTestimonial(nextIndex);
        });
        
        prevBtn.addEventListener('click', function() {
            let prevIndex = currentTestimonial - 1;
            if (prevIndex < 0) prevIndex = testimonials.length - 1;
            showTestimonial(prevIndex);
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            let nextIndex = currentTestimonial + 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            showTestimonial(nextIndex);
        }, 5000);
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data to a server
            alert('Merci pour votre message! Nous vous contacterons bientôt.');
            this.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Merci pour votre inscription! Un email de confirmation a été envoyé à ${emailInput.value}`);
            emailInput.value = '';
        });
    }
});
 // Tab functionality for programs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                const tabContainer = btn.closest('.program-tabs');
                
                // Remove active class from all buttons and contents
                tabContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                tabContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
       
        // Pricing toggle functionality
        const pricingToggle = document.getElementById('pricing-toggle');
        const monthlyPrices = document.querySelectorAll('.monthly-price');
        const yearlyPrices = document.querySelectorAll('.yearly-price');
        
        pricingToggle.addEventListener('change', function() {
            if(this.checked) {
                monthlyPrices.forEach(price => price.classList.add('hidden'));
                yearlyPrices.forEach(price => price.classList.remove('hidden'));
            } else {
                monthlyPrices.forEach(price => price.classList.remove('hidden'));
                yearlyPrices.forEach(price => price.classList.add('hidden'));
            }
        });
        
        // FAQ accordion functionality
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                question.classList.toggle('active');
                answer.classList.toggle('active');
                
                if(question.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
        
        // Form submission
        const membershipForm = document.getElementById('membershipForm');
        
        if(membershipForm) {
            membershipForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Merci pour votre inscription! Nous vous contacterons dans les plus brefs délais pour finaliser votre adhésion.');
                this.reset();
            });
        }
   