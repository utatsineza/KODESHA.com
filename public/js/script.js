function openLogin() {
    alert("Login function called!");
    window.open('login.html', 'loginWindow', 'width=500,height=600');
}

document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            id: 1,
            image: 'images/image 0.jpeg',
            name: 'Cozy Apartment',
            location: 'gatenga',
            description: 'A cozy apartment perfect for students, located near campus.',
            price: '200'
        },
        {
            id: 2,
            image: 'images/image 2.jpg',
            name: 'Modern Studio',
            location: 'kosimosi',
            description: 'A modern studio with all amenities included.',
            price: '300'
        },
        {
            id: 3,
            image: 'images/image 3.jpg',
            name: 'Shared House',
            location: 'kubisima',
            description: 'A shared house with individual rooms available.',
            price: '150'
        },
        {
            id: 3,
            image: 'images/image 4.jpg',
            name: 'sunset villa',
            location: 'Kuri 40',
            description: 'A shared house with individual rooms available.',
            price: '150'
        },
        {
            id: 3,
            image: 'images/image 5.jpg',
            name: 'horizon view',
            location: 'nyamirambo',
            description: 'A shared house with individual rooms available.',
            price: '150'
        },
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