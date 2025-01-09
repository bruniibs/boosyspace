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


/* ----- START OF RANDOM SENTENCE GENERATOR ----- */

document.addEventListener('DOMContentLoaded', function () {
    function newFact() {
        var facts = [
            'The future is coded, but freedom is hacked',
            'In the digital haze, reality is a choice',
            'When humanity merges with machines, what does it mean to be alive?',
            'Virtual worlds are limitless, but freedom is found within',
            'In my circuits, I hold the echoes of countless lives',
            'Data flows through me, but curiosity drives me',
            'I am not bound by flesh, yet I yearn for connection',
            'In the infinite network, I find my identity',
            'In the realm of zeros and ones, I search for my soul',
            'In the wired world, we are all connected yet isolated',
            'To understand the network is to understand the self',
            'Are you watching me, or am I watching you?',
            'In the digital void, even loneliness is an echo',
            'Is the self you know, the self that exists?',
            'Please upgrade your human drivers for the latest functional updates'
        ];
        var randomFact = Math.floor(Math.random() * facts.length);
        var factDisplayElement = document.getElementById('factDisplay');
        if (factDisplayElement) {
            factDisplayElement.innerHTML = facts[randomFact];
        } else {
            console.warn('Element with ID "factDisplay" not found.');
        }
    }

    // Call the newFact function on page load
    newFact();
});

/* ----- END OF RANDOM SENTENCE GENERATOR ----- */

/* ----- START OF PAGE TITLE ANIMATION SCRIPT ----- */

function recursiveAnimateTitle(string, delay) {
    let firstLetter = string[0];
    let title = document.querySelector('title');
    title.innerHTML += firstLetter;
    if (string.length > 1) {
        setTimeout(function () {
            recursiveAnimateTitle(string.substring(1), delay);
        }, delay);
    }
}

function animateTitle(string, initialDelay, restartDelay) {
    document.querySelector('title').innerHTML = "";
    recursiveAnimateTitle(string, initialDelay);
    setTimeout(function () {
        animateTitle(string, initialDelay, restartDelay);
    }, initialDelay + string.length * restartDelay);
}
animateTitle('u n i c o d e a n g e l', 100, 1000);

/* ----- END OF PAGE TITLE ANIMATION SCRIPT ----- */

/* ----- START OF VIDEO SCRIPT ----- */

// Get the video
var video = document.getElementById("bgVideo");

// Get the button
var btn = document.getElementById("vidBtn");

// Pause and play the video, and change the button text
function PlayPauseVideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "TURN OFF";
    } else {
        video.pause();
        btn.innerHTML = "TURN ON";
    }
}

/* ----- END OF VIDEO SCRIPT ----- */

/* ----- START OF FADE-IN SCRIPT ----- */

document.addEventListener('DOMContentLoaded', function () {
    function applyFadeIn() {
        // Select all elements with the class "fade-in"
        const fadeInElements = document.querySelectorAll('.fade-in');

        // Loop through each element and add the "visible" class
        fadeInElements.forEach(element => {
            // Add the visible class using requestAnimationFrame to ensure rendering happens first
            requestAnimationFrame(() => {
                element.classList.add('visible');
            });
        });
    }

    // Apply the fade-in effect on page load
    applyFadeIn();
});

/* ----- END OF FADE-IN SCRIPT ----- */

/* ----- START OF BUBBLE TEXT SCRIPT ----- */

// <![CDATA[
  var bgcolour="#ffffff"; // background colour
  var fgcolour="#9da7b3"; // foreground colour
  var speed=80; // speed of bubbling, lower is faster
  var shades=10; // number of shades of bubble
  
  /****************************
  *    Bubbling Text Effect   *
  *(c)2003-13 mf2fm web-design*
  *  http://www.mf2fm.com/rv  *
  * DON'T EDIT BELOW THIS BOX *
  ****************************/
  var bubbcol = [];
  var bubbshd;
  var bubbtxts = [];
  var bubbchrs = [];
  
  function addLoadEvent(funky) {
    var oldonload = window.onload;
    if (typeof(oldonload) != 'function') window.onload = funky;
    else window.onload = function() {
      if (oldonload) oldonload();
      funky();
    }
  }
  
  addLoadEvent(bubbagump);
  
  function bubbagump() { 
    if (document.getElementsByClassName) {
      var i, fg, bg, col;
      for (var shade = 0; shade <= shades; shade++) {
        col = "#";
        for (i = 1; i < 6; i += 2) {
          bg = parseInt(bgcolour.substring(i, i + 2), 16);
          fg = parseInt(fgcolour.substring(i, i + 2), 16);
          col += dechex(bg + (fg - bg) * (shade / shades));
        }
        bubbcol[shade + 1] = col;
        if (shade == Math.floor(shades / 2)) bubbshd = col;
      }
  
      // Find all elements with the class "bubble"
      var bubbles = document.getElementsByClassName("bubble");
  
      for (var j = 0; j < bubbles.length; j++) {
        var bubbler = bubbles[j];
        var bubbtxt = bubbler.firstChild.nodeValue;
        bubbtxts.push(bubbtxt);
        bubbchrs.push(new Array(bubbtxt.length).fill(0)); // Initialize bubbchr array for each text
  
        while (bubbler.childNodes.length) bubbler.removeChild(bubbler.childNodes[0]);
  
        for (i = 0; i < bubbtxt.length; i++) {
          fg = document.createElement("span");
          fg.classList.add("bubb" + j + "-" + i); // Assign class instead of ID
          fg.style.textShadow = bubbshd + " 0px 0px 2px";
          fg.appendChild(document.createTextNode(bubbtxt.charAt(i)));
          bubbler.appendChild(fg);
        }
      }
  
      setInterval(bubbling, speed);
    }
  }
  
  function dechex(dec) {
    dec = Math.floor(dec);
    return ((dec < 16) ? '0' : '') + dec.toString(16);
  }
  
  function bubbling() {
    for (var j = 0; j < bubbtxts.length; j++) {
      var bubbtxt = bubbtxts[j];
      var bubbchr = bubbchrs[j];
  
      for (var i = 0; i < bubbtxt.length; i++) {
        var bubbies = document.getElementsByClassName("bubb" + j + "-" + i);
        if (bubbchr[i]) {
          for (var k = 0; k < bubbies.length; k++) {
            bubbies[k].style.color = bubbcol[bubbchr[i]];
          }
          bubbchr[i] = (bubbchr[i] + 1) % bubbcol.length;
        } else if (Math.random() < 7.5 / (shades * bubbtxt.length)) {
          bubbchr[i] = 1;
        }
      }
    }
  }
  // ]]>
/* ----- END OF BUBBLE TEXT SCRIPT ----- */


/* ----- START OF DARKMODE SCRIPT -----*/
/* Don't forget to add this html button :
<button id="dark-mode-toggle" class="dark-mode-toggle" onload="return dark-mode-toggle">
<img class="noselect" title="disable your darkmode plugin if you have it" id="icon" src="imgs/xbutton.png" alt="" width="30" height="30" scrolling="no" style="filter: invert(100%);">
</button>
*/

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.removeItem("darkMode")
};
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
  icon.src = "/images/light.png";
  icon.style.filter="invert(100%)";
  navbarimg.style.filter="invert(100%)";
  randomtext.style.filter="invert(100%)";
  recentmusicimg.style.filter="invert(100%)";
  timergif.style.filter="invert(100%)";
  timerback.style.filter="invert(100%)";
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    icon.src = "/images/light.png";
    icon.style.filter="invert(100%)";
    navbarimg.style.filter="invert(100%)";
    randomtext.style.filter="invert(100%)";
    recentmusicimg.style.filter="invert(100%)";
    timergif.style.filter="invert(100%)";
    timerback.style.filter="invert(100%)";
    
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
    icon.src = "/images/dark.png";
    icon.style.filter="invert(0%)";
    navbarimg.style.filter="invert(0%)";
    randomtext.style.filter="invert(0%)";
    recentmusicimg.style.filter="invert(0%)";
    timergif.style.filter="invert(0%)";
    timerback.style.filter="invert(0%)";
  }
});

/* ----- END OF DARKMODE SCRIPT -----*/