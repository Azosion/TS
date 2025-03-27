document.addEventListener('DOMContentLoaded', () => {
    // Ensure the fade-in effect is visible on page load
    setTimeout(() => {
        document.body.classList.remove('fade-out');
        document.body.style.opacity = '1'; // Explicitly set opacity to 1
    }, 50); // Small delay to ensure the transition is visible
});
