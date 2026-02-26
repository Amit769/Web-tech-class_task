const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const branchInput = document.getElementById("branch");
const agreeInput = document.getElementById("agree");
const previewText = document.getElementById("previewText");
const message = document.getElementById("message");
const form = document.getElementById("regForm");

// Live Preview
function updatePreview() {
    previewText.textContent =
        `Name: ${nameInput.value} | Email: ${emailInput.value} | Branch: ${branchInput.value}`;
}

nameInput.addEventListener("input", updatePreview);
emailInput.addEventListener("input", updatePreview);
branchInput.addEventListener("change", updatePreview);

// Form Validation
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name.length < 3) {
        errors.push("Name must be at least 3 characters.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        errors.push("Enter a valid email.");
    }

    if (!agreeInput.checked) {
        errors.push("You must agree to the terms.");
    }

    if (errors.length > 0) {
        message.style.color = "red";
        message.innerHTML = errors.join("<br>");
    } else {
        message.style.color = "green";
        message.textContent = "Registered successfully!";
        form.reset();
        previewText.textContent = "Your details will appear here...";
    }
});