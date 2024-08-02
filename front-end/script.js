document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            id: 1,
            image: 'property1.jpg',
            name: 'Cozy Apartment',
            location: 'Kigali, Rwanda',
            description: 'A cozy apartment perfect for students, located near campus.',
            price: '200'
        },
        {
            id: 2,
            image: 'property2.jpg',
            name: 'Modern Studio',
            location: 'Kigali, Rwanda',
            description: 'A modern studio with all amenities included.',
            price: '300'
        },
        {
            id: 3,
            image: 'property3.jpg',
            name: 'Shared House',
            location: 'Kigali, Rwanda',
            description: 'A shared house with individual rooms available.',
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

    // Cookie banner logic
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        cookieBanner.style.display = 'block';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.style.display = 'none';
    });

    declineCookies.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
});

