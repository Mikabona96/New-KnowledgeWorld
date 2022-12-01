import { rtl, wrappersTranslateProperty } from '../..';

export const sliderHandler = () => {
    //================================== SLIDER ==========================================
    const slide = (document.querySelector('.fourthsection .wrappers-container .slide-wrapper .slide')) as HTMLElement;
    const slideWrapper = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper');
    let navBtns = document.querySelectorAll('.fourthsection .nav-buttons .nav-btn');
    const leftArrow = (document.querySelector('.fourthsection .arrows .left-arrow')) as HTMLElement;
    const rightArrow = (document.querySelector('.fourthsection .arrows .right-arrow')) as HTMLElement;
    let slideIndex  = 0;
    let width = slide.offsetWidth;
    let regExp = window.getComputedStyle(slide).marginRight.match(/\d+/g);
    let regExp2 = window.getComputedStyle(slide).marginLeft.match(/\d+/g);
    let marginRight = regExp ? regExp[ 0 ] : null;
    let marginLeft = regExp2 ? regExp2[ 0 ] : null;
    wrappersTranslateProperty.marginLeft = Number(marginLeft);
    wrappersTranslateProperty.marginRight = Number(marginRight);
    const tabs = document.querySelectorAll('.fourthsection .tabs .tab');
    const slideWrappers = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper');
    const navBtnsContainer = document.querySelector('.fourthsection .nav-buttons');
    let slideWrapperIndex = 0;
    let slides = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper.this-week .slide');
    let wrapper = slideWrappers[ slideWrapperIndex ] as HTMLElement;
    wrappersTranslateProperty.width = width;

    const removeActiveTab = (idx: number) => {
        tabs.forEach((tab, i) => {
            tab.classList.remove('active');
            if (i === idx) {
                tab.classList.add('active');
            }
        });
    };

    // ================== Swipe Events =================
    // =========== Swipe Events =============
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let initialPosition = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let moving = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let transform = 0;
    let diff = 0;
    let currentPosition = 0;

    const touchStartHandler = (event: any) => {
        initialPosition = event.touches[ 0 ].clientX;
        moving = true;
        const transformMatrix = window.getComputedStyle(wrapper).getPropertyValue('transform');
        if (transformMatrix !== 'none') {
            transform = Number(transformMatrix.split(',')[ 4 ].trim());
        }
    };

    const touchMoveHandler = (event: any) => {
        if (moving) {
            currentPosition = event.touches[ 0 ].clientX;
            diff = currentPosition - initialPosition;

            wrapper.style.transform = `translateX(${transform + diff}px)`;
        }
    };

    const touchEndHandler = () => {
        moving = false;
        if (rtl) {
            if (diff > 0) {
                slideIndex += 1;
                if (navBtns && slideIndex >= navBtns?.length - 1) {
                    slideIndex = navBtns.length - 1;
                }
                wrapper.style.transform = `translateX(${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)`;
            } else {
                slideIndex -= 1;
                if (slideIndex < 0) {
                    slideIndex = 0;
                }
                wrapper.style.transform = `translateX(${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)`;
            }
            wrappersTranslateProperty.slideIndex = slideIndex;
            removeActiveNavBtn(slideIndex);
        } else {
            if (diff < 0) {
                slideIndex += 1;
                if (navBtns && slideIndex >= navBtns?.length - 1) {
                    slideIndex = navBtns.length - 1;
                }
                wrapper.style.transform = `translateX(-${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)`;
            } else {
                slideIndex -= 1;
                if (slideIndex < 0) {
                    slideIndex = 0;
                }
                wrapper.style.transform = `translateX(-${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)`;
            }
            wrappersTranslateProperty.slideIndex = slideIndex;
            removeActiveNavBtn(slideIndex);
        }
    };

    wrapper?.addEventListener('touchstart', touchStartHandler);
    wrapper?.addEventListener('touchmove', touchMoveHandler);
    wrapper?.addEventListener('touchend', touchEndHandler);


    const removeActiveSlideWrapper = (idx: number) => {
        wrapper?.removeEventListener('touchstart', touchStartHandler);
        wrapper?.removeEventListener('touchmove', touchMoveHandler);
        wrapper?.removeEventListener('touchend', touchEndHandler);
        slideWrapperIndex = idx;
        wrappersTranslateProperty.slideWrapperIndex = slideWrapperIndex;
        wrapper = slideWrappers[ slideWrapperIndex ] as HTMLElement;
        wrapper?.addEventListener('touchstart', touchStartHandler);
        wrapper?.addEventListener('touchmove', touchMoveHandler);
        wrapper?.addEventListener('touchend', touchEndHandler);
        slideWrappers.forEach((slideWrapper, i) => {
            slideWrapper.classList.remove('active');
            if (i === idx) {
                slideWrapper.classList.add('active');
            }
            const wrapper = slideWrapper as HTMLElement;
            wrapper.style.transform = `translateX(-${0}px)`;
        });
        if (idx === 0) {
            navBtnsContainer!.innerHTML = '';
            for (let i = 0; i < 5; i++) {
                const navBtn = document.createElement('div');
                if (i === 0) {
                    navBtn.classList.add('nav-btn');
                    navBtn.classList.add('active');
                } else {
                    navBtn.classList.add('nav-btn');
                }
                navBtnsContainer?.append(navBtn);
            }
            navBtns = document.querySelectorAll('.fourthsection .nav-buttons .nav-btn');
            slideIndex = 0;
            wrappersTranslateProperty.slideIndex = slideIndex;
            initNavBtns();
        }
        if (idx === 1) {
            navBtnsContainer!.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                const navBtn = document.createElement('div');
                if (i === 0) {
                    navBtn.classList.add('nav-btn');
                    navBtn.classList.add('active');
                } else {
                    navBtn.classList.add('nav-btn');
                }
                navBtnsContainer?.append(navBtn);
            }
            navBtns = document.querySelectorAll('.fourthsection .nav-buttons .nav-btn');
            slideIndex = 0;
            wrappersTranslateProperty.slideIndex = slideIndex;
            initNavBtns();
        }
        if (idx === 2) {
            navBtnsContainer!.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const navBtn = document.createElement('div');
                if (i === 0) {
                    navBtn.classList.add('nav-btn');
                    navBtn.classList.add('active');
                } else {
                    navBtn.classList.add('nav-btn');
                }
                navBtnsContainer?.append(navBtn);
            }
            navBtns = document.querySelectorAll('.fourthsection .nav-buttons .nav-btn');
            slideIndex = 0;
            wrappersTranslateProperty.slideIndex = slideIndex;
            initNavBtns();
        }
        slides = slideWrappers[ slideWrapperIndex ].querySelectorAll('.slide');
    };

    // ============= Custom Select =============
    const selectedTab = (document.querySelector('.select-wrapper-tab .selected')) as HTMLElement;
    const optionsTab = document.querySelectorAll('.select-wrapper-tab .option');
    const optionsContainerTab = document.querySelector('.select-wrapper-tab .options-container');
    let isTabClicked = false;
    selectedTab?.addEventListener('click', () => {
        isTabClicked ? optionsContainerTab?.classList.remove('active') : optionsContainerTab?.classList.add('active');
        isTabClicked = !isTabClicked;
    });
    optionsTab.forEach((o) => {
        o.addEventListener('click', () => {
            const data = o?.querySelector('label')?.innerHTML;
            const value = Number(o?.querySelector('label')?.getAttribute('data-value'));

            optionsContainerTab?.classList.remove('active');
            selectedTab.innerHTML = `${data}`;
            removeActiveSlideWrapper(value);
        });
    });

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            removeActiveTab(i);
            removeActiveSlideWrapper(i);
        });
    });

    const removeActiveNavBtn = (idx: number) => {
        const navBtns = document.querySelectorAll('.fourthsection .nav-buttons .nav-btn');
        navBtns.forEach((btn, i) => {
            btn.classList.remove('active');
            if (i === idx) {
                btn.classList.add('active');
            }
        });
    };

    function initNavBtns() {
        navBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                slideIndex = i;
                const slideWrap = slideWrapper[ slideWrapperIndex ] as HTMLElement;
                slideWrap.style.transform = rtl ? `translateX(${i * (width + Number(marginLeft))}px)` : `translateX(-${i * (width + Number(marginRight))}px)`;
                removeActiveNavBtn(i);
                wrappersTranslateProperty.slideIndex = slideIndex;
            });
        });
    }

    initNavBtns();

    leftArrow.addEventListener('click', () => {
        if (slideIndex <= 0) {
            slideIndex = 0;
            wrappersTranslateProperty.slideIndex = slideIndex;

            return;
        }
        slideIndex -= 1;
        wrappersTranslateProperty.slideIndex = slideIndex;
        const slideWrap = slideWrapper[ slideWrapperIndex ] as HTMLElement;
        slideWrap.style.transform = rtl ? `translateX(${slideIndex * (width + Number(marginLeft))}px)` : `translateX(-${slideIndex * (width + Number(marginRight))}px)`;
        removeActiveNavBtn(slideIndex);
    });

    rightArrow.addEventListener('click', () => {
        if (slideIndex >= slides.length - 1) {
            slideIndex = slides.length - 1;
            wrappersTranslateProperty.slideIndex = slideIndex;
        } else {
            slideIndex += 1;
            wrappersTranslateProperty.slideIndex = slideIndex;
            const slideWrap = slideWrapper[ slideWrapperIndex ] as HTMLElement;
            slideWrap.style.transform = rtl ? `translateX(${slideIndex * (width + Number(marginLeft))}px)` : `translateX(-${slideIndex * (width + Number(marginRight))}px)`;
            removeActiveNavBtn(slideIndex);
        }
    });

    window.addEventListener('resize', () => {
        width = slide.offsetWidth;
        wrappersTranslateProperty.width = width;
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let wrapper = slideWrappers[ slideWrapperIndex ] as HTMLElement;
        wrapper.style.transform = rtl ? `translateX(${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)` : `translateX(-${(width + Number(rtl ? marginLeft : marginRight)) * slideIndex}px)`;
    });
};
