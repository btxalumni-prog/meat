// Search Page Logic
let currentFilter = 'all';
let allResults = [];
let searchTimeout = null;

// Get URL parameters
function getSearchQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    const query = getSearchQuery();
    const searchInput = document.getElementById('search-input');

    if (query) {
        searchInput.value = query;
        performSearch(query);
        updateClearButton();
    }

    // Search input handler
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        updateClearButton();

        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (query) {
                performSearch(query);
            } else {
                showInitialState();
            }
        }, 300);
    });

    // Clear button handler
    document.getElementById('clear-btn').addEventListener('click', () => {
        searchInput.value = '';
        showInitialState();
        updateClearButton();
        searchInput.focus();
    });

    // Filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;

            const query = searchInput.value.trim();
            if (query) {
                performSearch(query);
            }
        });
    });

    // Sort handler
    document.getElementById('sort-select').addEventListener('change', (e) => {
        if (allResults.length > 0) {
            sortResults(e.target.value);
            displayResults(allResults);
        }
    });

    // Enter key handler
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = e.target.value.trim();
            if (query) {
                performSearch(query);
            }
        }
    });
});

// Update clear button visibility
function updateClearButton() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-btn');

    if (searchInput.value.trim()) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }
}

// Perform search
function performSearch(query) {
    showLoading();

    // Simulate search delay
    setTimeout(() => {
        const results = searchContent(query);
        allResults = results;

        if (results.length > 0) {
            displayResults(results);
        } else {
            showNoResults();
        }
    }, 500);
}

// Search content
function searchContent(query) {
    const lowerQuery = query.toLowerCase();
    let results = [];

    // Search in blogs
    if (currentFilter === 'all' || currentFilter === 'blog') {
        if (typeof blogData !== 'undefined') {
            blogData.forEach(blog => {
                const titleMatch = blog.title.toLowerCase().includes(lowerQuery);
                const contentMatch = blog.content.toLowerCase().includes(lowerQuery);
                const excerptMatch = blog.excerpt.toLowerCase().includes(lowerQuery);

                if (titleMatch || contentMatch || excerptMatch) {
                    results.push({
                        type: 'blog',
                        id: blog.id,
                        title: blog.title,
                        excerpt: blog.excerpt,
                        content: blog.content,
                        category: blog.category,
                        date: blog.date,
                        relevance: titleMatch ? 10 : (excerptMatch ? 5 : 1)
                    });
                }
            });
        }
    }

    // Search in dictionary
    if (currentFilter === 'all' || currentFilter === 'dictionary') {
        if (typeof meatData !== 'undefined') {
            Object.keys(meatData).forEach(meatType => {
                const meatInfo = meatData[meatType];

                Object.keys(meatInfo.levels).forEach(levelKey => {
                    const level = meatInfo.levels[levelKey];
                    const searchableText = `${level.name} ${level.properties} ${level.signs} ${level.storage}`.toLowerCase();

                    if (searchableText.includes(lowerQuery)) {
                        results.push({
                            type: 'dictionary',
                            id: `${meatType}-${levelKey}`,
                            title: `${meatInfo.name} - ${level.name}`,
                            excerpt: level.properties,
                            meatType: meatType,
                            level: levelKey,
                            content: `${level.signs} ${level.storage}`,
                            relevance: level.name.toLowerCase().includes(lowerQuery) ? 8 : 3
                        });
                    }
                });
            });
        }
    }

    // Sort by relevance initially
    results.sort((a, b) => b.relevance - a.relevance);

    return results;
}

// Display results
function displayResults(results) {
    const container = document.getElementById('search-results');
    const resultsHeader = document.getElementById('results-header');
    const resultsCount = document.getElementById('results-count');

    hideAllStates();
    resultsHeader.style.display = 'flex';
    container.innerHTML = '';

    resultsCount.textContent = `Tìm thấy ${results.length} kết quả`;

    results.forEach(result => {
        const card = createResultCard(result);
        container.appendChild(card);
    });
}

// Create result card
function createResultCard(result) {
    const card = document.createElement('div');
    card.className = 'result-card';

    const typeBadge = result.type === 'blog'
        ? '<span class="result-type-badge blog">📝 Blog</span>'
        : '<span class="result-type-badge dictionary">📖 Từ điển</span>';

    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    const highlightedExcerpt = highlightText(result.excerpt, query);

    card.innerHTML = `
        ${typeBadge}
        <div class="result-card-header">
            <h3 class="result-title">${result.title}</h3>
        </div>
        <p class="result-excerpt">${highlightedExcerpt}</p>
        <div class="result-meta">
            ${result.category ? `<span class="result-meta-item">📂 ${result.category}</span>` : ''}
            ${result.date ? `<span class="result-meta-item">📅 ${result.date}</span>` : ''}
        </div>
    `;

    card.addEventListener('click', () => {
        if (result.type === 'blog') {
            window.location.href = `index.html#blog-${result.id}`;
        } else {
            window.location.href = `index.html#dictionary-${result.meatType}-${result.level}`;
        }
    });

    return card;
}

// Highlight search term
function highlightText(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="result-highlight">$1</span>');
}

// Escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Sort results
function sortResults(sortType) {
    switch(sortType) {
        case 'relevance':
            allResults.sort((a, b) => b.relevance - a.relevance);
            break;
        case 'newest':
            allResults.sort((a, b) => {
                const dateA = a.date ? new Date(a.date.split('/').reverse().join('-')) : new Date(0);
                const dateB = b.date ? new Date(b.date.split('/').reverse().join('-')) : new Date(0);
                return dateB - dateA;
            });
            break;
        case 'oldest':
            allResults.sort((a, b) => {
                const dateA = a.date ? new Date(a.date.split('/').reverse().join('-')) : new Date(0);
                const dateB = b.date ? new Date(b.date.split('/').reverse().join('-')) : new Date(0);
                return dateA - dateB;
            });
            break;
    }
}

// Search suggestion click
function searchSuggestion(term) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = term;
    updateClearButton();
    performSearch(term);
}

// UI State Management
function showInitialState() {
    hideAllStates();
    document.getElementById('initial-state').classList.remove('hidden');
    document.getElementById('results-header').style.display = 'none';
}

function showLoading() {
    hideAllStates();
    document.getElementById('loading-state').classList.remove('hidden');
    document.getElementById('results-header').style.display = 'none';
}

function showNoResults() {
    hideAllStates();
    document.getElementById('no-results').classList.remove('hidden');
    document.getElementById('results-header').style.display = 'none';
}

function hideAllStates() {
    document.getElementById('initial-state').classList.add('hidden');
    document.getElementById('loading-state').classList.add('hidden');
    document.getElementById('no-results').classList.add('hidden');
    document.getElementById('search-results').innerHTML = '';
}
