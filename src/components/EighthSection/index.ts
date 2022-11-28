import '../../assets/img/8th-section-img.png';

export const eighthSectionFunction = () => {
    const zoomBtn = (document.querySelector('.tapToZoom')) as HTMLElement;
    const mapWrapper = (document.querySelector('.map')) as HTMLElement;
    const mapImg = (document.querySelector('.map img')) as HTMLElement;
    const body = (document.querySelector('body')) as HTMLElement;
    const width = body.offsetWidth;

    zoomBtn.addEventListener('click', () => {
        body.style.overflow = 'hidden';
        zoomBtn.style.display = 'none';
        mapWrapper.style.position = 'absolute';
        mapWrapper.style.top = '0';
        mapWrapper.style.left = '0';
        mapWrapper.style.overflow = 'scroll';
        mapWrapper.style.marginTop = '0px';
        mapWrapper.style.height = '100vh';
        mapWrapper.style.filter = 'none';
        mapImg.style.left = '0';
        mapImg.style.width = '1263px';
        mapImg.style.height = '695px';
    });
    mapImg.addEventListener('click', () => {
        body.style.overflow = 'scroll';
        zoomBtn.style.display = 'block';
        mapWrapper.style.position = 'relative';
        mapWrapper.style.top = '0';
        mapWrapper.style.left = '0';
        mapWrapper.style.overflow = 'hidden';
        mapWrapper.style.height = '333px';
        mapWrapper.style.filter = 'blur(2px) brightness(1)';
        mapWrapper.style.marginTop = '71px';
        width > 375 ? mapImg.style.left = '0px' : mapImg.style.left = '-129px';
        mapImg.style.width = '632px';
        mapImg.style.height = '347px';
    });
};

eighthSectionFunction();
