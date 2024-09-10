const navLinks = document.querySelectorAll(".nav-link"); 
let currntUrl = window.location.href
let menueButton = document.getElementById('menu-btn');
let navBar = document.querySelector('.small-dev-menu');


navLinks.forEach(link => {
    if(link.href === currntUrl ){
        link.classList.add('current-link');
    }
});


function showPhoneMenu (){
    navBar.style.display = 'block';
}
function hidePhoneMenu (){
    navBar.style.display = 'none';
}


menueButton.addEventListener('mouseover', showPhoneMenu);
menueButton.addEventListener('click',  hidePhoneMenu);