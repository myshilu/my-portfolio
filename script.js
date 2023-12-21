// Sample JavaScript code to demonstrate interactivity

// Function to change header color on click
function changeHeaderColor() {
    const header = document.querySelector('header');
    header.classList.toggle('text-yellow-500'); // Toggle text color
}

// Function to display a message when a project card is clicked
function displayProjectMessage() {
    const projectCards = document.querySelectorAll('.bg-white');

    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            alert(`You clicked on ${card.querySelector('h3').innerText}`);
        });
    });
}

// Call functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add a click event to the header
    const header = document.querySelector('header');
    header.addEventListener('click', changeHeaderColor);

    // Call function to display message when a project card is clicked
    displayProjectMessage();
});
