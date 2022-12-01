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

const switchPageToRtl = () => {
    sections.forEach((section) => {
        rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
    });
};

// const setWrappersToInitialPosition = () => {
//     slideWrappers.forEach((slideWrapper) => {
//         const wrapper = slideWrapper as HTMLElement;
//         wrapper.style.transform = 'translateX(0px)';
//     });
// };

switchRtl.addEventListener('click', () => {
    switchRtl.innerHTML = rtl ? 'rtl' : 'ltr';
    rtl = !rtl;
    switchPageToRtl();
    // sliderHandler();
    sixthSectionSliderHandler();
    // setWrappersToInitialPosition();
});

