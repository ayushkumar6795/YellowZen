// Main JavaScript for YellowZen Website

// ===== Navigation Toggle =====
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const navbar = document.getElementById('navbar');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
        const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
        navbarToggle.setAttribute('aria-expanded', !expanded);
    });
}

// Close mobile menu when clicking a link
if (navbarMenu) {
    const navLinks = navbarMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ===== Sticky Navbar on Scroll =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Newsletter Modal =====
const newsletterModal = document.getElementById('newsletter-modal');
const newsletterBtn = document.getElementById('newsletter-btn');
const footerNewsletterBtn = document.getElementById('footer-newsletter');
const modalClose = document.getElementById('modal-close');
const newsletterForm = document.getElementById('newsletter-form');

function openModal() {
    newsletterModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus the email input for accessibility
    setTimeout(() => {
        document.getElementById('email')?.focus();
    }, 100);
}

function closeModal() {
    newsletterModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (newsletterBtn) {
    newsletterBtn.addEventListener('click', openModal);
}

if (footerNewsletterBtn) {
    footerNewsletterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking backdrop
if (newsletterModal) {
    newsletterModal.addEventListener('click', (e) => {
        if (e.target === newsletterModal) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && newsletterModal.classList.contains('active')) {
        closeModal();
    }
});

// Handle newsletter form submission
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;

        // In a real application, this would send to a backend
        alert(`Thank you for subscribing with ${email}! 🎉\n\nThis is a demo - in production, this would connect to a newsletter service.`);
        closeModal();
        newsletterForm.reset();
    });
}

// ===== Active Navigation Link =====
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ===== Load Featured Projects on Home Page =====
function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    if (!container || typeof projects === 'undefined') return;

    const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

    container.innerHTML = featuredProjects.map(project => `
    <div class="card project-card">
      <img src="${project.image}" alt="${project.title}" class="card-image">
      <div class="card-title">${project.title}</div>
      <div class="card-description">${project.description}</div>
      <div class="badge-group">
        ${project.tags.slice(0, 3).map(tag => `<span class="badge">${tag}</span>`).join('')}
      </div>
      <div class="card-footer">
        <a href="project-detail.html?slug=${project.slug}" class="btn btn-small btn-primary">View Project</a>
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-small btn-ghost">GitHub</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ===== Load Latest Articles on Home Page =====
function loadLatestArticles() {
    const container = document.getElementById('latest-articles');
    if (!container || typeof articles === 'undefined') return;

    const latestArticles = articles.filter(a => a.featured).slice(0, 3);

    container.innerHTML = latestArticles.map(article => `
    <div class="card article-card">
      <img src="${article.image}" alt="${article.title}" class="card-image">
      <div class="card-title">${article.title}</div>
      <div class="card-description">${article.excerpt}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: var(--space-md); color: var(--color-text-muted); font-size: var(--font-size-sm);">
        <span>${article.date}</span>
        <span>${article.readTime}</span>
      </div>
      <div class="card-footer" style="margin-top: var(--space-md);">
        <a href="article-detail.html?slug=${article.slug}" class="btn btn-small btn-primary">Read Article</a>
      </div>
    </div>
  `).join('');
}

// ===== Code Block Copy Functionality =====
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        pre.style.position = 'relative';

        const button = document.createElement('button');
        button.className = 'btn btn-small btn-ghost';
        button.textContent = 'Copy';
        button.style.position = 'absolute';
        button.style.top = 'var(--space-sm)';
        button.style.right = 'var(--space-sm)';
        button.style.fontSize = 'var(--font-size-xs)';
        button.style.padding = 'var(--space-xs) var(--space-md)';

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });

        pre.appendChild(button);
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
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

// ===== Initialize on Page Load =====
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProjects();
    loadLatestArticles();
    addCopyButtons();
});

// ===== Search Functionality (Simple Client-Side) =====
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        performSearch(query);
    });
}

function performSearch(query) {
    if (typeof projects === 'undefined' && typeof articles === 'undefined') return;

    const allContent = [
        ...projects.map(p => ({ ...p, type: 'project' })),
        ...articles.map(a => ({ ...a, type: 'article' }))
    ];

    const results = allContent.filter(item => {
        const searchText = `${item.title} ${item.description || item.excerpt} ${item.tags?.join(' ') || ''}`.toLowerCase();
        return searchText.includes(query);
    });

    displaySearchResults(results);
}

function displaySearchResults(results) {
    // This function will be implemented in projects.html and articles.html
    console.log('Search results:', results);
}

// ===== Filter Functionality =====
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.dataset.category;
            filterProjects(category);
        });
    });
}

function filterProjects(category) {
    if (typeof projects === 'undefined') return;

    const filtered = category === 'all'
        ? projects
        : projects.filter(p => p.category === category);

    displayProjects(filtered);
}

function displayProjects(projectsList) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projectsList.map(project => `
    <div class="card project-card">
      <img src="${project.image}" alt="${project.title}" class="card-image">
      <div class="card-title">${project.title}</div>
      <div class="card-description">${project.description}</div>
      <div class="badge-group">
        ${project.tags.slice(0, 4).map(tag => `<span class="badge">${tag}</span>`).join('')}
      </div>
      <div class="card-footer">
        <a href="project-detail.html?slug=${project.slug}" class="btn btn-small btn-primary">View Details</a>
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-small btn-ghost">GitHub</a>` : ''}
      </div>
    </div>
  `).join('');
}

// Initialize filters if on projects page
if (document.getElementById('projects-grid')) {
    setupFilters();
    displayProjects(projects || []);
}

// Initialize search if search input exists
setupSearch();
