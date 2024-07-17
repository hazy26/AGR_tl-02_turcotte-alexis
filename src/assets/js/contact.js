/**
* @type {HTMLElement}
*/
const msgErreur = document.querySelector('.erreur__msg');

/**
* @type {HTMLElement}
*/
const msgValidation = document.querySelector('.validation__msg');

/**
* @type {HTMLElement}
*/
const submitBtn = document.querySelector('.btn__submit');

/**
* @type {HTMLElement}
*/
const formulaire = document.querySelector('.formulaire__contact');

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    /**
    * @type {HTMLElement}
    */
    const email = document.querySelector('#email');

    if(email.value.includes('@')){
        msgValidation.classList.remove('hidden');
        msgErreur.classList.add('hidden');
        this.submit;
    } else{
        msgErreur.classList.remove('hidden');
        msgValidation.classList.add('hidden');
    }
})