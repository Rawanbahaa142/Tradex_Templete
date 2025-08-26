let scrollDiv = document.getElementById("scrollDiv");

if (scrollDiv) {
  window.addEventListener("scroll", () => {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollDiv.style.display = "block";
    } else {
      scrollDiv.style.display = "none";
    }
  });
}
if (scrollDiv) {
  scrollDiv.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
$(document).ready(function () {
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    cssEase: 'ease-in-out'
  });
});


//== Filter Work Section===
const filterLinks = document.querySelectorAll('.options a');
const cards = document.querySelectorAll('.card');

filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = link.getAttribute('data-filter');

        cards.forEach(card => {
            const category = card.getAttribute('data-category') || ""; 
            // لو مفيش data-category يرجع string فاضي

            if (filter === 'all' || category.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

filterLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const filter = link.getAttribute('data-filter');

        cards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 2,          
//     margin: 20,        
//     loop: true,        
//     nav: true,         
//     dots: false,       
//     navText: [
//       '<i class="fa-solid fa-angle-left"></i>',
//       '<i class="fa-solid fa-angle-right"></i>'
//     ],
//     responsive:{
//       0:{ items:1 },    
//       768:{ items:2 }   
//     }
//   });
// });


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     loop:true,            
//     margin:20,            
//     nav:true,             
//     dots:false,           
//     autoplay:true,        
//     autoplayTimeout:3000,   
//     responsive:{
//         0:{ items:1 },     
//         768:{ items:2 },   
//         1024:{ items:3 }    
//     },
//     navText:["<i class='fa-solid fa-angles-left'></i>","<i class='fa-solid fa-angles-right'></i>"]
//   });
// });
