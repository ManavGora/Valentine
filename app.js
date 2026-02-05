// ===================================
// Valentine's Day Interactive App
// ===================================

const app = {
    currentPage: 0,
    pages: ['loader', 'landing', 'our-story', 'more-memories', 'reasons', 'ask', 'thank-you'],
    noButtonEscapes: 0,
    maxEscapes: 4,

    // Initialize the app
    init() {
        console.log('💕 Valentine App Initialized');
        this.setupNoButtonBehavior();
        this.startLoader();
        this.setupKeyboardNavigation();
    },

    // Start with loader
    startLoader() {
        const loader = document.getElementById('loader');
        loader.classList.add('active');

        // Auto-advance after 2 seconds
        setTimeout(() => {
            this.nextPage();
        }, 2000);
    },

    // Navigate to next page
    nextPage() {
        const currentSection = document.getElementById(this.pages[this.currentPage]);
        console.log('Current section:', this.pages[this.currentPage], currentSection);

        if (currentSection) {
            currentSection.classList.remove('active');
        }

        this.currentPage++;

        if (this.currentPage < this.pages.length) {
            const nextSection = document.getElementById(this.pages[this.currentPage]);
            console.log('Next section:', this.pages[this.currentPage], nextSection);
            if (nextSection) {
                nextSection.classList.add('active');
                console.log('Successfully activated:', this.pages[this.currentPage]);

                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                console.error('Next section not found!');
            }
        } else {
            console.log('Already at last page');
        }
    },

    // Navigate to specific page
    goToPage(pageIndex) {
        const currentSection = document.getElementById(this.pages[this.currentPage]);
        if (currentSection) {
            currentSection.classList.remove('active');
        }

        this.currentPage = pageIndex;
        const nextSection = document.getElementById(this.pages[this.currentPage]);
        if (nextSection) {
            nextSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    // Setup the evading "No" button
    setupNoButtonBehavior() {
        const noBtn = document.getElementById('noBtn');
        if (!noBtn) return;

        // Mouse move event
        document.addEventListener('mousemove', (e) => {
            if (this.currentPage === 5 && this.noButtonEscapes < this.maxEscapes) {
                this.handleNoButtonProximity(noBtn, e.clientX, e.clientY);
            }
        });

        // Touch move event for mobile
        document.addEventListener('touchmove', (e) => {
            if (this.currentPage === 5 && this.noButtonEscapes < this.maxEscapes) {
                const touch = e.touches[0];
                this.handleNoButtonProximity(noBtn, touch.clientX, touch.clientY);
            }
        });
    },

    // Check proximity to "No" button and move if too close
    handleNoButtonProximity(noBtn, x, y) {
        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
            Math.pow(x - btnCenterX, 2) + Math.pow(y - btnCenterY, 2)
        );

        // Threshold for moving the button (120px on desktop, 150px on mobile)
        const threshold = window.innerWidth < 768 ? 150 : 120;

        if (distance < threshold) {
            // Make button absolutely positioned on first escape
            if (!noBtn.classList.contains('evading')) {
                noBtn.classList.add('evading');
            }

            this.moveNoButton(noBtn);
            this.noButtonEscapes++;

            // After max escapes, change the text
            if (this.noButtonEscapes >= this.maxEscapes) {
                document.getElementById('noText').textContent = 'Fine... Yes? 😅';
            }
        }
    },

    // Move "No" button to random position
    moveNoButton(noBtn) {
        const container = noBtn.closest('.buttons-container');
        const containerRect = container.getBoundingClientRect();

        // Calculate safe bounds (keeping button within viewport with padding)
        const padding = 40;
        const maxX = containerRect.width - noBtn.offsetWidth - padding;
        const maxY = containerRect.height - noBtn.offsetHeight - padding;

        // Generate random position, avoiding the center where Yes button is
        let randomX, randomY;
        do {
            randomX = Math.random() * maxX;
            randomY = Math.random() * maxY;
        } while (
            // Avoid the center area where Yes button is
            randomX > containerRect.width / 2 - 150 &&
            randomX < containerRect.width / 2 + 50 &&
            randomY < 80
        );

        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    },

    // Handle "Yes" button click
    handleYes() {
        console.log('💕 She said YES!');
        console.log('Current page before navigation:', this.currentPage);

        // Trigger confetti
        this.triggerConfetti();

        // Play celebration animation
        const yesBtn = document.getElementById('yesBtn');
        yesBtn.style.transform = 'scale(1.2)';

        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 200);

        // Navigate to thank you page after confetti
        setTimeout(() => {
            console.log('Navigating to thank you page...');
            this.nextPage();
            console.log('Current page after navigation:', this.currentPage);
        }, 1500);
    },

    // Handle "No" button click (if they manage to click it)
    handleNo() {
        console.log('🚫 Attempting to click No...');

        // Show error modal
        const errorModal = document.getElementById('errorModal');
        errorModal.classList.add('show');

        // Play a little shake animation on the modal
        const errorContent = errorModal.querySelector('.error-content');
        errorContent.style.animation = 'none';
        setTimeout(() => {
            errorContent.style.animation = 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 10);
    },

    // Close error modal
    closeError() {
        const errorModal = document.getElementById('errorModal');
        errorModal.classList.remove('show');

        // Highlight the Yes button
        const yesBtn = document.getElementById('yesBtn');
        yesBtn.style.animation = 'pulse 0.5s ease 3';
    },

    // Trigger confetti celebration
    triggerConfetti() {
        if (typeof confetti === 'undefined') {
            console.warn('Confetti library not loaded');
            return;
        }

        const duration = 3000;
        const end = Date.now() + duration;
        const colors = ['#E91E63', '#FF4081', '#F48FB1', '#FF80AB'];

        // Launch confetti repeatedly from both sides
        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
                scalar: 1.2
            });

            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
                scalar: 1.2
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Also add some big burst confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: colors
        });
    },

    // Share link functionality
    shareLink() {
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: 'She said YES! 💕',
                text: 'I asked, and she said yes! ❤️',
                url: url
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.log('Error sharing:', error);
                this.fallbackCopyLink(url);
            });
        } else {
            this.fallbackCopyLink(url);
        }
    },

    // Fallback: copy link to clipboard
    fallbackCopyLink(url) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! Share it with the world 💕');
        }).catch((error) => {
            console.error('Could not copy link:', error);
            // Show URL in prompt as last resort
            prompt('Copy this link:', url);
        });
    },

    // Keyboard navigation
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Enter or Space to advance (except on input fields)
            if ((e.key === 'Enter' || e.key === ' ') &&
                e.target.tagName !== 'INPUT' &&
                e.target.tagName !== 'TEXTAREA' &&
                !e.target.classList.contains('yes-btn')) {

                if (this.currentPage > 0 && this.currentPage < 5) {
                    e.preventDefault();
                    this.nextPage();
                }
            }
        });
    },

    // Easter egg: Konami code
    setupKonamiCode() {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateKonamiEasterEgg();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    },

    // Konami code easter egg
    activateKonamiEasterEgg() {
        console.log('🎮 Konami Code Activated!');

        // Extreme confetti
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.triggerConfetti();
            }, i * 200);
        }

        // Show message
        alert('💕 Extra love unlocked! You found the secret code! 💕');
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
    // Uncomment to enable Konami code easter egg
    // app.setupKonamiCode();
});

// Prevent default behavior on some keys
document.addEventListener('keydown', (e) => {
    // Prevent space from scrolling
    if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
    }
});

// Add some extra touches
window.addEventListener('load', () => {
    console.log('%c💕 Made with Love 💕', 'color: #E91E63; font-size: 24px; font-weight: bold;');
    console.log('%cThis website was crafted with care for someone special', 'color: #6B6B6B; font-size: 14px;');
});

// Handle visibility change (pause animations when tab is hidden)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab hidden - pausing animations');
    } else {
        console.log('Tab visible - resuming animations');
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = (target) => {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    // Override smooth scroll behavior
    window.scrollTo = new Proxy(window.scrollTo, {
        apply: (target, thisArg, args) => {
            if (args[0]?.behavior === 'smooth') {
                smoothScroll(document.body);
            } else {
                return target.apply(thisArg, args);
            }
        }
    });
}

// Export app for console access (debugging)
window.valentineApp = app;
