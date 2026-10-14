document.addEventListener('DOMContentLoaded', () => {
    // Tab Elements
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.content-section');
    const accentLinks = document.querySelectorAll('.accent-link');

    // Theme Elements
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = themeBtn.querySelector('i');
    const themeText = themeBtn.querySelector('span');

    // Tab Switching Function
    function switchTab(tabId) {
        // Hide all content sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Deactivate all tab buttons
        navTabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Activate selected section & tab
        const targetSection = document.getElementById(tabId);
        const targetTab = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);

        if (targetSection) targetSection.classList.add('active');
        if (targetTab) targetTab.classList.add('active');
    }

    // Add Click Listeners to Nav Tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Add Click Listeners to Text Links (In-page navigation)
    accentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    // Toggle Dark/Light Theme
    function toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';

        if (isDark) {
            document.body.removeAttribute('data-theme');
            themeIcon.className = 'fa-solid fa-moon';
            themeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fa-solid fa-sun';
            themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    }

    // Attach Theme Toggle Event
    themeBtn.addEventListener('click', toggleTheme);

    // Restore Saved Theme on Page Load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'Light Mode';
    }
});