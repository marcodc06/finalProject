"use strict";

//dark mode
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

function submitForm(event) {
    event.preventDefault(); 
    
    var fullNameInput = document.getElementById('fullName');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');
    var commentsInput = document.getElementById('comments');
    
    // check for the preferred contact method
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    
    var isValid = true;

    // expressions for validation
    var nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    var phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; // Allowing optional hyphens or spaces
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate full name (or first and last name separately)
    if (!fullNameInput.value.match(nameRegex)) {
        isValid = false;
    }

    // Validate phone number if preferred contact method is phone
    if (contactMethod === "phone" && !phoneInput.value.match(phoneRegex)) {
        isValid = false;
    }

    // Validate email if preferred contact method is email
    if (contactMethod === "email" && !emailInput.value.match(emailRegex)) {
        isValid = false;
    }

    // Validate comments
    if (!commentsInput.value.trim()) {
        isValid = false;
    }

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (isValid) {
        errorMessage.innerHTML = "";
        successMessage.innerHTML = "Thank you for your submission.<br><br>" +
                                   "Name: " + fullNameInput.value + "<br>" +
                                   "Phone: " + phoneInput.value + "<br>" +
                                   "Email: " + emailInput.value + "<br>" +
                                   "Comments: " + commentsInput.value + "<br>" +
                                   "Contact Method: " + contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1);
    } else {
        errorMessage.innerHTML = "Please fill out the form correctly.";
        successMessage.innerHTML = "";
    }
}

document.getElementById('contactForm').addEventListener('submit', submitForm);

var products = [
    {
        name: "Hat",
        image: "hat.jpg",
        description: "Branded hat."
    },
    {
        name: "Shirt",
        image: "shirt.jpg",
        description: "Branded Shirt."
    },
    {
        name: "Coffee Mug",
        image: "mug.jpg",
        description: "coffeeMug."
    }
];

// Function to initialize product switcher
function initProductSwitcher() {
    var productButtons = document.querySelectorAll('.product-controls button');
    var productInfo = document.querySelector('.productInfo');
    var productName = document.getElementById('productName');
    var productImage = document.getElementById('productImage');
    var productDescription = document.getElementById('productDescription');

    // Show initial product
    showProduct(products[0]);

    // Add event listeners to product buttons
    productButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            showProduct(products[index]);
        });
    });

    // Function to show product details
    function showProduct(product) {
        productName.textContent = product.name;
        productImage.src = product.image;
        productDescription.textContent = product.description;
    }
}

// Initialize product switcher
initProductSwitcher();