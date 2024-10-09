const greetings = [
    "Hi there! I'm your friendly chatbot. How can I assist you today?",
    "Hello! I'm here to help. Feel free to ask me anything!",
    "Hey! I'm your chatbot buddy, ready to chat or assist with anything you need!",
    "Greetings, human! I'm here to make your day easier. How can I help?",
    "Hello! Got questions? I’ve got answers!"
];

let index = 0;

function changeGreeting() {
    const dynamicIntro = document.getElementById('dynamic-intro');
    dynamicIntro.innerText = greetings[index];
    index = (index + 1) % greetings.length; // Loop through greetings
}

// Call the function every 6 seconds to change the greeting (matches the CSS animation duration)
setInterval(changeGreeting, 6000);

// Initial call to display the first greeting right away
changeGreeting();




// JavaScript to toggle the visibility of the nav-links
document.getElementById('paperclip-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggles the 'show' class to display/hide the links
});
