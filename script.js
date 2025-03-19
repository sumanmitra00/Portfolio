// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const mobileInput = form.querySelector('input[type="text"]');
const messageInput = form.querySelector('textarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    if (nameInput.value.trim() === '') {
        alert('Name is required');
        valid = false;
    }

    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        alert('Valid email is required');
        valid = false;
    }

    if (mobileInput.value.trim() === '' || !validateMobile(mobileInput.value)) {
        alert('Valid mobile number is required');
        valid = false;
    }

    if (messageInput.value.trim() === '') {
        alert('Message is required');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateMobile(mobile) {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobile));
}
