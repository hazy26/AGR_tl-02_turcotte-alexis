//wrong type -0.5
/**
 * @type {string}
 */
const url = window.location.href;

//wrong type -0.5
/**
 * @type {string}
 */
const products = 'products.html';

if(url.includes(products)){
    medias();
}

function medias(){
    /**
    * @type {Media}
    */
    class Media {
        constructor(
            imgMobile, 
            imgDesktop,
            title,
            modal,
        ) {
            this.imgMobile = imgMobile;
            this.imgDesktop = imgDesktop;
            this.title = title;
            this.modal = modal;
        };
    
        toHtml() {
            const li = document.createElement('li');
            li.className = 'flex flex-col items-center gap-4 media relative';
            li.setAttribute('data-search', this.title); 
    
            const figure = document.createElement('figure');
            li.appendChild(figure);
            const picture = document.createElement('picture');
            figure.appendChild(picture);
            const source = document.createElement('source');
            picture.appendChild(source);
            picture.className = 'relative';
            source.media = '(min-width: 1024px)';
            source.srcset = this.imgDesktop;
            const img = document.createElement('img');
            picture.appendChild(img);
            img.src = this.imgMobile;
            img.alt = 'cover';
            img.className = 'h-60 w-dvw object-cover rounded-xl cursor-pointer grayscale transition hover:filter-none hover:border-indigo-50 hover:border-4 hover:scale-95';
            
            const modalContainer = document.createElement('div');
            modalContainer.className = 'hidden absolute top-0 left-0 bg-indigo-800/90 h-full w-full flex flex-col items-center justify-center text-center rounded-lg cursor-pointer';
            li.appendChild(modalContainer);
            
            const modal = document.createElement('div');
            modalContainer.appendChild(modal);
            
            const modalH3 = document.createElement('h3');
            modal.appendChild(modalH3);
            modalH3.textContent = this.modal[0];
            modalH3.className = 'text-indigo-50 text-3xl tracking-wider font-extralight pb-1';

            const modalh4 = document.createElement('h4');
            modal.appendChild(modalh4);
            modalh4.textContent = this.modal[1];
            modalh4.className = 'text-indigo-50 text-xl tracking-wider font-thin pb-6';

            const modalh5 = document.createElement('h5');
            modal.appendChild(modalh5);
            modalh5.textContent = this.modal[2];
            modalh5.className = 'text-indigo-50 text-sm tracking-widest font-bold';
            
            li.addEventListener('click', () => {
                modalContainer.classList.toggle('hidden');
            });

            return li;
        };
    };
    
    // pas la bonne methode pour renseigner un array -0.5
    /**
    * @type {Media[]}
    */
    const films = [
        new Media(
            "./assets/img/mobile/dune_mobile.jpg",
            "./assets/img/desktop/dune.jpg",
            'Dune',
            ['Dune', '120 min', '20,99$']
        ),
        new Media(
            "./assets/img/mobile/inside-out_mobile.jpg",
            "./assets/img/desktop/inside-out.jpg",
            'Inside Out',
            ['Inside Out', '120 min', '20.99$']
        ),
        new Media(
            "./assets/img/mobile/civilwar_mobile.jpg",
            "./assets/img/desktop/civilwar.jpg",
            'Civil War',
            ['Civil War', '120 min', '20.99$']
        ),
        new Media(
            "./assets/img/mobile/junction_mobile.jpg",
            "./assets/img/desktop/junction.jpg",
            'Junction',
            ['Junction', '120 min', '20.99$']
        ),
        new Media(
            "./assets/img/mobile/if_mobile.jpg",
            "./assets/img/desktop/if.jpg",
            'If',
            ['If', '120 min', '20.99$']
        ),
        new Media(
            "./assets/img/mobile/fallguy_mobile.jpg",
            "./assets/img/desktop/fallguy.jpg",
            'Fall Guy',
            ['Fall Guy', '120 min', '20.99$']
        )
    ];

    /**
    * @type {HTMLElement}
    */
    const filmsContainer = document.querySelector('#films__container');
    films.forEach(film => {
        filmsContainer.appendChild(film.toHtml());
    });

    /**
    * @type {Media[]}
    */
    const series = [
        new Media(
            "./assets/img/desktop/theboys.jpg",
            "./assets/img/mobile/theboys_mobile.jpg",
            'The Boys',
            ['The Boys', '4 Saisons', '24.99$ / Saison']
        ),
        new Media(
            "./assets/img/desktop/theoffice.jpg",
            "./assets/img/mobile/theoffice_mobile.jpg",
            'The Office',
            ['The Office', '4 Saisons', '24.99$ / Saison']
        ),
        new Media(
            "./assets/img/desktop/thelastkingdom.jpg",
            "./assets/img/mobile/thelastkingdom_mobile.jpg",
            'The Last Kingdom',
            ['The Last Kingdom', '4 Saisons', '24.99$ / Saison']
        ),
        new Media(
            "./assets/img/desktop/familyguy.jpg",
            "./assets/img/mobile/familyguy_mobile.jpg",
            'Family Guy',
            ['Family Guy', '4 Saisons', '24.99$ / Saison']
        ),
        new Media(
            "./assets/img/desktop/peakyblinders.jpg",
            "./assets/img/mobile/peakyblinders_mobile.jpg",
            'Peaky Blinder',
            ['Peaky Blinders', '4 Saisons', '24.99$ / Saison']
        ),
        new Media(
            "./assets/img/desktop/avatar.jpg",
            "./assets/img/mobile/avatar_mobile.jpg",
            'Avatar, The Last Airbender',
            ['Avatar', '2 Saisons', '24.99$ / Saison']
        )
    ];

    /**
    * @type {HTMLElement}
    */
    const seriesContainer = document.querySelector('#series__container');
    series.forEach(serie => {
        seriesContainer.appendChild(serie.toHtml());
    });
}