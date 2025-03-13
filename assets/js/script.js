document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main > section");

  sections.forEach((section) => {
    const header = section.querySelector("h2");
    const content = Array.from(section.children).filter(
      (child) => child !== header
    );

    content.forEach((element) => {
      element.style.display = "none";
    });

    header.addEventListener("click", () => {
      content.forEach((element) => {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Existing code for other sections
  const skillCategories = document.querySelectorAll("#skills .skill-category");

  skillCategories.forEach((category) => {
    const header = category.querySelector("h3");
    const content = Array.from(category.children).filter(
      (child) => child !== header
    );

    content.forEach((element) => {
      element.style.display = "none";
    });

    header.addEventListener("click", () => {
      content.forEach((element) => {
        if (element.style.display === "none") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    });
  });
});
