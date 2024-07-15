class Serie {
    constructor(
        imgMobile, 
        imgDesktop
    ) {
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
    };

    toHtml() {
        const li = document.createElement('li');
        li.className = 'flex gap-4';

        const figure = document.createElement('figure');
        li.appendChild(figure);
        const picture = document.createElement('picture');
        figure.appendChild(picture);
        const source = document.createElement('source');
        picture.appendChild(source);
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

const series = [
    new Serie(
        "./assets/img/desktop/theboys.jpg",
        "./assets/img/mobile/theboys_mobile.jpg"
    ),
    new Serie(
        "./assets/img/desktop/theoffice.jpg",
        "./assets/img/mobile/theoffice_mobile.jpg"
    ),
    new Serie(
        "./assets/img/desktop/thelastkingdom.jpg",
        "./assets/img/mobile/thelastkingdom_mobile.jpg"
    ),
    new Serie(
        "./assets/img/desktop/familyguy.jpg",
        "./assets/img/mobile/familyguy_mobile.jpg"
    ),
    new Serie(
        "./assets/img/desktop/peakyblinders.jpg",
        "./assets/img/mobile/peakyblinders_mobile.jpg"
    ),
    new Serie(
        "./assets/img/desktop/avatar.jpg",
        "./assets/img/mobile/avatar_mobile.jpg"
    )
];

const seriesContainer = document.querySelector('#series__container');
series.forEach(serie => {
    seriesContainer.appendChild(serie.toHtml());
    });