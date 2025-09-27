/**
 * Belarte Co. - Final Website JavaScript
 * Features: i18n, dynamic header, mobile navigation, lazy loading
 */

class BelarteWebsite {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {};
        this.isLoading = false;
        
        this.init();
    }

    async init() {
        // Load initial language
        await this.loadLanguage(this.currentLanguage);
        
        // Initialize components
        this.initHeader();
        this.initMobileNavigation();
        this.initLanguageSelector();
        this.initLazyLoading();
        this.initNewsletterForm();
        this.initAntiStroke();
        
        // Apply initial translations
        this.applyTranslations();
        
        console.log('Belarte website initialized successfully');
    }

    /**
     * Internationalization (i18n) System
     */
    async loadLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            return;
        }

        try {
            this.isLoading = true;
            const response = await fetch(`./i18n/${lang}.json`);
            
            if (!response.ok) {
                throw new Error(`Failed to load language: ${lang}`);
            }
            
            this.translations[lang] = await response.json();
            this.currentLanguage = lang;
            
            // Update document language
            document.documentElement.lang = lang;
            
            // Update page title and meta description
            document.title = this.translations[lang].page.title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.content = this.translations[lang].page.description;
            }
            
        } catch (error) {
            console.error('Error loading language:', error);
            // Fallback to English if available
            if (lang !== 'en' && this.translations['en']) {
                this.currentLanguage = 'en';
            }
        } finally {
            this.isLoading = false;
        }
    }

    applyTranslations() {
        const currentTranslations = this.translations[this.currentLanguage];
        if (!currentTranslations) return;

        // Apply text translations
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(currentTranslations, key);
            
            if (translation) {
                element.textContent = translation;
            }
        });

        // Apply placeholder translations
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedTranslation(currentTranslations, key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Apply alt text translations
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            const translation = this.getNestedTranslation(currentTranslations, key);
            
            if (translation) {
                element.alt = translation;
            }
        });

        // Update language selector
        this.updateLanguageSelector();
    }

    getNestedTranslation(obj, key) {
        return key.split('.').reduce((o, k) => o && o[k], obj);
    }

    updateLanguageSelector() {
        const currentLangSpan = document.querySelector('.current-lang');
        if (currentLangSpan) {
            currentLangSpan.textContent = this.currentLanguage.toUpperCase();
        }

        // Update active states
        document.querySelectorAll('.lang-option, .mobile-lang-option').forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.classList.toggle('active', lang === this.currentLanguage);
        });
    }

    /**
     * Dynamic Header
     */
    initHeader() {
        const header = document.getElementById('header');
        let lastScrollY = window.scrollY;
        let isScrolling = false;

        const updateHeader = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = currentScrollY;
            isScrolling = false;
        };

        const handleScroll = () => {
            if (!isScrolling) {
                requestAnimationFrame(updateHeader);
                isScrolling = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial check
        updateHeader();
    }

    /**
     * Mobile Navigation
     */
    initMobileNavigation() {
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavClose = document.getElementById('mobileNavClose');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        document.body.appendChild(overlay);

        const openMobileNav = () => {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
            
            // Focus trap
            this.trapFocus(mobileNav);
        };

        const closeMobileNav = () => {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            
            // Return focus to hamburger
            hamburger.focus();
        };

        hamburger.addEventListener('click', openMobileNav);
        mobileNavClose.addEventListener('click', closeMobileNav);
        overlay.addEventListener('click', closeMobileNav);

        // Close on link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileNav();
            }
        });
    }

    /**
     * Language Selector
     */
    initLanguageSelector() {
        const langBtn = document.getElementById('langBtn');
        const langDropdown = document.getElementById('langDropdown');
        const langOptions = document.querySelectorAll('.lang-option');
        const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');

        // Desktop language selector
        if (langBtn && langDropdown) {
            const toggleDropdown = () => {
                const isOpen = langDropdown.classList.contains('active');
                langDropdown.classList.toggle('active');
                langBtn.setAttribute('aria-expanded', !isOpen);
            };

            langBtn.addEventListener('click', toggleDropdown);

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                    langDropdown.classList.remove('active');
                    langBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Language option handlers
        const handleLanguageChange = async (lang) => {
            if (lang === this.currentLanguage || this.isLoading) return;

            try {
                // Show loading state
                document.body.classList.add('loading');
                
                await this.loadLanguage(lang);
                this.applyTranslations();
                
                // Close dropdowns
                langDropdown?.classList.remove('active');
                langBtn?.setAttribute('aria-expanded', 'false');
                
                // Store preference
                localStorage.setItem('belarte-language', lang);
                
            } catch (error) {
                console.error('Error changing language:', error);
            } finally {
                document.body.classList.remove('loading');
            }
        };

        // Desktop options
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                handleLanguageChange(lang);
            });
        });

        // Mobile options
        mobileLangOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                handleLanguageChange(lang);
            });
        });

        // Load saved language preference
        const savedLang = localStorage.getItem('belarte-language');
        if (savedLang && savedLang !== this.currentLanguage) {
            this.loadLanguage(savedLang).then(() => {
                this.applyTranslations();
            });
        }
    }

    /**
     * Lazy Loading
     */
    initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        const videos = document.querySelectorAll('video');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Add fade-in effect
                        img.style.opacity = '0';
                        img.style.transition = 'opacity 0.3s ease';
                        
                        img.onload = () => {
                            img.style.opacity = '1';
                        };
                        
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));

            // Video lazy loading
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        if (video.hasAttribute('data-src')) {
                            video.src = video.getAttribute('data-src');
                            video.removeAttribute('data-src');
                        }
                        videoObserver.unobserve(video);
                    }
                });
            });

            videos.forEach(video => {
                if (video.hasAttribute('data-src')) {
                    videoObserver.observe(video);
                }
            });
        }
    }

    /**
     * Newsletter Form
     */
    initNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = form.querySelector('.newsletter-input').value;
            const submitBtn = form.querySelector('button[type="submit"]');
            
            if (!email || !this.isValidEmail(email)) {
                this.showNotification('Please enter a valid email address', 'error');
                return;
            }

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Subscribing...';
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                this.showNotification('Successfully subscribed to newsletter!', 'success');
                form.reset();
                
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                this.showNotification('Subscription failed. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                const currentTranslations = this.translations[this.currentLanguage];
                submitBtn.textContent = currentTranslations?.btn?.subscribe || 'Subscribe';
            }
        });
    }

    /**
     * Anti-Stroke Rule (Critical Requirement)
     */
    initAntiStroke() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            this.removeTextStroke(node);
                        }
                    });
                }
                
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    this.removeTextStroke(mutation.target);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style']
        });

        // Initial cleanup
        this.removeTextStroke(document.body);
    }

    removeTextStroke(element) {
        if (!element || !element.style) return;

        // Remove text-stroke properties
        if (element.style.webkitTextStroke) {
            element.style.webkitTextStroke = '';
        }
        if (element.style.textStroke) {
            element.style.textStroke = '';
        }

        // Check all child elements
        const children = element.querySelectorAll('*');
        children.forEach(child => {
            if (child.style.webkitTextStroke) {
                child.style.webkitTextStroke = '';
            }
            if (child.style.textStroke) {
                child.style.textStroke = '';
            }
        });
    }

    /**
     * Utility Functions
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'error' ? '#ef4444' : type === 'success' ? '#10b981' : '#3b82f6'
        });

        document.body.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        };

        element.addEventListener('keydown', handleTabKey);
        firstFocusable.focus();

        return () => {
            element.removeEventListener('keydown', handleTabKey);
        };
    }
}

// Initialize website when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BelarteWebsite();
    });
} else {
    new BelarteWebsite();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Resume video playback if needed
        const heroVideo = document.querySelector('.hero-video');
        if (heroVideo && heroVideo.paused) {
            heroVideo.play().catch(() => {
                // Video play failed, which is fine
            });
        }
    }
});

// Handle resize events
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile nav on resize to desktop
        if (window.innerWidth > 768) {
            const mobileNav = document.getElementById('mobileNav');
            const overlay = document.querySelector('.mobile-nav-overlay');
            const hamburger = document.getElementById('hamburger');
            
            if (mobileNav?.classList.contains('active')) {
                mobileNav.classList.remove('active');
                overlay?.classList.remove('active');
                hamburger?.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    }, 250);
});
