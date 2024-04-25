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
    
    //track whether or not the form is valid
    var isValid = true;

    // expressions for validation
    var nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
    var phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; // hyphens o spaces
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check full name 
    if (!fullNameInput.value.match(nameRegex)) {
        isValid = false;
    }

    // check phone number if preferred contact method is phone
    if (contactMethod === "phone" && !phoneInput.value.match(phoneRegex)) {
        isValid = false;
    }

    // chech their email if preferred contact method is email
    if (contactMethod === "email" && !emailInput.value.match(emailRegex)) {
        isValid = false;
    }

    // check for comments
    if (!commentsInput.value.trim()) {
        isValid = false;
    }

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (isValid) {
        errorMessage.innerHTML = "";
        successMessage.innerHTML = 
        "Thank you for your submission.<br><br>" +
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

// onitialize product switcher
function initProductSwitcher() {
    var productButtons = document.querySelectorAll('.product-controls button');
    var productInfo = document.querySelector('.productInfo');
    var productName = document.getElementById('productName');
    var productImage = document.getElementById('productImage');
    var productDescription = document.getElementById('productDescription');

    // first  product should be shirt
    showProduct(products[0]);

    // listeners to product buttons
    productButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            showProduct(products[index]);
        });
    });

    //show product details
    function showProduct(product) {
        productName.textContent = product.name;
        productImage.src = product.image;
        productDescription.textContent = product.description;
    }
}

// initialize product switcher
initProductSwitcher();

//guessing game

// 
function initGuessingGame() {
    var form = document.getElementById('guessingForm');
    var guessInput = document.getElementById('guessInput');
    var errorMessage = document.getElementById('errorMessage');
    var gameResult = document.getElementById('gameResult');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 

        var guess = parseInt(guessInput.value); //  input to  integer

        // input value is a number between 1 and 10
        if (isNaN(guess) || guess < 1 || guess > 10) {
            errorMessage.textContent = 'Please enter a number between 1 and 10.';
            gameResult.textContent = ''; // Clear previous game result
        } else {
            // random number between 1 and 10
            var randomNumber = Math.floor(Math.random() * 10) + 1;

            // display guess and the random number
            gameResult.textContent = 'Your guess: ' + guess + '. Random number: ' + randomNumber + '.';

            // check if guess matches the random number
            if (guess === randomNumber) {
                gameResult.textContent += ' Congratulations! You won!';
            } else {
                gameResult.textContent += ' Sorry, you lost. Try again!';
            }

            
        }
    });
}

initGuessingGame();
