const filterLinks = document.querySelectorAll(".options a");
const cards = document.querySelectorAll(".cards .card");

filterLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); 
    filterLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
    const filter = link.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        const categories = card.getAttribute("data-category").split(" ");
        if (categories.includes(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

  