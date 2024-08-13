

document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            id: 1,
            image: 'images/image 0.jpeg',
            name: 'Cozy Apartment',
            location: 'Kigali, Gatenga',
            description: 'A cozy apartment perfect for students, located near campus.',
            price: '200'
        },
        {
            id: 2,
            image: 'images/image 2.jpg',
            name: 'Modern Studio',
            location: 'Kigali, Kosimosi',
            description: 'A modern studio with all amenities included.',
            price: '300'
        },
        {
            id: 3,
            image: 'images/image 3.jpg',
            name: 'Shared House',
            location: 'Kigali, Kubisima',
            description: 'A shared house with individual rooms available.',
            price: '150'
        },
        {
            id: 4,  // Corrected duplicate IDs
            image: 'images/image 4.jpg',
            name: 'Sunset Villa',
            location: 'Kigali, Kuri 40',
            description: 'A villa with beautiful sunset views.',
            price: '150'
        },
        {
            id: 5,
            image: 'images/image 5.jpg',
            name: 'Horizon View',
            location: 'Kigali, Nyamirambo',
            description: 'A property with a stunning horizon view.',
            price: '150'
        }
    ];

    const propertiesContainer = document.getElementById('properties');

    function displayProperties(properties) {
        propertiesContainer.innerHTML = '';
        properties.forEach(property => {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property');
            propertyDiv.innerHTML = `
                <img src="${property.image}" alt="${property.name}">
                <h3>${property.name}</h3>
                <p><strong>Location:</strong> ${property.location}</p>
                <p><strong>Description:</strong> ${property.description}</p>
                <p><strong>Price:</strong> $${property.price}/month</p>
            `;
            propertiesContainer.appendChild(propertyDiv);
        });
    }

    displayProperties(properties);

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const filteredProperties = properties.filter(property => 
            property.location.toLowerCase().includes(searchValue)
        );
        displayProperties(filteredProperties);
    });

    // Image upload functionality
    const imageUploadInput = document.getElementById('imageUpload');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

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

    document.addEventListener("DOMContentLoaded", function () {
        const cookieBanner = document.getElementById("cookieBanner");
        const acceptCookies = document.getElementById("acceptCookies");
        const declineCookies = document.getElementById("declineCookies");

        acceptCookies.addEventListener("click", function () {
            cookieBanner.style.display = "none";
        });

        declineCookies.addEventListener("click", function () {
            cookieBanner.style.display = "none";
        });

        const contactForm = document.getElementById("contactForm");
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            fetch(contactForm.action, {
                method: contactForm.method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.text())
            .then(result => {
                alert(result);
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
        });
    });
});

