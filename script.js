function openUrl(url) {
    window.open(url, '_blank');
}
function copyToClipboard(event, text) {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
        showToast("Link copied to clipboard!");
    }).catch(err => {
        console.error('Copy failed:', err);
        showToast("Failed to copy link");
    });
}
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
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