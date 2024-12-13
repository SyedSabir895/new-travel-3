document.getElementById('signup-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
    }

    // Example: check if password is at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
    }
});
