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

export const wrappersTranslateProperty = {
    width:             0,
    marginLeft:        0,
    marginRight:       0,
    slideIndex:        0,
    slideWrapperIndex: 0,
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

switchRtl.addEventListener('click', () => {
    switchRtl.innerHTML = rtl ? 'rtl' : 'ltr';
    rtl = !rtl;
    switchPageToRtl();
    // sliderHandler();
    sixthSectionSliderHandler();
    setWrappersToInitialPosition();
});

