// pas la bonne methode pour renseigner un array
/**
 * @type {HTMLElement[]}
 */
const nav = document.querySelectorAll('nav');
nav.forEach(nav => {
    nav.addEventListener('click', () => {
        toggleNav();
    });
});

/**
 * @type {HTMLElement}
 */
const btnNav = document.querySelector('.btn__nav');
btnNav.addEventListener('click', () => {
    toggleNav();
});

/**
 * @type {HTMLElement}
 */
const openCart = document.querySelector('.openCart');
openCart.addEventListener('click', () => {
    toggleCart();
});

/**
 * @type {HTMLElement[]}
 */
const carts = document.querySelectorAll('.cart');
carts.forEach(cart => {
    cart.addEventListener('click', () => {
        toggleCart();
    })
})


function toggleNav(){

    /**
     * @type {HTMLElement}
     */
    const nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
};

function toggleCart(){

    /**
     * @type {HTMLElement}
     */
    const cart = document.querySelector('.cart');
    cart.classList.toggle('hidden');
}