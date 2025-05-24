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

    // Verify the saved theme in local storage (assuming user is comming back from the blog website)
    const userTheme = localStorage.getItem('pref-theme');
    // By default theme is dark, if it is defined and is light, we change it
    if (userTheme && userTheme == "light") {
        const themeButton = document.getElementById("change-theme-button");
        InvertTheme(themeButton);
    }
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
        // Switch the theme storage, this key is used by the /blog website and when first loading this page
        localStorage.setItem('pref-theme', document.documentElement.classList.contains("theme-dark") ? "dark": "light");

        buttonElement.classList.remove("animate__flipOutX");
        buttonElement.classList.add("animate__flipInX");
    }, { once: true });
    // Play the animation
    buttonElement.classList.remove("animate__flipInX");
    buttonElement.classList.add("animate__flipOutX");
}