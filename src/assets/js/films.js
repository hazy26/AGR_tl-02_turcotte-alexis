class Film {
    constructor(
        imgMobile, 
        imgDesktop
    ) {
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
    };

    toHtml() {
        const li = document.createElement('li');
        li.className = 'flex flex-col items-center gap-4';

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
        
        return li;
    };
};

const films = [
    new Film(
        "./assets/img/mobile/dune_mobile.jpg",
        "./assets/img/desktop/dune.jpg"
    ),
    new Film(
        "./assets/img/mobile/inside-out_mobile.jpg",
        "./assets/img/desktop/inside-out.jpg"
    ),
    new Film(
        "./assets/img/mobile/civilwar_mobile.jpg",
        "./assets/img/desktop/civilwar.jpg"
    ),
    new Film(
        "./assets/img/mobile/junction_mobile.jpg",
        "./assets/img/desktop/junction.jpg"
    ),
    new Film(
        "./assets/img/mobile/if_mobile.jpg",
        "./assets/img/desktop/if.jpg"
    ),
    new Film(
        "./assets/img/mobile/fallguy_mobile.jpg",
        "./assets/img/desktop/fallguy.jpg"
    )
];

const filmsContainer = document.querySelector('#films__container');
films.forEach(film => {
    filmsContainer.appendChild(film.toHtml());
    });