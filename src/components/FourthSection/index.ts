import '../../assets/img/4th-section-thisweek-img1.png';
import '../../assets/img/4th-section-thisweek-img2.png';
import '../../assets/img/4th-section-thisweek-img3.png';
import '../../assets/img/arrow.png';
import '../../assets/img/lang.png';
import '../../assets/img/time.png';
import '../../assets/img/price.png';
import { sliderHandler } from './slider';
import { stepperHandler } from './stepper';

export const fourthSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        // ================================== STEPPERS ==========================================
        stepperHandler();
        // ================================== SLIDER ============================================
        sliderHandler();
    });
};

fourthSectionFunction();
