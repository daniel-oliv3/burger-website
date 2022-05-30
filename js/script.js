/*Search Form btn*/
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
}

/*Menu btn*/
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}