import '../../assets/img/8th-section-img.png';

export const eighthSectionFunction = () => {
    const zoomBtn = (document.querySelector('.tapToZoom')) as HTMLElement;
    const map = (document.querySelector('.map')) as HTMLElement;
    const mapWrapper = (document.querySelector('.map-wrapper')) as HTMLElement;
    const mapImg = (document.querySelector('.map img')) as HTMLElement;
    const body = (document.querySelector('body')) as HTMLElement;
    const eighthSection = (document.querySelector('.eighthsection')) as HTMLElement;
    let top = mapWrapper.offsetTop;
    let width = body.offsetWidth;

    let mapWidth = window.getComputedStyle(map).width;

    const zoomBtnClickHandler = () => {
        // body.style.overflow = 'hidden';
        zoomBtn.style.display = 'none';
        map.style.position = 'absolute';
        map.style.top = '0';
        map.style.left = '0';
        map.style.overflow = 'scroll';
        map.style.marginTop = '0px';
        mapWrapper.style.height = 'unset'; //
        eighthSection.style.height = '990px'; //
        map.style.height = '695px';
        map.style.width = '100%'; //
        map.style.filter = 'none';
        mapImg.style.left = '0';
        mapImg.style.width = '1263px';
        mapImg.style.height = '695px';
        window.scrollTo({
            top,
            left:     0,
            behavior: 'smooth',
        });
    };

    const mapImgClickHandler = () => {
        // body.style.overflow = 'scroll';
        zoomBtn.style.display = 'block';
        map.style.position = 'relative';
        map.style.top = '0';
        map.style.left = '0';
        map.style.overflow = 'hidden';
        map.style.height = '333px';
        map.style.filter = 'blur(2px) brightness(1)';
        map.style.marginTop = '71px';
        width > 375 ? mapImg.style.left = '0px' : mapImg.style.left = '-129px';
        mapImg.style.width = '632px';
        mapImg.style.height = '347px';
        mapWrapper.style.height = 'unset'; //
        eighthSection.style.height = 'unset'; //
        map.style.width = `${mapWidth}`; //
    };

    const tapToZoomHandler = () => {
        if (width < 1360) {
            zoomBtn.addEventListener('click', zoomBtnClickHandler);
            mapImg.addEventListener('click', mapImgClickHandler);
        } else {
            zoomBtn.removeEventListener('click', zoomBtnClickHandler);
            mapImg.removeEventListener('click', mapImgClickHandler);
        }
    };

    const mapSizeHandler = () => {
        if (width >= 1360) {
            map.style.position = 'unset';
            map.style.top = 'unset';
            map.style.left = 'unset';
            map.style.overflow = 'unset';
            map.style.height = 'unset';
            map.style.filter = 'unset';
            map.style.marginTop = 'unset';
            map.style.width = 'unset';
            mapImg.style.left = 'unset';
            mapImg.style.width = 'unset';
            mapImg.style.height = 'unset';
            zoomBtn.style.display = 'none';
        } else {
            map.style.position = 'relative';
            map.style.top = '0px';
            map.style.left = '0px';
            map.style.overflow = 'hidden';
            map.style.height = '333px';
            map.style.filter = 'blur(2px) brightness(1);';
            map.style.marginTop = '71px';
            map.style.width = '632px';
            mapImg.style.left = '0px';
            mapImg.style.width = '632px';
            mapImg.style.height = '347px';
            zoomBtn.style.display = 'block';
        }
    };
    tapToZoomHandler();
    window.addEventListener('resize', () => {
        width = body.offsetWidth;
        top = mapWrapper.offsetTop;
        tapToZoomHandler();
        mapSizeHandler();
        eighthSection.style.height = 'unset';
        mapWidth = window.getComputedStyle(map).width;
    });
};

eighthSectionFunction();
