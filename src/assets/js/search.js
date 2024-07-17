
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

    /**
     * @type {[HTMLElement]}
     */
    const medias = document.querySelectorAll('.media');


    /**
     * @type {Event}
     */
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