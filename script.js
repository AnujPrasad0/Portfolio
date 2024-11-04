
// Navbar

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-120px"; // Adjust based on your navbar height
    }
    prevScrollpos = currentScrollPos;
}

// Fade animation
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.hidden-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Slide left

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.slide-left');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Slide down animation

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
      navbar.classList.add('show');
    }, 800); // Delay to ensure the animation is visible
  });