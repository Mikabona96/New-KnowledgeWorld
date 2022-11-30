import '../../assets/img/header-logo.png';
export const headerFunction = () => {
    const openMenu = document.querySelector('.header .open-menu');
    const links = (document.querySelector('.header .links')) as HTMLElement;
    const closeMenu = (document.querySelector('.header .links .close')) as HTMLElement;

    openMenu?.addEventListener('click', () => {
        links.style.left = '0px';
    });
    closeMenu?.addEventListener('click', () => {
        links.style.left = '-100%';
    });
};

headerFunction();
