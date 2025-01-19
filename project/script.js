// Function to toggle between light and dark mode
const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;

// Check if the user has a theme preference saved in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme if any
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Event listener to toggle theme when the button is clicked
toggleThemeButton.addEventListener('click', () => {
    // Toggle dark mode on body element
    body.classList.toggle('dark-mode');
    
    // Save the current theme in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});

// Display a message when the website is loaded
console.log("Website loaded successfully!");

// Optional: You could add more interactivity, animations, or functionalities here
