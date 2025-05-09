
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        document.getElementById('formFeedback').textContent = "Please fill in all fields.";
    } else {
        document.getElementById('formFeedback').textContent = "Message sent successfully!";
    }
});
