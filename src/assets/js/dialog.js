const nav = document.querySelectorAll('nav');
nav.forEach(nav => {
    nav.addEventListener('click', () => {
        toggleNav();
    });
});

const btnNav = document.querySelector('.btn__nav');
btnNav.addEventListener('click', () => {
    toggleNav();
});


function toggleNav(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
};