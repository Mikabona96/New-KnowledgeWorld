// Styles
import 'normalize.css';
import './main.scss';

// Images

// TS Modules
import './components';
import './elements';


let rtl = false;

const sections = document.querySelectorAll('section');

sections.forEach((section) => {
    rtl ? section.classList.add('rtl') : section.classList.remove('rtl');
});
