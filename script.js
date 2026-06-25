function initSiteInteractions() {
    document.querySelectorAll('.portfolio-item, .list-card').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    document.querySelectorAll('.info-row').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initFadeIn() {
    document.querySelectorAll('.section').forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSiteInteractions();
    initSmoothScroll();
    initFadeIn();
});

if (typeof initHomepage === 'function') {
    const originalInit = initHomepage;
    initHomepage = function() {
        originalInit();
        initSiteInteractions();
    };
}
