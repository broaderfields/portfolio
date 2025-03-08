
document.addEventListener("DOMContentLoaded", function() {
    const toggleNavButton = document.querySelector('header nav ul li > button');
    const navSection = document.querySelector('header nav ul li ul');
    const widget = document.querySelector('.widget');

    // Log the initial state of the nav section
    console.log("Initial nav section display:", navSection.classList.contains('shown') ? 'shown' : 'hidden');
    
    toggleNavButton.addEventListener('click', function() {
        // Log the button click event

        // Toggle the 'shown' class on the nav section
        if (navSection.classList.contains('shown')) {
            navSection.classList.remove('shown'); // Hide the nav section
            widget.classList.remove('hidden');
        } else {
            navSection.classList.add('shown'); // Show the nav section
            // Existing code
            if (window.innerWidth < 800) {
                widget.classList.add('hidden'); // This line will only execute if the width is greater than 800px
            }
        }
    });
});