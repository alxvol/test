const slide = () => {
    const banner = document.getElementById("banner");
    const movieTitle = document.getElementById("movie-title");
    const titleInEn = document.getElementById("en-movie-title");

    const defaultImgsUrls = [
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004091/PK_RELUX_af.jpg",
            title: "RE’LUX  — твій кіноресторан планетки"
        }, 
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003870/PK_post_27_12_1600x1040.jpg",
            title: "Дізнайся, як обміняти квиток чи повернути гроші"
        } 
    ];
    let currentImg = defaultImgsUrls[0].img;
    banner.style.backgroundImage = `url(${currentImg})`;
    movieTitle.innerText = defaultImgsUrls[0].title;

    const movies = [
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000002408/Bad-Boys_1600x1040_IMAX.jpg",
            title: "Погані хлопці: Все або нічого (16+)",
            titleInEn: "Bad Boys: Rise or Die"
        },
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004666/wr-afisha.jpg",
            title: "Бунтарі на вихідних (12+)",
            titleInEn: "Weekend Rebels"
        },
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004662/clawfoot-afisha18.jpg",
            title: "Під каблуком (18+)",
            titleInEn: "Clawfoot"
        },
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004486/Tarot_1600x1040_IMAX.jpg",
            title: "Таро (16+)",
            titleInEn: "Tarot"
        },
        {
            img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003883/House-Word_1600x1040_IMAX.jpg",
            title: "Будинок «Слово». Нескінчений роман (16+)",
            titleInEn: "«Slovo» House: Unfinished Novel"
        }
    ];
    
    const allBanners = defaultImgsUrls.concat(movies);

    let delay = 2000, ind = 0, sliding;

    const setSlidingInterval = (delay) => {
        const initDelay = delay;
        sliding = setInterval(() => {
            if(ind === allBanners.length-1){
                currentImg = allBanners[0].img;
                ind = 1;
            }
            else{
                currentImg = allBanners[++ind].img;
            }
            banner.style.backgroundImage = `url(${currentImg})`;
            movieTitle.innerText = allBanners[ind].title;
            allBanners[ind].titleInEn ? titleInEn.innerText = allBanners[ind].titleInEn: titleInEn.innerText = "";

            delay += initDelay;
        }, delay);
    };
    setSlidingInterval(delay);

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    const changeImgs = () => {
        clearInterval(sliding);

        if(ind === 0){
            ind = allBanners.length-1;
            currentImg = allBanners[ind].img;
        }
        else{
            currentImg = allBanners[--ind].img;
        }
        banner.style.backgroundImage = `url(${currentImg})`;
        setSlidingInterval(delay);
    };

    prevBtn.addEventListener("click", () => {
        clearInterval(sliding);

        if(ind === 0){
            ind = bannerImgs.length-1;
            currentImg = bannerImgs[ind].img;
        }
        else{
            currentImg = bannerImgs[--ind].img;
        }
        banner.style.backgroundImage = `url(${currentImg})`;
        setSlidingInterval(delay);
        
    });
    nextBtn.addEventListener("click", () => {
        clearInterval(sliding);

        if(ind === bannerImgs.length-1){
            ind = 0;
            currentImg = bannerImgs[ind].img;
        }
        else{
            currentImg = bannerImgs[++ind].img;
        }
        banner.style.backgroundImage = `url(${currentImg})`;
        setSlidingInterval(delay);
    });
        
}

document.addEventListener("DOMContentLoaded", () => {
    slide();

});