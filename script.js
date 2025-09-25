// Function to open a URL in a new tab
function openUrl(url) {
    window.open(url, '_blank');
}

// Function to copy text to clipboard and show a toast message
function copyToClipboard(event, text) {
    event.stopPropagation(); // Prevent parent click event

    navigator.clipboard.writeText(text).then(() => {
        showToast("Link copied to clipboard!");
    }).catch(err => {
        console.error('Copy failed:', err);
        showToast("Failed to copy link");
    });
}

// Function to show a toast message
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Disable zoom via keyboard and mouse
window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
});

window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });