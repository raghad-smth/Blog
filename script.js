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


// function showPhoneMenu (){
//     navBar.style.display = 'block';
// }
// function hidePhoneMenu (){
//     navBar.style.display = 'none';
// }


// menueButton.addEventListener('mouseover', showPhoneMenu);
// menueButton.addEventListener('click',  hidePhoneMenu);