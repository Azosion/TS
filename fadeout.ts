document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && href !== window.location.pathname) {
                event.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match the transition duration
            }
        });
    });
});
