function getRootPrefix() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/portfolio/') || path.includes('/archive/') || path.includes('/articles/')) {
        return '../';
    }
    return '';
}

function renderSiteNav() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;

    const prefix = getRootPrefix();
    const homeHref = `${prefix}index.html`;
    const links = SITE.nav.map(({ label, hash }) =>
        `<a href="${homeHref}#${hash}" class="nav-link">${label}</a>`
    ).join('');

    nav.innerHTML = `
        <div class="nav-container">
            <a href="${homeHref}" class="nav-logo">${SITE.name}</a>
            <div class="nav-menu">${links}</div>
        </div>
    `;
}

function renderSiteFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const year = new Date().getFullYear();
    const yearRange = year > SITE.footerStartYear
        ? `${SITE.footerStartYear} – ${year}`
        : `${SITE.footerStartYear}`;

    footer.innerHTML = `
        <div class="footer-content">
            <p>© ${yearRange} ${SITE.footerBrand}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderSiteNav();
    renderSiteFooter();
});
