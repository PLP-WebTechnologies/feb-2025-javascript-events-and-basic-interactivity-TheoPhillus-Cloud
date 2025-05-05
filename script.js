// Button Click & Hover Effects
document.getElementById("changeButton").addEventListener("click", function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "green";
});

// Open and Close Modal
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("formMessage");

    if (!email.includes("@")) {
        message.textContent = "Invalid email format!";
        message.style.color = "red";
        event.preventDefault();
    } else if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters!";
        message.style.color = "red";
        event.preventDefault();
    } else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    }
});

// Dynamic Slider Update
document.getElementById("slider").addEventListener("input", function() {
    document.getElementById("sliderValue").textContent = this.value;
});

// Image Gallery
let images = document.querySelectorAll(".gallery-image");
let currentIndex = 0;

document.getElementById("nextImage").addEventListener("click", function() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
});

// Tabbed Content
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", function() {
        document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
        document.getElementById(this.dataset.tab).style.display = "block";
    });
});

// Keypress Detection
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// Secret Action (Double Click & Long Press)
document.getElementById("changeButton").addEventListener("dblclick", function() {
    alert("Double-click detected! Secret action unlocked.");
});

let holdTimer;
document.getElementById("changeButton").addEventListener("mousedown", function() {
    holdTimer = setTimeout(() => {
        alert("Long press detected!");
    }, 1000);
});

document.getElementById("changeButton").addEventListener("mouseup", function() {
    clearTimeout(holdTimer);
});