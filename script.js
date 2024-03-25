
document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector(".title h1");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] !== ' ') {
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        } else {
            text.innerHTML += ' ';
        }
    }

    let char = 0;
    let timer = setInterval(onTick, 100);

    function onTick() {
        const spans = text.querySelectorAll('span');
        if (char < spans.length) {
            const span = spans[char];
            span.classList.add('fade');
            char++;
        } else {
            complete();
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // GSAP Timeline
    const timeline = gsap.timeline({ defaults: { duration: 1 }})
    timeline
        .from('.header', { y: '-100%', ease: 'bounce' })
        .from('.link', { opacity: 0, stagger: .5 })
        // Add more GSAP animations as needed

    // Simplified scroll reveal
    const revealElements = document.querySelectorAll('.fade'); // Assuming .fade elements are what you want to reveal
    window.addEventListener('scroll', () => {
        const viewportHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if(elementTop < viewportHeight - 50) { // 50 is a threshold before element fully enters viewport
                el.classList.add('active');
            } else {
                el.classList.remove('active'); // Optionally hide again when out of view
            }
        });
    });

    // Button click to reverse timeline
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        timeline.timeScale(3).reverse();
    });
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxContainer = document.querySelector('.about');
    var parallaxImage = document.querySelector('.parallax-image');
  
    // Calculate offset of the .about section from the top of the page
    var sectionTop = parallaxContainer.offsetTop;
  
    // Calculate parallax only when the .about section is in the viewport
    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + parallaxContainer.offsetHeight) {
      var parallaxSpeed = 0.3; // Adjust based on the desired effect
      // Ensure the image moves only within the bounds of the .about section
      var imageOffset = (scrollPosition - sectionTop) * parallaxSpeed;
      parallaxImage.style.transform = `translateY(${imageOffset}px)`;
    }
  });
  
  // Assuming you have a parallax container around your image

  
 



//gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' })
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' })
// Get all elements with the class "dropbtn" and assign a click event listener to each

const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .from('.header', { y: '-100%', ease: 'bounce' })
  .from('.header', { opacity: 0, stagger: .5 })
  .from('.link', { opacity: 0, stagger: .5 })
  .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
  .from('.left', { x: '-100%' }, '<.5')
  .to('.footer', {  y: 0, ease: 'elastic' })
  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

const button = document.querySelector('.button')

button.addEventListener('click', () => {
  timeline.timeScale(3)
  timeline.reverse()
})
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxBackground = document.querySelector('.parallax-background');
    var parallaxSpeed = 0.5; // Adjust for desired speed of the parallax effect
    parallaxBackground.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
  });
  // script.js
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // Logic to animate or move logos based on scrollPosition
    // This is a starting point. You'd need to calculate and set positions.
});

  
