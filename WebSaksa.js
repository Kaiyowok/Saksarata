        // ==================== Loading Screen ====================
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            document.body.classList.add('loading');

            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                document.body.classList.remove('loading');
            }, 2000);
        });

        // ==================== Mobile Menu Toggle ====================
        const checkbox = document.getElementById('checkbox');
        const navLinks = document.getElementById('nav-links');

        checkbox.addEventListener('change', () => {
            navLinks.classList.toggle('active', checkbox.checked);
        });

        // ==================== Header Scroll Effect ====================
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 100);
        });

        // ==================== Scroll Animation ====================
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-title, .about-content, .event-card, .juknis-item, .gallery-item, .footer-content')
            .forEach(el => observer.observe(el));

        // ==================== Smooth Scroll for Anchor Links ====================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    checkbox.checked = false;
                    navLinks.classList.remove('active');
                }
            });
        });

        // ==================== Create Particles for Footer ====================
        function createParticles() {
            const container = document.getElementById('footer-particles');
            const particleCount = 15;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                const size = Math.random() * 20 + 5;
                const left = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${left}%`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;

                container.appendChild(particle);
            }
        }

        createParticles();
