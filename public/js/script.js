// JavaScript to handle the cookie banner functionality
document.addEventListener('DOMContentLoaded', function() {
    var cookieBanner = document.getElementById('cookieBanner');
    var acceptCookies = document.getElementById('acceptCookies');
    var declineCookies = document.getElementById('declineCookies');

    // Show cookie banner if cookies haven't been accepted/declined yet
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // Handle cookie acceptance
    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    // Handle cookie declination
    declineCookies.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
    });
});

// Image preview functionality for uploaded images
var imagePreview = document.getElementById('imagePreview');
var imagePreviewContainer = document.getElementById('imagePreviewContainer');

// Function to handle image upload and display preview
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        imagePreview.src = reader.result;
        imagePreviewContainer.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Function to handle zooming in/out on the image preview
imagePreview.addEventListener('click', function() {
    if (imagePreview.classList.contains('zoomed')) {
        imagePreview.classList.remove('zoomed');
    } else {
        imagePreview.classList.add('zoomed');
    }
});

