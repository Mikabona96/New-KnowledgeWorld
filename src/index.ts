// Styles
import 'normalize.css';
import './main.scss';

// Images

// TS Modules
import './components';
import './elements';
import { sliderHandler as sixthSectionSliderHandler } from './components/SixthSection/slider';


const switchRtl = (document.querySelector('.header .links li .link.rtl')) as HTMLElement;

export let rtl = false;

const sections = document.querySelectorAll('section');

const slideWrappers = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper');
const slidesWrapper = (document.querySelector('.sixthsection .slider .slides-wrapper')) as HTMLElement;

export const wrappersTranslateProperty = {
    width:             0,
    marginLeft:        0,
    marginRight:       0,
    slideIndex:        0,
    slideWrapperIndex: 0,
};

export const wrapperTranslateProperty = {
    index: 0,
    width: 0,
};

const switchPageToRtl = () => {
    sections.forEach((section) => {
        rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
    });
};

const setWrappersToInitialPosition = () => {
    const wrapper = slideWrappers[ wrappersTranslateProperty.slideWrapperIndex ] as HTMLElement;
    wrapper.style.transform = rtl ? `translateX(${wrappersTranslateProperty.slideIndex * (wrappersTranslateProperty.width + Number(wrappersTranslateProperty.marginLeft))}px)`
        : `translateX(-${wrappersTranslateProperty.slideIndex * (wrappersTranslateProperty.width + Number(wrappersTranslateProperty.marginRight))}px)`;
};

const setWrapperToInitialPosition = () => {
    slidesWrapper.style.transform = rtl ? `translateX(${wrapperTranslateProperty.index * (wrapperTranslateProperty.width + 40)}px)` : `translateX(-${wrapperTranslateProperty.index * (wrapperTranslateProperty.width + 40)}px)`;
    const btns = document.querySelectorAll('.sixthsection .nav-buttons .nav-btn');
    btns.forEach((btn, i) => {
        btn.classList.remove('active');
        if (wrapperTranslateProperty.index === i) {
            btn.classList.add('active');
        }
    });
};

switchRtl.addEventListener('click', () => {
    switchRtl.innerHTML = rtl ? 'rtl' : 'ltr';
    rtl = !rtl;
    switchPageToRtl();
    sixthSectionSliderHandler();
    setWrappersToInitialPosition();
    setWrapperToInitialPosition();
});

