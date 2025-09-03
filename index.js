
    document.addEventListener('DOMContentLoaded', () => {
      // Typing effect for the home section
      const typingSpan = document.querySelector('.typing');
      const textArray = ["Full-Stack Developer", "Front-End Developer", "Back-End Developer", "AI Enthusiast"];
      let textIndex = 0;
      let charIndex = 0;
      
      function type() {
        if (charIndex < textArray[textIndex].length) {
          typingSpan.textContent += textArray[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(erase, 2000);
        }
      }

      function erase() {
        if (charIndex > 0) {
          typingSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
        } else {
          textIndex++;
          if (textIndex >= textArray.length) {
            textIndex = 0;
          }
          setTimeout(type, 500);
        }
      }
      
      if (typingSpan) {
        type();
      }

      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      
      // Mobile nav toggle
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('nav-menu');
      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          const icon = navToggle.querySelector('i');
          if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
          }
        });
      }

      // Close mobile menu on link click
      document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          const icon = navToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        });
      });

      // Certificate modal functionality
      const modal = document.getElementById("certificateModal");
      const modalImage = document.getElementById("modalImage");
      const closeBtn = document.querySelector(".close");
      const viewButtons = document.querySelectorAll(".view-certificate-btn");

      viewButtons.forEach(button => {
        button.addEventListener("click", () => {
          const imageSrc = button.getAttribute("data-image-src");
          modalImage.src = imageSrc;
          modal.style.display = "flex";
        });
      });

      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    });