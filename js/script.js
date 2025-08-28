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
// Get theme toggle icons
const themeToggles = document.querySelectorAll('.theme-toggle');

// Define multiple themes
const themes = [
    {
        backgroundColor: '#f9f9f9',
        textColor: '#333',
        primaryColor: '#007bff',
        overlayColor: 'rgba(0, 0, 0, 0.6)'
    },
    {
        backgroundColor: '#333',
        textColor: '#fff',
        primaryColor: '#ff4444',
        overlayColor: 'rgba(0, 0, 0, 0.8)'
    },
    {
        backgroundColor: '#1a1a1a',
        textColor: '#00ffcc',
        primaryColor: '#ff00ff',
        overlayColor: 'rgba(0, 0, 0, 0.7)'
    },
    {
        backgroundColor: '#e6f3ff',
        textColor: '#0066cc',
        primaryColor: '#ff9900',
        overlayColor: 'rgba(0, 0, 0, 0.5)'
    }
];

// Track current theme index
let currentThemeIndex = 0;

function applyTheme(index) {
    const theme = themes[index];
    document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
    document.documentElement.style.setProperty('--text-color', theme.textColor);
    document.documentElement.style.setProperty('--primary-color', theme.primaryColor);
    document.documentElement.style.setProperty('--overlay-color', theme.overlayColor);
}

// Apply initial theme
applyTheme(currentThemeIndex);

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        if (action === 'prev') {
            currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
        } else if (action === 'next') {
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        }
        applyTheme(currentThemeIndex);
    });
});
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


$(document).ready(function(){
  $('.testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


//counters section
let counters=document.querySelectorAll('.counter');
let startCounting=false;
function startCount(){
counters.forEach(counter=>{
    let targetValue=counter.getAttribute('num-target');
    let count=0;
    const speed=Math.ceil(targetValue/100);
    const interval=setInterval(()=>{
        count+=speed;
        counter.innerText=count;
      if(count>=targetValue){
        clearInterval(interval);
      }
    } ,2);
})
};

const countersSection=document.getElementsByClassName("counters")[0];
if(countersSection){
const observer= new 
IntersectionObserver((enteries)=>{
  enteries.forEach(entry=>{
    if(entry.isIntersecting && !startCounting){
        startCounting=true;
        startCount();
    }
  })}
, {threshold:0.5});
observer.observe(countersSection);

}

// colors cog
let siteColor=document.getElementsByClassName("color-container")[0];
let cogLock=document.getElementsByClassName("color-lock")[0];
cogLock.addEventListener("click", function(){
    siteColor.classList.toggle("show-colors");
});



// change site colors

// localStorage.setItem('colorTheme');
function setTheme(color){
    document.documentElement.style.setProperty('--main-color' , color);
    localStorage.setItem('colorTheme', color);
}

window.addEventListener("DOMContentLoaded", ()=>{
let colorTheme=localStorage.getItem('colorTheme');

if(colorTheme)
{
 document.documentElement.style.setProperty('--main-color' , colorTheme);
}
});

let form = document.querySelector('form');

form.addEventListener('input' ,(e)=>{
    if(e.target.id === 'userName') nameValidation(e.target);
    else if(e.target.id==='userEmail')emailValidation(e.target);
    else if(e.target.id==='userPassword')passwordValidation(e.target);
    else msgValidation(e.target);
})
function handelerror(element, msg=""){
  element.nextElementSibling.innerText = msg;
}
function nameValidation(element){
    let input = element.value.trim();

    if(input.length < 3) { 
        handelerror(element, "Please enter at least 3 characters!");
        return false;
    }
    let onlyLetters = /^[A-Za-z]+$/;
    if (!onlyLetters.test(input)) { 
        handelerror(element , 'Please enter letters only');
        return false;
    } else {
        handelerror(element);
        return true;
    }
}




function emailValidation(element){
   let input = element.value.trim();
    let validMail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!validMail.test(input) || input==='' ) {
        handelerror(element , 'Enter valid email');
        return false;
    } else {
        handelerror(element);
        return true;
    }
}



function passwordValidation(element){
   let input = element.value.trim();

    if(input.length < 8) {
        handelerror(element, "Please enter at least 8 characters!");
        return false;
    }
    let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!validPassword.test(input)) {
        handelerror(element , 'Password must include Capital , Small Letters , Numbers and Symbols');
        return false;
    } else {
        handelerror(element);
        return true;
    }
}


function msgValidation(element){
   
   let input = element.value.trim();

    if(input.length < 10) {
        handelerror(element, "Please enter at least 10 characters!");
        return false;
    }else if(input.length >500) {
      handelerror(element, "You can enter maximum 500 charcter");
      return false;
    } else {
        handelerror(element);
        return true;
    }
}

let inputs=form.querySelectorAll('input')

let textarea=form.querySelector('textarea');

form.addEventListener('submit' ,(e)=>{
   inputs.forEach((input)=>{
    if(!input.value.trim()){
      handelerror(input, 'This Field Is Required');
      e.preventDefault();
    }else{
    if(input.id === 'userName') {
      if(!nameValidation(input))e.preventDefault();
      
    }
    else if(input.id==='userEmail') {
      if(!emailValidation(input))e.preventDefault();
      
    }
    else if(input.id==='userPassword') {
      if(!passwordValidation(input))e.preventDefault();
      
    }
    }
   });
   if(!textarea.value.trim()){
      handelerror(textarea, 'This Field Is Required');
      e.preventDefault();
    }else{
      if(!msgValidation(textarea))e.preventDefault();
       
    }
});