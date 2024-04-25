"use strict";

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', submitForm);
});

function submitForm(event) {
    event.preventDefault(); 
    
    var fullName = document.getElementById('fullName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
    
    var errors = [];

    // Regular expressions for validation
    var nameRegex = /^(?=.+\d)(?=.+[a-zA-Z]).{6,}$/g; // Same regex for username
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/; // Same regex for email
    var phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; // Your custom phone regex
    // We'll define a zip code regex if needed

    // Validate full name
    if (!fullName.match(nameRegex)) {
        errors.push("Please enter a valid full name.");
    }

    // Validate email
    if (!email.match(emailRegex)) {
        errors.push("Please provide a valid email address for contact.");
    }

    // Validate phone number if preferred contact method is phone
    if (contactMethod === "phone" && !phone.match(phoneRegex)) {
        errors.push("Please provide a valid phone number for contact.");
    }

    // Validate comments
    if (!comments.trim()) {
        errors.push("Please enter your comments.");
    }

    var errorMessage = document.getElementById('errorMessage');
    var successMessage = document.getElementById('successMessage');

    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join("<br>");
        successMessage.innerHTML = "";
    } else {
        errorMessage.innerHTML = "";
        successMessage.innerHTML = "Thank you for your submission.<br><br>" +
                                   "Name: " + fullName + "<br>" +
                                   "Phone: " + phone + "<br>" +
                                   "Email: " + email + "<br>" +
                                   "Comments: " + comments + "<br>" +
                                   "Contact Method: " + contactMethod.charAt(0).toUpperCase() + contactMethod.slice(1);
        // If you want to submit the form to a server, you can add the submission logic here
    }
}