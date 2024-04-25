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
    var contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    // Check if a contact method is selected
    if (!contactMethod) {
        alert("Please select a preferred contact method.");
        return;
    }
    
    contactMethod = contactMethod.value; // Get the value of the selected contact method
    
    var errors = [];

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/; // Allowing hyphens or spaces
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate full name
    if (!fullName.match(nameRegex)) {
        errors.push("Please enter a valid full name.");
    }

    // Validate email if preferred contact method is email
    if (contactMethod === "email") {
        if (!email.match(emailRegex)) {
            errors.push("Please provide a valid email address for contact.");
        } else if (!email.trim()) {
            errors.push("Email address is required for contact.");
        }
    }

    // Validate phone number if preferred contact method is phone
    if (contactMethod === "phone") {
        if (!phone.match(phoneRegex)) {
            errors.push("Please provide a valid phone number for contact.");
        } else if (!phone.trim()) {
            errors.push("Phone number is required for contact.");
        }
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
    }
}