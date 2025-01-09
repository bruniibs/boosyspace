/*
HELLO TRAVELER!
 Please don't directly copy my code! 
 If you want to use it, please edit it to your needs and credit me on your page/website.
 You can take reference, play around with it or take inspiration from it. But please credit me :)
 Just be respectful! And thanks you for liking my website's code :) 
 - Yokiie, owner of https://unicodeangel.neocities.org

 〃∩   ∧＿＿∧ 　　 
 ⊂⌒（ 　・ω・）　 
 　 ｀ヽ_っ＿/￣￣￣￣/ 　 
 　 　 　 ＼/       /　 
 　　　　　　￣￣￣￣  
 */

/* ----- START OF PAGE SWITCHING SCRIPT ----- */

document.addEventListener('DOMContentLoaded', function () {
    function showPage(pageToShow, linkToActivate) {
        // Hide all pages
        const pages = document.querySelectorAll('[id^="page"]');
        pages.forEach(page => {
            page.style.display = 'none';
            page.classList.remove('visible');
        });

        // Show the selected page
        const pageElement = document.getElementById(pageToShow);
        pageElement.style.display = 'block';

        // Ensure that the element is fully rendered before starting the fade-in effect
        requestAnimationFrame(() => {
            pageElement.classList.add('visible');
        });

        // Remove disabled class from all links
        const links = document.querySelectorAll('[id^="linkPage"]');
        links.forEach(link => link.classList.remove('disabled'));

        // Add disabled class to the selected link
        document.getElementById(linkToActivate).classList.add('disabled');
    }

    // Add event listeners to all link elements
    document.querySelectorAll('[id^="linkPage"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const pageId = this.id.replace('linkPage', 'page');
            showPage(pageId, this.id);
        });
    });

    // Initialize the disabled state on page load
    showPage('page1', 'linkPage1');
});

/* ----- END OF PAGE SWITCHING SCRIPT ----- */


/* ----- START OF NEXT PAGE SCRIPT -----*/

document.addEventListener('DOMContentLoaded', (event) => {
    const pages = document.querySelectorAll('div[id^="page"]');
    let currentIndex = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? 'block' : 'none';
        });
        updateButtons();
    }

    function showPageById(pageId) {
        pages.forEach((page, i) => {
            if (page.id === pageId) {
                page.style.display = 'block';
                currentIndex = i;  // Update the currentIndex to match the displayed page
            } else {
                page.style.display = 'none';
            }
        });
        updateButtons();
    }

    function updateCurrentIndex(pageId) {
        pages.forEach((page, i) => {
            if (page.id === pageId) {
                currentIndex = i;
            }
        });
    }

    function updateButtons() {
        const prevLink = document.getElementById('prevLink');
        const nextLink = document.getElementById('nextLink');

        if (currentIndex === 0) {
            prevLink.classList.add('disabled');
        } else {
            prevLink.classList.remove('disabled');
        }

        if (currentIndex === pages.length - 1) {
            nextLink.classList.add('disabled');
        } else {
            nextLink.classList.remove('disabled');
        }
    }

    window.showNextPage = function () {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            showPage(currentIndex);
        }
    };

    window.showPrevPage = function () {
        if (currentIndex > 0) {
            currentIndex--;
            showPage(currentIndex);
        }
    };

    window.showFirstPage = function () {
        currentIndex = 0;
        showPage(currentIndex);
    };

    window.showLastPage = function () {
        currentIndex = pages.length - 1;
        showPage(currentIndex);
    };

    // Dynamic event listeners for each page link
    document.querySelectorAll('a[id^="Linkpage"]').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = link.id.replace('Link', '');  // Extract page ID by removing 'Link' prefix
            showPageById(pageId);
        });
    });

    // Initial display
    showPage(currentIndex);
});

/* ----- END OF NEXT PAGE SCRIPT ----- */

/* ----- START OF NEXT PAGE SCRIPT -----

document.addEventListener('DOMContentLoaded', (event) => {
    const pages = document.querySelectorAll('div[id^="page"]');
    let currentIndex = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? 'block' : 'none';
        });
        updateButtons();
    }

    function updateButtons() {
        const prevLink = document.getElementById('prevLink');
        const nextLink = document.getElementById('nextLink');

        if (currentIndex === 0) {
            prevLink.classList.add('disabled');
        } else {
            prevLink.classList.remove('disabled');
        }

        if (currentIndex === pages.length - 1) {
            nextLink.classList.add('disabled');
        } else {
            nextLink.classList.remove('disabled');
        }
    }

    window.showNextPage = function () {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            showPage(currentIndex);
        }
    };

    window.showPrevPage = function () {
        if (currentIndex > 0) {
            currentIndex--;
            showPage(currentIndex);
        }
    };

    window.showFirstPage = function () {
        currentIndex = 0;
        showPage(currentIndex);
    };

    window.showLastPage = function () {
        currentIndex = pages.length - 1;
        showPage(currentIndex);
    };

    // Initial display
    showPage(currentIndex);
});

----- END OF NEXT PAGE SCRIPT ----- */

/* ----- START OF NEXT BUTTON SCRIPT ----- */

// Get references to the elements
const nextButton = document.getElementById("nextButton");
const buttons = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3")
];
const textareas = [
    document.getElementById("button1TextArea"),
    document.getElementById("button2TextArea"),
    document.getElementById("button3TextArea")
];

let currentButtonIndex;

// Function to hide all buttons and textareas
function hideAll() {
    buttons.forEach(button => button.style.display = "none");
    textareas.forEach(textarea => textarea.style.display = "none");
}

// Function to display a random button and textarea on page load
function displayRandomButton() {
    currentButtonIndex = Math.floor(Math.random() * buttons.length);
    buttons[currentButtonIndex].style.display = "block";
    textareas[currentButtonIndex].style.display = "block";
}

// Event listener for the next button
nextButton.addEventListener("click", function() {
    // Hide the current button and textarea
    buttons[currentButtonIndex].style.display = "none";
    textareas[currentButtonIndex].style.display = "none";
    
    // Increment the index to show the next button and textarea
    currentButtonIndex = (currentButtonIndex + 1) % buttons.length;
    
    // Show the next button and textarea
    buttons[currentButtonIndex].style.display = "block";
    textareas[currentButtonIndex].style.display = "block";
});

// Hide all buttons and textareas initially
hideAll();

// Display a random button and textarea when the page loads
displayRandomButton();

/*----- END OF NEXT BUTTON SCRIPT ----- */
