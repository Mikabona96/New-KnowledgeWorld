import { rtl, wrapperTranslateProperty } from '../..';

export const sliderHandler = () => {
    const slide = (document.querySelector('.sixthsection .slider .slides-wrapper .slide')) as HTMLElement;
    let width = slide.offsetWidth;
    const btns = document.querySelectorAll('.sixthsection .nav-buttons .nav-btn');
    const slidesWrapper = (document.querySelector('.sixthsection .slider .slides-wrapper')) as HTMLElement;
    const leftArrow = (document.querySelector('.sixthsection .arrows .left-arrow')) as HTMLElement;
    const rightArrow = (document.querySelector('.sixthsection .arrows .right-arrow')) as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let index = 0;
    wrapperTranslateProperty.index = index;
    wrapperTranslateProperty.width = width;
    // const sixthsection = document.querySelector('.sixthsection');
    // let rtl = sixthsection?.classList.contains('rtl');
    const removeBtnActiveClass = (idx: number) => {
        btns.forEach((btn, i) => {
            btn.classList.remove('active');
            if (idx === i) {
                btn.classList.add('active');
            }
        });
    };

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            index = i;
            wrapperTranslateProperty.index = index;
            removeBtnActiveClass(i);
            slidesWrapper.style.transform = rtl ? `translateX(${i * (width + 40)}px)` : `translateX(-${i * (width + 40)}px)`;
        });
    });

    leftArrow.addEventListener('click', () => {
        if (index <= 0) {
            index = 0;
            wrapperTranslateProperty.index = index;

            return;
        }
        index -= 1;
        wrapperTranslateProperty.index = index;
        removeBtnActiveClass(index);
        slidesWrapper.style.transform = rtl ? `translateX(${index * (width + 40)}px)` : `translateX(-${index * (width + 40)}px)`;
    });
    rightArrow.addEventListener('click', () => {
        if (index >= btns.length - 1) {
            index = btns.length - 1;
            wrapperTranslateProperty.index = index;

            return;
        }
        index += 1;
        wrapperTranslateProperty.index = index;
        removeBtnActiveClass(index);
        slidesWrapper.style.transform = rtl ? `translateX(${index * (width + 40)}px)` : `translateX(-${index * (width + 40)}px)`;
    });

    // =========== Swipe Events =============
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let initialPosition = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let moving = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let transform = 0;
    let diff = 0;
    let currentPosition = 0;

    slidesWrapper?.addEventListener('touchstart', (event: any) => {
        initialPosition = event.touches[ 0 ].clientX;
        moving = true;
        const transformMatrix = window.getComputedStyle(slidesWrapper).getPropertyValue('transform');
        if (transformMatrix !== 'none') {
            transform = Number(transformMatrix.split(',')[ 4 ].trim());
        }
    });
    slidesWrapper?.addEventListener('touchmove', (event: any) => {
        if (moving) {
            currentPosition = event.touches[ 0 ].clientX;
            diff = currentPosition - initialPosition;

            slidesWrapper.style.transform = `translateX(${transform + diff}px)`;
        }
    });
    slidesWrapper?.addEventListener('touchend', () => {
        moving = false;
        if (rtl) {
            if (diff > 0) {
                index += 1;
                if (btns && index >= btns?.length - 1) {
                    index = btns.length - 1;
                }
                slidesWrapper.style.transform = `translateX(${(width + 40) * index}px)`;
            } else {
                index -= 1;
                if (index < 0) {
                    index = 0;
                }
                slidesWrapper.style.transform = `translateX(${(width + 40) * index}px)`;
            }
            wrapperTranslateProperty.index = index;
            removeBtnActiveClass(index);
        } else {
            if (diff < 0) {
                index += 1;
                if (btns && index >= btns?.length - 1) {
                    index = btns.length - 1;
                }
                slidesWrapper.style.transform = `translateX(-${(width + 40) * index}px)`;
            } else {
                index -= 1;
                if (index < 0) {
                    index = 0;
                }
                slidesWrapper.style.transform = `translateX(-${(width + 40) * index}px)`;
            }
            wrapperTranslateProperty.index = index;
            removeBtnActiveClass(index);
        }
    });

    window.addEventListener('resize', () => {
        width = slide.offsetWidth;
        wrapperTranslateProperty.width = width;
        slidesWrapper.style.transform = rtl ? `translateX(-${index * (width + 40)}px)` : `translateX(-${index * (width + 40)}px)`;
    });
};
