function toggleMenu() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
  