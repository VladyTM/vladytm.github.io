document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const modalParam = params.get("modal");
    
    if (modalParam) {
      const modal = document.getElementById(`modal-${modalParam}`);
      if (modal) {
        modal.classList.add("active");
        const closeBtn = modal.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          modal.classList.remove("active");
          history.replaceState(null, "", "projects.html"); // remove ?modal= from URL
        });
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.remove("active");
            history.replaceState(null, "", "projects.html");
          }
        });
      }
    }

    const cards = document.querySelectorAll(".project-card[data-modal-id]");
  
    cards.forEach(card => {
      const id = card.getAttribute("data-modal-id");
      const modal = document.getElementById(`modal-${id}`);
      const closeBtn = modal.querySelector(".close-btn");
  
      // Open modal
      card.addEventListener("click", () => {
        modal.classList.add("active");
      });
  
      // Close when clicking the X
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });
  
      // Close when clicking outside modal content
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    });

  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Dropdown toggle for Projects tab
const dropdownBtn = document.querySelector(".dropbtn");
const dropdown = document.querySelector(".dropdown");

if (dropdownBtn && dropdown) {
  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent navigation
    dropdown.classList.toggle("show");
  });
}

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;
  
  const isClickInside = dropdown.contains(event.target);
  if (!isClickInside) {
    dropdown.classList.remove("show");
  }
});

  });