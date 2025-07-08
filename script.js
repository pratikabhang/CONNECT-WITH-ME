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

function copyLink() {
    const link = "https://pratikabhang.netlify.app/";
    navigator.clipboard.writeText(link).then(() => {
        showToast("Link copied!");
    }, () => {
        showToast("Failed to copy the link");
    });
}

function downloadQR() {
    const canvas = document.querySelector("#qrcode canvas");
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'pratikabhang-qrcode.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast("QR Code downloaded!");
    } else {
        showToast("Failed to download QR Code");
    }
}

// Disable Ctrl + '+' or Ctrl + '-' keys for zoom on desktop
window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
});

// Disable zoom via mouse wheel + Ctrl on desktop
window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });


// Generate QR code when page loads
window.onload = function () {
    // Create QR code for the portfolio link
    new QRCode(document.getElementById("qrcode"), {
        text: "https://pratikabhang.netlify.app/",
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
};