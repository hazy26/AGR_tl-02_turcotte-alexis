
/**
 * @type {string}
 */
const url = window.location.href;

/**
 * @type {string}
 */
const products = 'products.html';

if(url.includes(products)){
    search();
};

function search(){

    /**
     * @type {HTMLElement}
     */
    const searchInput = document.querySelector('.search__input');

    // pas la bonne methode pour renseigner un array
    /**
     * @type {HTMLElement[]}
     */
    const medias = document.querySelectorAll('.media');


    //Que sommes nous en train de typer ici? -0.5
    searchInput.addEventListener('input', () => {
        
        /**
         * @type {string}
         */
        const searchValue =  searchInput.value.toLowerCase();

        medias.forEach(media => {

            /**
             * @type {string}
             */
            const searchResult = media.getAttribute('data-search').toLowerCase();

            if(searchResult.includes(searchValue)){
                media.classList.remove('hidden');
            } else {
                media.classList.add('hidden');
            };
        });
    });
};