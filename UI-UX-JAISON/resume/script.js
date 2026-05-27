/**
 * ==========================================================================
 * FUTURISTIC INTERACTIVE RESUME OS CAPTURE MECHANISMS
 * Built exclusively using premium modern rendering engines
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INITIALIZE LENIS SMOOTH SCROLLING ENGINE
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Link Nav Click events directly into the Lenis execution track
    document.querySelectorAll('.nav-links a, .hero-actions button').forEach(element => {
        element.addEventListener('click', (e) => {
            const targetAttr = element.getAttribute('href') || element.getAttribute('data-target');
            if(targetAttr && targetAttr.startsWith('#')) {
                e.preventDefault();
                lenis.scrollTo(targetAttr, { offset: -50 });
            }
        });
    });


    // 2. MODERN CURSOR PHYSICS PATHWAYS
    const cursorOuter = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate tracking for interior physics dot
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    // Outer smooth trailing physics interpolation loop
    function updateCursorPhysics() {
        let dx = mouseX - cursorX;
        let dy = mouseY - cursorY;
        
        cursorX += dx * 0.12;
        cursorY += dy * 0.12;
        
        cursorOuter.style.left = `${cursorX}px`;
        cursorOuter.style.top = `${cursorY}px`;
        
        requestAnimationFrame(updateCursorPhysics);
    }
    updateCursorPhysics();

    // Add Premium Hover amplification states
    document.querySelectorAll('a, button, .channel-card, .skills-category-card').forEach(item => {
        item.addEventListener('mouseenter', () => cursorOuter.classList.add('hovered'));
        item.addEventListener('mouseleave', () => cursorOuter.classList.remove('hovered'));
    });


    // 3. CANVAS FLUID PARTICLE PHYSICS ENGINE
    const canvas = document.getElementById('fluidCanvas');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    function resizeCanvasToViewport() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvasToViewport();
    window.addEventListener('resize', resizeCanvasToViewport);

    class LiquidParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * -1.5 - 0.5; // Upward stream drift
            this.opacity = 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.opacity > 0.01) this.opacity -= 0.008;
        }
        draw() {
            ctx.fillStyle = `rgba(185, 167, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Capture user track lines both for mouse vectors and mobile screen swipes
    function injectLiquidPulse(clientX, clientY) {
        if(particlesArray.length < 100) { // Safety ceiling caps performance limits
            for (let i = 0; i < 2; i++) {
                particlesArray.push(new LiquidParticle(clientX, clientY));
            }
        }
    }

    window.addEventListener('mousemove', (e) => injectLiquidPulse(e.clientX, e.clientY));
    window.addEventListener('touchmove', (e) => {
        if(e.touches.length > 0) {
            injectLiquidPulse(e.touches[0].clientX, e.touches[0].clientY);
        }
    });

    function handleParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].opacity <= 0.02) {
                particlesArray.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(handleParticles);
    }
    handleParticles();


    // 4. MAGNETIC COMPONENT INTERACTION LAWS
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', function(e) {
            const bound = this.getBoundingClientRect();
            const x = e.clientX - bound.left - (bound.width / 2);
            const y = e.clientY - bound.top - (bound.height / 2);
            
            // Attract element towards cursor location
            gsap.to(this, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        elem.addEventListener('mouseleave', function() {
            // Smooth release back to structural standard baseline
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });


    // 5. GSAP SCROLL REVEAL & DYNAMIC MATRIX CONTROLS
    gsap.registerPlugin(ScrollTrigger);

    // Fade reveal up elements layout sequence
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((elem) => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Navigation Links Active Highlights Tracker
    const functionalSections = document.querySelectorAll('section');
    functionalSections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => activateNavigationNode(section.id),
            onEnterBack: () => activateNavigationNode(section.id)
        });
    });

    function activateNavigationNode(id) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    // Micro Skills Card Internal Mouse Matrix Vector Listener
    const skillCards = document.querySelectorAll('.skills-category-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });

        // Trigger visual horizontal progress loop when containing card displays
        ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
                card.querySelectorAll('.skill-progress-wrapper').forEach(wrapper => {
                    const progressTarget = wrapper.getAttribute('data-progress');
                    wrapper.querySelector('.bar-fill').style.width = progressTarget;
                });
            }
        });
    });


    // 6. VANILLA TILT ACCELERATION CONFIGURATION
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }


    // 7. ARTIFACT DEEP INSPECTION MODAL SYSTEM
    const modalTrigger = document.querySelector('.interactive-trigger');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const backdrop = document.querySelector('.modal-backdrop');

    if(modalTrigger && modal) {
        modalTrigger.addEventListener('click', () => {
            modal.classList.add('active');
            lenis.stop(); // Freeze structural scroll tracking loops
        });

        const collapseModal = () => {
            modal.classList.remove('active');
            lenis.start(); // Release lock
        };

        modalClose.addEventListener('click', collapseModal);
        backdrop.addEventListener('click', collapseModal);
    }
});