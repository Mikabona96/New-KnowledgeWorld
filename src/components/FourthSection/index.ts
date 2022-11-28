import '../../assets/img/4th-section-thisweek-img1.png';
import '../../assets/img/4th-section-thisweek-img2.png';
import '../../assets/img/4th-section-thisweek-img3.png';
import '../../assets/img/arrow.png';
import '../../assets/img/lang.png';
import '../../assets/img/time.png';
import '../../assets/img/price.png';

export const fourthSectionFunction = () => {
    window.addEventListener('DOMContentLoaded', () => {
        // ================================== Data ===============================
        const dataStore = {
            bookingType:              'Select booking type',
            name:                     '',
            secondName:               '',
            code:                     'Code',
            number:                   '',
            sendReminders:            false,
            email:                    '',
            knowledgeWorldNewsLetter: false,
            adultVisitors:            0,
            childVisitors:            0,
            country:                  '',
            center:                   'Ecoman Center',
            date:                     '',
            timeSlot:                 '',
            toInitial:                function () {
                this.bookingType = 'Select booking type';
                this.name = '';
                this.secondName = '';
                this.code = 'Code';
                this.number = '';
                this.sendReminders = false;
                this.email = '';
                this.knowledgeWorldNewsLetter = false;
                this.adultVisitors = 0;
                this.childVisitors = 0;
                this.country = '';
                this.center = 'Ecoman Center';
                this.date = '';
                this.timeSlot = '';
            },
        };
        // ============================== Steppers ========================================

        //================== Inputs ==========================

        const inputName = document.querySelector('.step1 .name');
        const inputSecondName = document.querySelector('.step1 .second-name');
        const inputEmail = document.querySelector('.step1 .email');
        const inputPhoneNumber = document.querySelector('.step1 .number');
        const Name = document.querySelector('.step3 .wrapper .name');
        const Phone = document.querySelector('.step3 .wrapper .phone');
        const Email = document.querySelector('.step3 .wrapper .email');

        inputName!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.name = target.value;
            Name!.innerHTML = dataStore.name + ' ' + dataStore.secondName;
        });
        inputSecondName!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.secondName = target.value;
            Name!.innerHTML = dataStore.name + ' ' + dataStore.secondName;
        });
        inputEmail!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.email = target.value;
            Email!.innerHTML = dataStore.email;
        });
        inputPhoneNumber!.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;
            dataStore.number = target.value;
            Phone!.innerHTML = dataStore.code + ' ' + dataStore.number;
        });


        // ================= Custom checkBoxes ==============
        const smsCheckBox = (document.querySelector('.checkbox-wrapper-sms label input')) as HTMLInputElement;
        const newsLetterCheckBox = (document.querySelector('.checkbox-wrapper-newsletter label input')) as HTMLInputElement;

        smsCheckBox.addEventListener('change', () => {
            smsCheckBox.checked ? dataStore.sendReminders = true : dataStore.sendReminders = false;
        });
        newsLetterCheckBox.addEventListener('change', () => {
            newsLetterCheckBox.checked
                ? dataStore.knowledgeWorldNewsLetter = true
                : dataStore.knowledgeWorldNewsLetter = false;
        });


        // ================= Custom Selects ================
        const selectedBookingType = (document.querySelector('.select-wrapper-booking-type .selected')) as HTMLElement;
        const optionsContainerBookingType = document.querySelector('.select-wrapper-booking-type .options-container');
        const BookingType = document.querySelector('.step3 .wrapper .bookingType');

        const optionsListBookingType = document.querySelectorAll('.select-wrapper-booking-type .option');

        selectedBookingType?.addEventListener('click', () => {
            optionsContainerBookingType?.classList.toggle('active');
        });

        optionsListBookingType.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.bookingType = `${data}`;
                selectedBookingType.innerHTML = `${data}`;
                BookingType!.innerHTML = `${data}`;
                optionsContainerBookingType?.classList.remove('active');
            });
        });
        // ===================== Code Select =====================
        const selectedCode = (document.querySelector('.select-wrapper-code .selected')) as HTMLElement;
        const optionsContainerCode = document.querySelector('.select-wrapper-code .options-container');

        const optionsListCode = document.querySelectorAll('.select-wrapper-code .option');

        selectedCode?.addEventListener('click', () => {
            optionsContainerCode?.classList.toggle('active');
        });

        optionsListCode.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.code = `${data}`;
                selectedCode.innerHTML = `<span>${data}</span>`;
                Phone!.innerHTML = dataStore.code + ' ' + dataStore.number;
                optionsContainerCode?.classList.remove('active');
            });
        });
        // ===================== Adult Visitors Select =====================
        const selectedAdults = (document.querySelector('.select-wrapper-adult-visitors .selected')) as HTMLElement;
        const optionsContainerAdults = document.querySelector('.select-wrapper-adult-visitors .options-container');
        const AdultsCount = document.querySelector('.step3 .wrapper .adultsCount');


        const optionsListAdults = document.querySelectorAll('.select-wrapper-adult-visitors .option');

        selectedAdults?.addEventListener('click', () => {
            optionsContainerAdults?.classList.toggle('active');
        });

        optionsListAdults.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.adultVisitors = Number(data);
                selectedAdults.innerHTML = `${data}`;
                AdultsCount!.innerHTML = `${data}`;
                optionsContainerAdults?.classList.remove('active');
            });
        });
        // ===================== Child Visitors Select =====================
        const selectedChilds = (document.querySelector('.select-wrapper-child-visitors .selected')) as HTMLElement;
        const optionsContainerChilds = document.querySelector('.select-wrapper-child-visitors .options-container');
        const ChildsCount = document.querySelector('.step3 .wrapper .childsCount');

        const optionsListChilds = document.querySelectorAll('.select-wrapper-child-visitors .option');

        selectedChilds?.addEventListener('click', () => {
            optionsContainerChilds?.classList.toggle('active');
        });

        optionsListChilds.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.childVisitors = Number(data);
                selectedChilds.innerHTML = `${data}`;
                ChildsCount!.innerHTML = `${data}`;
                optionsContainerChilds?.classList.remove('active');
            });
        });

        // ===================== Country Select =====================
        const selectedCountry = (document.querySelector('.select-wrapper-country .selected')) as HTMLElement;
        const optionsContainerCountry = document.querySelector('.select-wrapper-country .options-container');
        const Country = document.querySelector('.step3 .wrapper .country');

        const optionsListCountry = document.querySelectorAll('.select-wrapper-country .option');

        selectedCountry?.addEventListener('click', () => {
            optionsContainerCountry?.classList.toggle('active');
        });

        optionsListCountry.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                dataStore.country = `${data}`;
                selectedCountry.innerHTML = `${data}`;
                Country!.innerHTML = `${data}`;
                optionsContainerCountry?.classList.remove('active');
            });
        });

        // ====================== STEP 2 ============================
        // ===================== Center Select =====================
        const selectedCenter = (document.querySelector('.select-wrapper-center .selected')) as HTMLElement;
        const optionsContainerCenter = document.querySelector('.select-wrapper-center .options-container');
        const centerTitle = (document.querySelector('.step3 .content .title')) as HTMLElement;
        const place = document.querySelector('.step4 .event-info .place');
        const step4descrPlace = document.querySelector('.step4 .description .description-place');

        const optionsListCenter = document.querySelectorAll('.select-wrapper-center .option');

        selectedCenter?.addEventListener('click', () => {
            optionsContainerCenter?.classList.toggle('active');
        });

        optionsListCenter.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                selectedCenter.innerHTML = `${data}`;
                dataStore.center = `${data}`;
                place!.innerHTML = dataStore.center;
                step4descrPlace!.innerHTML = dataStore.center;
                centerTitle.innerHTML = `${data}`;
                optionsContainerCenter?.classList.remove('active');
            });
        });
        // ===================== Time Select =====================
        const selectedTime = (document.querySelector('.select-wrapper-time .selected')) as HTMLElement;
        const optionsContainerTime = document.querySelector('.select-wrapper-time .options-container');
        const centerTime = (document.querySelector('.step3 .content .date-time .time span')) as HTMLElement;
        const step4time = document.querySelector('.step4 .event-info .time-date li .time-date_time');
        const optionsListTime = document.querySelectorAll('.select-wrapper-time .option');
        const step4descrTime = document.querySelector('.step4 .description .description-time');

        selectedTime?.addEventListener('click', () => {
            optionsContainerTime?.classList.toggle('active');
        });

        optionsListTime.forEach((o) => {
            o.addEventListener('click', () => {
                const data = o?.querySelector('label')?.innerHTML;
                optionsContainerTime?.classList.remove('active');
                selectedTime.innerHTML = `${data}`;
                centerTime.innerHTML = `${data}`;
                dataStore.timeSlot = `${data}`;
                step4time!.innerHTML = dataStore.timeSlot;
                step4descrTime!.innerHTML = dataStore.timeSlot;
            });
        });
        // =============== Date Select =============
        const inputDate = document.querySelector('.step2 .date-wrapper .date');
        const centerDate = (document.querySelector('.step3 .content .date-time .date span')) as HTMLElement;
        const step4date = document.querySelector('.step4 .event-info .time-date li .time-date_date');
        const step4day = document.querySelector('.step4 .description .description-day');
        const step4descrDate = document.querySelector('.step4 .description .description-date');

        const defineDay = (day: number) => {
            switch (day) {
                case 0:
                    return 'Sunday';
                case 1:
                    return 'Monday';
                case 2:
                    return 'Tuesday';
                case 3:
                    return 'Wednesday';
                case 4:
                    return 'Thursday';
                case 5:
                    return 'Friday';
                case 6:
                    return 'Saturday';
                default:
                    return '';
            }
        };
        inputDate?.addEventListener('change', (event) => {
            const target = event.target as HTMLInputElement;
            const date = new Date(target.value);
            const day = defineDay(date.getDay());
            step4day!.innerHTML = day;
            step4descrDate!.innerHTML = target.value.split('-').reverse()
                .join('.');

            const value = target.value.split('-').reverse()
                .join('-');
            dataStore.date = value;
            centerDate.innerHTML = `${value}`;
            step4date!.innerHTML = dataStore.date;
        });

        // ======================= Button Navigation ========================
        const ProgressBar = (document.querySelector('.progress')) as HTMLElement;
        const circleGreen = document.querySelectorAll('.progress .circle-green');
        const CurrentProgress = (document.querySelector('.progress .current-progress')) as HTMLElement;
        // const stepsContainer = (document.querySelector('.steps-container')) as HTMLElement;
        const nextBtns = document.querySelectorAll('.btn.next-step');
        const prevBtns = document.querySelectorAll('.btn.prev-step');
        // const step = (document.querySelector('.step')) as HTMLElement;
        const steps = document.querySelectorAll('.step');
        // let width = step.clientWidth + 24;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let index = 0;

        const removeCircleActiveClass = (idx?: number) => {
            circleGreen.forEach((circle, i) => {
                if (i === idx as number + 1) {
                    circle.classList.remove('active');
                }
                if (!idx) {
                    circle.classList.remove('active');
                }
            });
        };
        const removeActiveStep = () => {
            steps.forEach((step) => {
                step.classList.remove('active');
            });
        };
        nextBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index += 1;
                if (index > 2) {
                    ProgressBar.style.display = 'none';
                }
                if (i < 2) {
                    circleGreen[ index ].classList.toggle('active');
                }
                removeActiveStep();
                steps[ index ].classList.add('active');
                CurrentProgress.style.width = `${index * 50}%`;
            });
        });

        prevBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                index -= 1;

                if (index <= 2) {
                    ProgressBar.style.display = 'flex';
                }
                removeActiveStep();
                steps[ index ].classList.add('active');
                removeCircleActiveClass(index);
                if (i === 0) {
                    circleGreen[ 0 ].classList.add('active');
                }
                CurrentProgress.style.width = `${index * 50}%`;
            });
        });
        // ============================= Open Stepper =============================
        const fourthSection = document.querySelector('.fourthsection');
        const makeBookingBtn = document.querySelector('.buttons .makebooking-btn');
        const makeBookingStepper = (document.querySelector('.makebooking-stepper')) as HTMLElement;
        const makeBookingStepperClose = (document.querySelector('.makebooking-stepper .close')) as HTMLElement;
        const rtl = !!fourthSection?.classList.contains('rtl');
        const forms = document.querySelectorAll('form');

        makeBookingBtn?.addEventListener('click', () => {
            ProgressBar.style.display = 'flex';
            rtl ? makeBookingStepper.style.left = '0px' : makeBookingStepper.style.right = '0px';
            index = 0;
            removeActiveStep();
            steps[ index ].classList.add('active');
            console.log('click');
        });

        const restFormToInitial = () => {
            dataStore.toInitial();
            forms.forEach((form) => {
                form.reset();
            });
            selectedBookingType.innerHTML = 'Select booking type';
            BookingType!.innerHTML = '';
            Name!.innerHTML = '';
            Phone!.innerHTML = '';
            Email!.innerHTML = '';
            selectedCode.innerHTML = '<span>Code</span>';
            selectedCountry.innerHTML = 'Country';
            selectedCenter.innerHTML = 'Select Center';
            selectedTime.innerHTML = 'Select timeslot';
            AdultsCount!.innerHTML = '';
            selectedAdults!.innerHTML = 'Number of Adult Visitors (18+)';
            ChildsCount!.innerHTML = '';
            selectedChilds!.innerHTML = 'Number of Child Visitors';
            Country!.innerHTML = '';
            centerTitle.innerHTML = '';
            centerTime.innerHTML = '';
            centerDate.innerHTML = '';
            place!.innerHTML = '';
            step4time!.innerHTML = '';
            step4date!.innerHTML = '';
            step4day!.innerHTML = '';
            step4descrDate!.innerHTML = '';
            step4descrPlace!.innerHTML = '';
            step4descrTime!.innerHTML = '';
        };

        makeBookingStepperClose.addEventListener('click', () => {
            rtl ? makeBookingStepper.style.left = '-200%' : makeBookingStepper.style.right = '-200%';
            index = 0;
            removeActiveStep();
            steps[ index ].classList.add('active');
            removeCircleActiveClass();
            circleGreen[ index ].classList.toggle('active');
            CurrentProgress.style.width = `${index * 50}%`;
            restFormToInitial();
        });

        // ===================== Find booking ==========================
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let findBookingIndex = 0;
        const findBookingStepper = (document.querySelector('.findbooking-stepper')) as HTMLElement;
        const findBookingSteps = document.querySelectorAll('.findbooking-stepper .step');
        const viewBookingBtn = document.querySelector('.viewbooking-btn');
        const closeFindBookingBtn = document.querySelector('.findbooking-stepper .close');
        const findBtn = document.querySelector('.findbooking-stepper .step1 .find');

        const fbRemoveActiveStep = (idx: number) => {
            findBookingSteps.forEach((step, i) => {
                step.classList.remove('active');
                if (idx === i) {
                    step.classList.add('active');
                }
            });
        };
        viewBookingBtn?.addEventListener('click', () => {
            findBookingSteps[ findBookingIndex ].classList.add('active');
            rtl ? findBookingStepper.style.left = '0px' : findBookingStepper.style.right = '0px';
            console.log('click');
        });

        closeFindBookingBtn?.addEventListener('click', () => {
            findBookingIndex = 0;
            fbRemoveActiveStep(findBookingIndex);
            rtl ? findBookingStepper.style.left = '-200%' : findBookingStepper.style.right = '-200%';
        });
        findBtn?.addEventListener('click', () => {
            findBookingIndex += 1;

            fbRemoveActiveStep(findBookingIndex);
        });

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
    });
};

fourthSectionFunction();
