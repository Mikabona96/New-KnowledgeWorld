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
    let marginRight = regExp ? regExp[ 0 ] : null;
    const tabs = document.querySelectorAll('.fourthsection .tabs .tab');
    const slideWrappers = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper');
    const navBtnsContainer = document.querySelector('.fourthsection .nav-buttons');
    let slideWrapperIndex = 0;
    let slides = document.querySelectorAll('.fourthsection .wrappers-container .slide-wrapper.this-week .slide');

    let rtl = false;

    const removeActiveTab = (idx: number) => {
        tabs.forEach((tab, i) => {
            tab.classList.remove('active');
            if (i === idx) {
                tab.classList.add('active');
            }
        });
    };
    const removeActiveSlideWrapper = (idx: number) => {
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
            initNavBtns();
        }
        slideWrapperIndex = idx;
        slides = slideWrappers[ slideWrapperIndex ].querySelectorAll('.slide');
    };

    // ============= Custom Select =============
    const selectedTab = (document.querySelector('.select-wrapper-tab .selected')) as HTMLElement;
    const optionsTab = document.querySelectorAll('.select-wrapper-tab .option');
    const optionsContainerTab = document.querySelector('.select-wrapper-tab .options-container');
    selectedTab?.addEventListener('click', () => {
        optionsContainerTab?.classList.toggle('active');
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
                slideWrap.style.transform = `translateX(-${i * (width + Number(marginRight))}px)`;
                removeActiveNavBtn(i);
            });
        });
    }

    initNavBtns();

    leftArrow.addEventListener('click', () => {
        if (slideIndex <= 0) {
            slideIndex = 0;

            return;
        }
        slideIndex -= 1;
        const slideWrap = slideWrapper[ slideWrapperIndex ] as HTMLElement;
        slideWrap.style.transform = `translateX(-${slideIndex * (width + Number(marginRight))}px)`;
        removeActiveNavBtn(slideIndex);
    });

    rightArrow.addEventListener('click', () => {
        if (slideIndex >= slides.length - 1) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex += 1;
            const slideWrap = slideWrapper[ slideWrapperIndex ] as HTMLElement;
            slideWrap.style.transform = `translateX(-${slideIndex * (width + Number(marginRight))}px)`;
            removeActiveNavBtn(slideIndex);
        }
    });

    // ================== Swipe Events =================
    function initSwipeEvents() {
        // =========== Swipe Events =============
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let initialPosition = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let moving = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let transform = 0;
        let diff = 0;
        let currentPosition = 0;
        let wrapper = slideWrappers[ slideWrapperIndex ] as HTMLElement;

        wrapper?.addEventListener('touchstart', (event: any) => {
            initialPosition = event.touches[ 0 ].clientX;
            moving = true;
            const transformMatrix = window.getComputedStyle(wrapper).getPropertyValue('transform');
            if (transformMatrix !== 'none') {
                transform = Number(transformMatrix.split(',')[ 4 ].trim());
            }
        });
        wrapper?.addEventListener('touchmove', (event: any) => {
            if (moving) {
                currentPosition = event.touches[ 0 ].clientX;
                diff = currentPosition - initialPosition;

                wrapper.style.transform = `translateX(${transform + diff}px)`;
            }
        });
        wrapper?.addEventListener('touchend', () => {
            moving = false;
            if (rtl) {
                if (diff > 0) {
                    slideIndex += 1;
                    if (navBtns && slideIndex >= navBtns?.length - 1) {
                        slideIndex = navBtns.length - 1;
                    }
                    wrapper.style.transform = `translateX(${(width + Number(marginRight)) * slideIndex}px)`;
                } else {
                    slideIndex -= 1;
                    if (slideIndex < 0) {
                        slideIndex = 0;
                    }
                    wrapper.style.transform = `translateX(${(width + Number(marginRight)) * slideIndex}px)`;
                }
                removeActiveNavBtn(slideIndex);
            } else {
                if (diff < 0) {
                    slideIndex += 1;
                    if (navBtns && slideIndex >= navBtns?.length - 1) {
                        slideIndex = navBtns.length - 1;
                    }
                    wrapper.style.transform = `translateX(-${(width + Number(marginRight)) * slideIndex}px)`;
                } else {
                    slideIndex -= 1;
                    if (slideIndex < 0) {
                        slideIndex = 0;
                    }
                    wrapper.style.transform = `translateX(-${(width + Number(marginRight)) * slideIndex}px)`;
                }
                removeActiveNavBtn(slideIndex);
            }
        });
    }
    initSwipeEvents();
};
