// script.js

// Function to validate the form
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let isValid = true;

    // Validate full name
    if (fullName.length < 5) {
        showErrorMessage('fullName', 'Name must be at least 5 characters long.');
        isValid = false;
    } else {
        hideErrorMessage('fullName');
    }

    // Validate email
    if (!validateEmail(email)) {
        showErrorMessage('email', 'Enter a valid email address.');
        isValid = false;
    } else {
        hideErrorMessage('email');
    }

    // Validate phone number
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        showErrorMessage('phone', 'Phone number must be 10 digits and not 1234567890.');
        isValid = false;
    } else {
        hideErrorMessage('phone');
    }

    // Validate password
    if (password.length < 8 || password.toLowerCase() === 'password' || password === fullName) {
        showErrorMessage('password', 'Password must be at least 8 characters long and cannot be "password" or the user\'s name.');
        isValid = false;
    } else {
        hideErrorMessage('password');
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        showErrorMessage('confirmPassword', 'Passwords do not match.');
        isValid = false;
    } else {
        hideErrorMessage('confirmPassword');
    }

    return isValid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to show error message
function showErrorMessage(inputId, message) {
    const inputElement = document.getElementById(inputId);
    inputElement.classList.add('is-invalid');
    inputElement.nextElementSibling.textContent = message;
}

// Function to hide error message
function hideErrorMessage(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.classList.remove('is-invalid');
}

// Event listeners for input fields to validate on change
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        validateForm();
    });
});
