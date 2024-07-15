document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let userInput = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(userInput);
    // Further processing like storing in an array or sending to a server can be done here
});

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }
    return true;
}
