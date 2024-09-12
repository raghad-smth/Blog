const navLinks = document.querySelectorAll(".nav-link"); 
let currntUrl = window.location.href
let menueButton = document.getElementById('menu-btn');
let navBar = document.querySelector('.small-dev-menu');



navLinks.forEach(link => {
    if(link.href === currntUrl ){
        link.classList.add('current-link');
    }
});



const aboutParg = document.querySelectorAll('.animated-p');

const aboutPargObserver= new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, {
    threshold:0.2
});

aboutParg.forEach((el) =>  aboutPargObserver.observe(el));



const observer = new IntersectionObserver((enteries) =>{
    enteries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const anitmatedPosts =  document.querySelectorAll('.a-post-box');
anitmatedPosts.forEach((el) =>  observer.observe(el));


//auto type for header 
var autoType = document.querySelector(".auto-type");
new Typed(autoType, {
    strings : ["Growth", "love", "Groundness"],
    typeSpeed : 60,
    backSpeed: 60,
    loop: true
});


document.addEventListener('scroll', function() {
    const logoShow = document.querySelector('.logo-show');
    const scrollY = window.scrollY; // Get the vertical scroll position

    // Adjust the transform based on scroll position
    const scaleValue = 1 + scrollY / 1000; // Scale factor
    const opacityValue = Math.max(1 - scrollY / 1000, 0); // Fade out effect

    // Apply the transform and opacity to the logo container
    logoShow.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
    logoShow.style.opacity = opacityValue;
});
// function showPhoneMenu (){
//     navBar.style.display = 'block';
// }
// function hidePhoneMenu (){
//     navBar.style.display = 'none';
// }


// menueButton.addEventListener('mouseover', showPhoneMenu);
// menueButton.addEventListener('click',  hidePhoneMenu);