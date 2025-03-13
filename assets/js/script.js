document.addEventListener("DOMContentLoaded", function () {
  // Add expand/collapse icons to section headers
  const sections = document.querySelectorAll("main > section");
  
  sections.forEach((section) => {
    const header = section.querySelector("h2");
    const content = Array.from(section.children).filter(
      (child) => child !== header
    );
    
    // Add indicator for expandable sections
    const indicator = document.createElement("span");
    indicator.innerHTML = " <i class='fas fa-chevron-down'></i>";
    indicator.className = "section-toggle";
    header.appendChild(indicator);

    // Start with all sections expanded
    content.forEach((element) => {
      element.style.display = "block";
    });
    
    // Toggle sections on click
    header.addEventListener("click", () => {
      const isCollapsed = content[0].style.display === "none";
      
      // Smooth animation logic
      content.forEach((element) => {
        if (isCollapsed) {
          // Expand
          element.style.display = "block";
          element.style.opacity = 0;
          element.style.maxHeight = "0";
          
          setTimeout(() => {
            element.style.opacity = 1;
            element.style.maxHeight = "1000px";
          }, 10);
          
          // Change icon
          indicator.innerHTML = " <i class='fas fa-chevron-down'></i>";
        } else {
          // Collapse
          element.style.opacity = 0;
          element.style.maxHeight = "0";
          
          setTimeout(() => {
            element.style.display = "none";
          }, 300); // Match transition time in CSS
          
          // Change icon
          indicator.innerHTML = " <i class='fas fa-chevron-right'></i>";
        }
      });
    });
  });
  
  // Add hover effects for job items
  const jobItems = document.querySelectorAll(".job, .education");
  jobItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("highlight");
    });
    
    item.addEventListener("mouseleave", () => {
      item.classList.remove("highlight");
    });
  });
  
  // For skill categories, similar toggle behavior
  const skillCategories = document.querySelectorAll("#skills .skill-category");
  
  skillCategories.forEach((category) => {
    const header = category.querySelector("h3");
    const content = Array.from(category.children).filter(
      (child) => child !== header
    );
    
    // Add indicator
    const indicator = document.createElement("span");
    indicator.innerHTML = " <i class='fas fa-minus'></i>";
    indicator.className = "skill-toggle";
    header.appendChild(indicator);
    
    // Start with skills visible
    content.forEach((element) => {
      element.style.display = "block";
    });
    
    header.addEventListener("click", () => {
      const isCollapsed = content[0].style.display === "none";
      
      content.forEach((element) => {
        if (isCollapsed) {
          // Expand
          element.style.display = "block";
          setTimeout(() => {
            element.style.opacity = 1;
          }, 10);
          
          indicator.innerHTML = " <i class='fas fa-minus'></i>";
        } else {
          // Collapse
          element.style.opacity = 0;
          setTimeout(() => {
            element.style.display = "none";
          }, 300);
          
          indicator.innerHTML = " <i class='fas fa-plus'></i>";
        }
      });
    });
  });
  
  // Add print button
  const container = document.querySelector(".container");
  const printBtn = document.createElement("button");
  printBtn.innerHTML = "<i class='fas fa-print'></i> Print Resume";
  printBtn.id = "print-button";
  printBtn.addEventListener("click", () => {
    window.print();
  });
  
  // Create button container for future buttons
  const btnContainer = document.createElement("div");
  btnContainer.className = "button-container";
  btnContainer.appendChild(printBtn);
  
  // Insert before the footer
  const footer = document.querySelector("footer");
  container.insertBefore(btnContainer, footer);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});