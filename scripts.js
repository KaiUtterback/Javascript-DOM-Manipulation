// script.js

// ================================
// Assignment 1: Product Display
// ================================

// Array containing product information
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Function to display product information on the webpage
function displayProducts() {
    const productContainer = document.getElementById('product-container');

    // Clear previous content if any
    productContainer.innerHTML = '';

    // Iterate over the products array and create HTML elements for each product
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productName = document.createElement('h2');
        productName.innerText = product.name;

        const productPrice = document.createElement('p');
        productPrice.innerText = `Price: $${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;

        // Append child elements to the product div
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        // Append the product div to the product container
        productContainer.appendChild(productDiv);
    });
}

// Event listener to trigger the display of products when the page loads
window.addEventListener('load', displayProducts);

// ================================
// Assignment 2: Form Submission
// ================================

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Clear previous error messages
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';

    let isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('name-error').innerText = 'Name is required.';
        isValid = false;
    }

    // Validate email
    if (!email) {
        document.getElementById('email-error').innerText = 'Email is required.';
        isValid = false;
    }

    // Validate message
    if (!message) {
        document.getElementById('message-error').innerText = 'Message is required.';
        isValid = false;
    }

    // If all fields are valid, store user input in an object
    if (isValid) {
        const userInput = {
            name: name,
            email: email,
            message: message
        };

        // Display the user input in the console (for demonstration purposes)
        console.log(userInput);
    }
}

// Add event listener to the form
const form = document.getElementById('user-form');
form.addEventListener('submit', handleFormSubmit);

// ================================
// Assignment 3: Dynamic Styling
// ================================

// Function to change the color of the box when clicked
function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'lightgray' ? 'salmon' : 'lightgray';
}

// Function to grow the size of the box
function growBox() {
    const box = document.getElementById('box');
    box.style.transform = 'scale(1.5)';
}

// Function to shrink the size of the box
function shrinkBox() {
    const box = document.getElementById('box');
    box.style.transform = 'scale(1)';
}

// Function to reset styles to default
function resetStyles() {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'lightgray';
    box.style.transform = 'scale(1)';
}

// Adding hover effect for hover-box
const hoverBox = document.getElementById('hover-box');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = 'lightcoral';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});
