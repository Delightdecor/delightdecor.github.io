const container = document.querySelector('.container');
const text = document.getElementById('movingText');

let position = 0;
const speed = 1; // Adjust the speed as needed

function movingText() {
    position += speed;
    if (position > container.clientWidth) {
        position = -text.clientWidth;
    }
    text.style.left = position + 'px';
    requestAnimationFrame(movingText);
}

movingText();

function validateForm() {
    // Reset error messages
    document.getElementById("clientError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("commentError").textContent = "";

    var client = document.getElementById("client").value.trim();
    var email = document.getElementById("email").value.trim();
    var comment = document.getElementById("comment").value.trim();
    var isValid = true;

    // Validate client
    if (client === "") {
        document.getElementById("clientError").textContent = "Client is required";
        isValid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    // Validate comment
    if (comment === "") {
        document.getElementById("commentError").textContent = "Comment is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}