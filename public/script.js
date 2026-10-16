
// Active Navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav ul li a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});


// Typing Animation on Home Page
const role = document.querySelector(".home h3");

if (role) {
    const text = "Software Application Development Student";
    let index = 0;

    role.textContent = "";

    function typeText() {
        if (index < text.length) {
            role.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 70);
        }
    }

    typeText();
}


// Contact Form Validation
const contactForm = document.querySelector(".contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email = contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const message = contactForm.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in your name, email, and message.");
            return;
        }

        alert("Thank you, " + name + "! Your form is valid.");
        contactForm.reset();
    });
}


// Dynamic Copyright Year
document.querySelectorAll("footer p").forEach(function (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " Fathima Hashim. All Rights Reserved.";
});
