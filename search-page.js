// Search Page Logic - Using same logic as landing page
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

    // Suggestion buttons event delegation
    const suggestionTags = document.getElementById('suggestion-tags');
    if (suggestionTags) {
        suggestionTags.addEventListener('click', (e) => {
            if (e.target.classList.contains('suggestion-tag')) {
                const query = e.target.getAttribute('data-query');
                if (query) {
                    searchInput.value = query;
                    updateClearButton();
                    performSearch(query);
                }
            }
        });
    }
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

// Perform search - using same logic as landing page
function performSearch(query) {
    showLoading();
    const lowerQuery = query.toLowerCase();

    // Simulate search delay
    setTimeout(() => {
        let results = [];

        // Search in blogs - same logic as landing page
        if (currentFilter === 'all' || currentFilter === 'blog') {
            if (typeof appData !== 'undefined' && appData.blogPosts) {
                const blogResults = appData.blogPosts.filter(post =>
                    post.title.toLowerCase().includes(lowerQuery) ||
                    post.excerpt.toLowerCase().includes(lowerQuery) ||
                    post.content.toLowerCase().includes(lowerQuery) ||
                    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
                ).map(post => {
                    const titleMatch = post.title.toLowerCase().includes(lowerQuery);
                    const excerptMatch = post.excerpt.toLowerCase().includes(lowerQuery);
                    const contentMatch = post.content.toLowerCase().includes(lowerQuery);
                    const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

                    return {
                        type: 'blog',
                        id: post.id,
                        title: post.title,
                        excerpt: post.excerpt,
                        content: post.content,
                        category: post.category,
                        date: post.publishDate,
                        relevance: titleMatch ? 10 : (excerptMatch ? 8 : (tagsMatch ? 6 : 3))
                    };
                });
                results = results.concat(blogResults);
            }
        }

        // Search in dictionary - same logic as landing page
        if (currentFilter === 'all' || currentFilter === 'dictionary') {
            if (typeof appData !== 'undefined' && appData.meatTypes) {
                Object.entries(appData.meatTypes).forEach(([meatType, meat]) => {
                    // Search meat type name
                    if (meat.name.toLowerCase().includes(lowerQuery)) {
                        results.push({
                            type: 'dictionary',
                            id: meatType,
                            title: meat.name,
                            excerpt: meat.description,
                            meatType: meatType,
                            level: null,
                            content: meat.description,
                            relevance: 9
                        });
                    }

                    // Search freshness levels
                    Object.entries(meat.levels).forEach(([level, data]) => {
                        const nameMatch = data.name.toLowerCase().includes(lowerQuery);
                        const propsMatch = data.properties.toLowerCase().includes(lowerQuery);
                        const signsMatch = data.signs.toLowerCase().includes(lowerQuery);
                        const storageMatch = data.storage.toLowerCase().includes(lowerQuery);

                        if (nameMatch || propsMatch || signsMatch || storageMatch) {
                            results.push({
                                type: 'dictionary',
                                id: `${meatType}-${level}`,
                                title: `${meat.name} - ${data.name}`,
                                excerpt: data.properties,
                                meatType: meatType,
                                level: level,
                                content: `${data.signs} ${data.storage}`,
                                relevance: nameMatch ? 8 : (propsMatch ? 6 : 4)
                            });
                        }
                    });
                });
            }
        }

        // Sort by relevance initially
        results.sort((a, b) => b.relevance - a.relevance);
        allResults = results;

        if (results.length > 0) {
            displayResults(results);
        } else {
            showNoResults();
        }
    }, 500);
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
    const highlightedTitle = highlightText(result.title, query);
    const highlightedExcerpt = highlightText(result.excerpt, query);

    const formattedDate = result.date ? formatDate(result.date) : '';

    card.innerHTML = `
        ${typeBadge}
        <div class="result-card-header">
            <h3 class="result-title">${highlightedTitle}</h3>
        </div>
        <p class="result-excerpt">${highlightedExcerpt}</p>
        <div class="result-meta">
            ${result.category ? `<span class="result-meta-item">📂 ${result.category}</span>` : ''}
            ${formattedDate ? `<span class="result-meta-item">📅 ${formattedDate}</span>` : ''}
        </div>
    `;

    card.addEventListener('click', () => {
        if (result.type === 'blog') {
            window.location.href = `index.html#blog-${result.id}`;
        } else {
            if (result.level) {
                window.location.href = `index.html#dictionary-${result.meatType}-${result.level}`;
            } else {
                window.location.href = `index.html#dictionary`;
            }
        }
    });

    return card;
}

// Highlight search term - same as landing page
function highlightText(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<span class="result-highlight">$1</span>');
}

// Escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Format date helper
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    } catch (e) {
        return dateString;
    }
}

// Sort results
function sortResults(sortType) {
    switch(sortType) {
        case 'relevance':
            allResults.sort((a, b) => b.relevance - a.relevance);
            break;
        case 'newest':
            allResults.sort((a, b) => {
                const dateA = a.date ? new Date(a.date) : new Date(0);
                const dateB = b.date ? new Date(b.date) : new Date(0);
                return dateB - dateA;
            });
            break;
        case 'oldest':
            allResults.sort((a, b) => {
                const dateA = a.date ? new Date(a.date) : new Date(0);
                const dateB = b.date ? new Date(b.date) : new Date(0);
                return dateA - dateB;
            });
            break;
    }
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
