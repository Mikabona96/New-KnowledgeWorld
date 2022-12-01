// Styles
import 'normalize.css';
import './main.scss';

// Images

// TS Modules
import './components';
import './elements';
import { sliderHandler } from './components/FourthSection/slider';
import { sliderHandler as sixthSectionSliderHandler } from './components/SixthSection/slider';


const switchRtl = (document.querySelector('.header .links li .link.rtl')) as HTMLElement;

let rtl = false;

const sections = document.querySelectorAll('section');

const switchPageToRtl = () => {
    sections.forEach((section) => {
        rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
    });
};

switchRtl.addEventListener('click', () => {
    switchRtl.innerHTML = rtl ? 'rtl' : 'ltr';
    rtl = !rtl;
    switchPageToRtl();
    sliderHandler();
    sixthSectionSliderHandler();
});

