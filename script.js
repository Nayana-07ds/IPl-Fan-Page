// Welcome message
console.log("Welcome to the RCB Website!");

// ===============================
// FAN ZONE - POLL BUTTON ACTION
// ===============================
const pollButtons = document.querySelectorAll(".poll button");

pollButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("You voted for: " + button.textContent);
    });
});

// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.querySelector("input[name='name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields before submitting!");
            return;
        }

        alert("Thank you! Your message has been submitted.");
        form.reset();
    });
}
