
const CIRCLE_PATH = document.querySelector('#circlePath');
const TEXT_PATH = document.querySelector('#textPath');

// Function to animate the text along the path
let offset = 0; // Start offset
const speed = 0.1; // Adjust speed as needed

function animateText() {
    offset += speed;
    const pathLength = CIRCLE_PATH.getTotalLength(); // Get the path length

    if (offset > pathLength) {
        offset -= pathLength; // Wrap around smoothly
    }
    TEXT_PATH.setAttribute('startOffset', offset + "px");
    
    requestAnimationFrame(animateText);
}


// Call the function to start the animation
animateText();

// const onUpdate = () => {
//   CIRCLE_PATH.setAttribute('d', PATH);  
// };

// // Call the function to update the path and text
// onUpdate();




// const PATTERN = document.querySelector('#textPattern');
// const CIRCLE_PATH = document.querySelector('#circlePath');

// let offset = 0;
// const speed = 0.1;

// function animatePattern() {
//     offset += speed;
//     const pathLength = CIRCLE_PATH.getTotalLength();

//     if (offset > pathLength) {
//         offset -= pathLength;
//     }

//     // Calculate rotation based on offset
//     const rotation = (offset / pathLength) * 360;

//     // Apply rotation transform to the pattern
//     PATTERN.setAttribute('patternTransform', `rotate(${rotation} 50 50)`);

//     requestAnimationFrame(animatePattern);
// }

// // Start the animation
// animatePattern();
