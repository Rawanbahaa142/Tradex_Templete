let scrollDiv = document.getElementById("scrollDiv");

if(scrollDiv){
window.addEventListener("scroll", () => {
   
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollDiv.style.display = "block";
  } else {
    scrollDiv.style.display = "none";
  }
});
}
if(scrollDiv){
  scrollDiv.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  }
  $(document).ready(function(){
    $('.single-item').slick({
      slidesToShow: 1,         // عدد السلايد اللي تظهر مرة واحدة
      slidesToScroll: 1,       // لما تدوس سهم يتحرك قد إيه
      dots: true,              // نقاط تحت السلايدر
      arrows: true,            // أسهم للتنقل
      infinite: true,          // يعمل لوب
      autoplay: false,         // وقف التشغيل التلقائي
      speed: 500,              // سرعة الانتقال
      cssEase: 'ease-in-out'   // شكل الانتقال
    });
  });





// $(document).ready(function(){
//   $('.single-item').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });
////////////////////////////////////////

  // -===ContactUs JS====
//   let myform = document.getElementById("myForm");
// myform.addEventListener('submit', function (e) {
//     e.preventDefault();

//   // let userMessage = document.getElementById("userMessage");
//   let handleError = (input, msg = "") => {
//     input.nextElementSibling.innerText = msg;
//     return msg === ""; 
// }
// let userName = document.getElementById("userName");
// let userEmail = document.getElementById("userEmail");
// let userPassword = document.getElementById("userPassword");

// let nameValidation = (element) => {
//     let inputValue = element.value.trim();
//     if (inputValue.length < 3) {
//         return handleError(element, "Please enter at least 3 characters");
//     }
//     return handleError(element);
// }
// let userEmail = document.getElementById("userEmail");

// let emailValidation = (element) => {
//     let inputValue = element.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(inputValue)) {
//         return handleError(element, "Please enter a valid email");
//     }
//     return handleError(element);
// }

// let userPassword = document.getElementById("userPassword");

// let passwordValidation = (element) => {
//     let inputValue = element.value;
//     var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
//     if (!strongRegex.test(inputValue)) {
//         return handleError(
//             element,
//             "Please enter at least 1 lowercase, 1 uppercase, 1 number, 1 special character"
//         );
//     }
//     return handleError(element);
//   }