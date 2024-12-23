// document.addEventListener("DOMContentLoaded", () => {
    
//   });
  document.addEventListener("DOMContentLoaded", () => {
    // Existing hamburger menu functionality...
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  
    // Typewriter effect
    const typewriterElement = document.getElementById("typewriter");
    const text = "Sumit";
    let index = 0;
  
    function typewriter() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typewriter, 150);
      }
    }
  
    typewriter();
  });


  // Get the button
  let backToTopBtn = document.getElementById("back-to-top");

  // Show the button when scrolling down
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  };

  // Scroll to the top of the page when clicked
  backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  
  