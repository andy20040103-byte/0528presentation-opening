
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
  
  const projectLinks = {
    "1": "https://med11089.github.io/0528GroupDiscussion/",
    "2": "https://wk14q2-interactive-presentation.netlify.app/",
    "3": "https://claire0706-coder.github.io/sarcoma-q3-web/",
    "4": "https://andy20040103-byte.github.io/0528presentation/",
    "7": ""
  };

  document.querySelectorAll(".popup-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const qNum = e.target.getAttribute("data-question");
      modalTitle.textContent = `問題 ${qNum} - 組員專案連結`;
      
      const modalBody = document.getElementById("modal-body");
      const link = projectLinks[qNum];
      
      if (link) {
        modalBody.innerHTML = `
          <a href="${link}" class="project-link" target="_blank">
            <div class="link-icon">🔗</div>
            <div class="link-text">點擊前往：問題 ${qNum} 專屬報告網站</div>
          </a>
        `;
      } else {
        modalBody.innerHTML = `
          <div class="project-link" style="cursor: not-allowed; opacity: 0.6; background-color: rgba(255, 255, 255, 0.3);">
            <div class="link-icon">⏳</div>
            <div class="link-text">問題 ${qNum} 報告網站尚未建立</div>
          </div>
        `;
      }

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

