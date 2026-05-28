
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null, // use viewport
    rootMargin: "0px",
    threshold: 0.5 // trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find animated elements within the intersecting section
        const fadeElements = entry.target.querySelectorAll(".fade-in, .slide-up");
        fadeElements.forEach(el => el.classList.add("is-visible"));
      } else {
        // Optional: remove class if you want animation to trigger again when scrolling back
        const fadeElements = entry.target.querySelectorAll(".fade-in, .slide-up");
        fadeElements.forEach(el => el.classList.remove("is-visible"));
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".story-section").forEach(section => {
    observer.observe(section);
  });

  // Modal Logic
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  
  // You can customize the links for each question here later
  const dummyLink = "#"; 

  document.querySelectorAll(".popup-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const qNum = e.target.getAttribute("data-question");
      modalTitle.textContent = `問題 ${qNum} - 組員專案連結`;
      // Here you can change the link dynamically based on qNum
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});


  // Flowchart Node Click Logic
  document.querySelectorAll(".flow-node").forEach(node => {
    node.addEventListener("click", () => {
      const targetId = node.getAttribute("data-target");
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Back to Top Button Logic
  const backToTopBtn = document.getElementById("back-to-top");
  const scrollContainer = document.querySelector(".scroll-container");

  scrollContainer.addEventListener("scroll", () => {
    // Show button if scrolled down more than half a viewport height
    if (scrollContainer.scrollTop > window.innerHeight / 2) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    const section0 = document.getElementById("section-0");
    if (section0) {
      section0.scrollIntoView({ behavior: "smooth" });
    }
  });

