      // Scroll to Top Button
window.addEventListener("scroll", () => {
   
  let scrollDiv = document.getElementById("scrollDiv");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollDiv.style.display = "block";
  } else {
    scrollDiv.style.display = "none";
  }
});

document.getElementById("scrollDiv").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
////////////////////////////////////////

  