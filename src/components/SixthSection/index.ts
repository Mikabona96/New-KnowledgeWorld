import '../../assets/img/arrow.png';
import '../../assets/img/6th-section-slide-img1.png';
import '../../assets/img/6th-section-slide-img2.png';
import '../../assets/img/6th-section-slide-img3.png';

export const sixthSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const slide = (document.querySelector('.sixthsection .slider .slides-wrapper .slide')) as HTMLElement;
        const slides = document.querySelectorAll('.sixthsection .slider .slides-wrapper .slide');
        let width = slide.offsetWidth;
        const btns = document.querySelectorAll('.sixthsection .nav-buttons .nav-btn');
        const slidesWrapper = (document.querySelector('.sixthsection .slider .slides-wrapper')) as HTMLElement;
        const leftArrow = (document.querySelector('.sixthsection .arrows .left-arrow')) as HTMLElement;
        const rightArrow = (document.querySelector('.sixthsection .arrows .right-arrow')) as HTMLElement;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let index = 0;
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
                removeBtnActiveClass(i);
                slidesWrapper.style.transform = `translateX(-${i * (width + 40)}px)`;
            });
        });

        leftArrow.addEventListener('click', () => {
            if (index <= 0) {
                index = 0;

                return;
            }
            index -= 1;
            removeBtnActiveClass(index);
            slidesWrapper.style.transform = `translateX(-${index * (width + 40)}px)`;
        });
        rightArrow.addEventListener('click', () => {
            if (index >= btns.length - 1) {
                index = btns.length - 1;

                return;
            }
            index += 1;
            removeBtnActiveClass(index);
            slidesWrapper.style.transform = `translateX(-${index * (width + 40)}px)`;
        });
    });
};

sixthSectionFunction();
