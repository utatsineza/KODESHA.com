document.addEventListener('DOMContentLoaded', () => {
    // Cookie Banner Handling
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");
    const declineCookies = document.getElementById("declineCookies");

    if (cookieBanner && acceptCookies && declineCookies) {
        acceptCookies.addEventListener("click", function () {
            cookieBanner.style.display = "none";
        });

        declineCookies.addEventListener("click", function () {
            cookieBanner.style.display = "none";
        });
    }

    // Image Upload and Preview
    const imageUploadInput = document.getElementById('imageUpload');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

    if (imageUploadInput && imagePreviewContainer) {
        imageUploadInput.addEventListener('change', function() {
            const files = this.files;
            imagePreviewContainer.innerHTML = ''; // Clear previous previews

            Array.from(files).forEach(file => {
                const reader = new FileReader();

                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.maxWidth = '200px'; // Adjust as needed
                    img.style.margin = '10px'; // Adjust as needed
                    img.style.border = '1px solid #ccc'; // Optional: add border
                    img.classList.add('zoomable'); // Add class for zoom functionality
                    imagePreviewContainer.appendChild(img);
                };

                reader.readAsDataURL(file);
            });
        });
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('zoomable')) {
            const src = event.target.src;
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            const zoomedImage = document.createElement('img');
            zoomedImage.src = src;
            zoomedImage.className = 'zoomed-image';
            overlay.appendChild(zoomedImage);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        }
    });
});

