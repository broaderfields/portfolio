// function setInitialStates() {
//     // Sections that should be open by default
//     var openSections = [
//         // document.querySelector("main > section:nth-of-type(2) > section"),
//         document.querySelector("main > section:nth-of-type(3) > section"),
//         document.querySelector("main > section:nth-of-type(5) > section")
//     ];

//     // Add 'open' class to these sections
//     openSections.forEach(section => {
//         if (section) {
//             section.classList.add("open");

//             // Rotate the corresponding button if it exists
//             const button = section.parentElement.querySelector("button");
//             if (button) {
//                 button.style.transform = "rotate(90deg)";
//             }
//         }
//     });
// }

function setInitialStates(openSectionsSelectors) {
    // Get the elements based on the provided selectors
    var openSections = openSectionsSelectors.map(selector => document.querySelector(selector));

    // Add 'open' class to these sections
    openSections.forEach(section => {
        if (section) {
            section.classList.add("open");

            // Rotate the corresponding button if it exists
            const button = section.parentElement.querySelector("button");
            if (button) {
                button.style.transform = "rotate(90deg)";
            }
        }
    });
}


// Call the function to set initial states
// setInitialStates();

// Tweede section //
var section2h3 = document.querySelector("main > section:nth-of-type(2) h3");
var tweedeSection = document.querySelector("main > section:nth-of-type(2) > section");
var knop2 = document.querySelector("main > section:nth-of-type(2) > button");

section2h3.onclick = toggleTweedeSection;
knop2.onclick = toggleTweedeSection;

function toggleTweedeSection() {
    tweedeSection.classList.toggle("open");
    toggleButtonRotation(knop2, tweedeSection);
}

// Derde section //
var section3h3 = document.querySelector("main > section:nth-of-type(3) h3");
var derdeSection = document.querySelector("main > section:nth-of-type(3) > section");
var knop3 = document.querySelector("main > section:nth-of-type(3) > button");

section3h3.onclick = toggleDerdeSection;
knop3.onclick = toggleDerdeSection;

function toggleDerdeSection() {
    derdeSection.classList.toggle("open");
    toggleButtonRotation(knop3, derdeSection);
}

// Vierde section //
var section4h3 = document.querySelector("main > section:nth-of-type(4) h3");
var vierdeSection = document.querySelector("main > section:nth-of-type(4) > section");
var knop4 = document.querySelector("main > section:nth-of-type(4) > button");

section4h3.onclick = toggleVierdeSection;
knop4.onclick = toggleVierdeSection;

function toggleVierdeSection() {
    vierdeSection.classList.toggle("open");
    toggleButtonRotation(knop4, vierdeSection);
}

// Vijfde section //
var section5h3 = document.querySelector("main > section:nth-of-type(5) h3");
var vijfdeSection = document.querySelector("main > section:nth-of-type(5) > section");
var knop5 = document.querySelector("main > section:nth-of-type(5) > button");

section5h3.onclick = toggleVijfdeSection;
knop5.onclick = toggleVijfdeSection;

function toggleVijfdeSection() {
    vijfdeSection.classList.toggle("open");
    toggleButtonRotation(knop5, vijfdeSection);
}

// Utility function to toggle button rotation
function toggleButtonRotation(button, section) {
    if (section.classList.contains("open")) {
        button.style.transform = "rotate(90deg)";
    } else {
        button.style.transform = "rotate(0deg)";
    }
}
