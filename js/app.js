function renderPortfolioItem(item, basePath) {
    const href = `${basePath}portfolio/${item.slug}.html`;
    const featuredClass = item.featured ? ' featured' : '';
    const badge = item.featured ? '<div class="badge">대표</div>' : '';
    const role = item.role ? `<div class="item-role">${item.role}</div>` : '';

    return `
        <a href="${href}" class="portfolio-item${featuredClass}">
            ${badge}
            <div class="item-content">
                <div class="item-title">${item.title}</div>
                ${role}
                <div class="item-period">${item.period}</div>
            </div>
        </a>
    `;
}

function renderArchiveItem(item) {
    return `
        <a href="${item.href}" class="list-card archive-card">
            <div class="item-content">
                <div class="item-title">${item.title}</div>
                <div class="item-role">${item.type}</div>
                <div class="item-period">${item.period}</div>
            </div>
        </a>
    `;
}

function renderArticleItem(item) {
    return `
        <a href="${item.href}" class="list-card article-card">
            <div class="item-content">
                <div class="item-title">${item.title}</div>
                <div class="item-excerpt">${item.excerpt}</div>
                <div class="item-period">${item.date}</div>
            </div>
        </a>
    `;
}

function renderFooter() {
    const year = new Date().getFullYear();
    const yearRange = year > SITE.footerStartYear
        ? `${SITE.footerStartYear} – ${year}`
        : `${SITE.footerStartYear}`;

    return `<p>© ${yearRange} ${SITE.footerBrand}</p>`;
}

function initHomepage() {
    const musicContainer = document.getElementById('portfolio-music');
    const otherContainer = document.getElementById('portfolio-other');
    const archiveContainer = document.getElementById('archive-list');
    const articlesContainer = document.getElementById('articles-list');
    const footerContent = document.getElementById('footer-content');

    if (musicContainer) {
        musicContainer.innerHTML = PORTFOLIO.musicFilm
            .map(item => renderPortfolioItem(item, ''))
            .join('');
    }

    if (otherContainer) {
        otherContainer.innerHTML = PORTFOLIO.otherExperience
            .map(item => renderPortfolioItem(item, ''))
            .join('');
    }

    if (archiveContainer) {
        archiveContainer.innerHTML = ARCHIVE
            .map(item => renderArchiveItem(item))
            .join('');
    }

    if (articlesContainer) {
        articlesContainer.innerHTML = ARTICLES
            .map(item => renderArticleItem(item))
            .join('');
    }
}

document.addEventListener('DOMContentLoaded', initHomepage);
