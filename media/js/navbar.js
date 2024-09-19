// Trigger when DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    // Credits to the Bulma documentation for the navbar burger code. Licensed MIT.
    // Get all elements with the "navbar-burger" class
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // Get the target value from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});

/**
 * Invert the theme of the page between dark and light mode
 * @param {Element} buttonElement 
 */
function InvertTheme(buttonElement) {
    // Wait for the end of the animation
    buttonElement.addEventListener('animationend', () => {
        // Since we only have 2 them, and default to dark, toggle should be enought to switch between the two.
        document.documentElement.classList.toggle("theme-dark");
        document.documentElement.classList.toggle("theme-light");

        buttonElement.classList.remove("animate__flipOutX");
        buttonElement.classList.add("animate__flipInX");
    }, { once: true });
    // Play the animation
    buttonElement.classList.remove("animate__flipInX");
    buttonElement.classList.add("animate__flipOutX");
}