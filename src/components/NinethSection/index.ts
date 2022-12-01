import '../../assets/img/9th-section-img.png';

export const ninethSectionFunction = () => {
    const Name = (document.querySelector('.ninethsection .right .form-wrapper .form .name')) as HTMLInputElement;
    const Phone = (document.querySelector('.ninethsection .right .form-wrapper .form .phone')) as HTMLInputElement;
    const Email = (document.querySelector('.ninethsection .right .form-wrapper .form .email')) as HTMLInputElement;
    const Comment = (document.querySelector('.ninethsection .right .form-wrapper .form .comment')) as HTMLTextAreaElement;
    const Form = (document.querySelector('.ninethsection .right .form-wrapper .form')) as HTMLFormElement;

    let data = {
        name:    '',
        phone:   '',
        email:   '',
        comment: '',
    };

    const initialData = {
        name:    '',
        phone:   '',
        email:   '',
        comment: '',
    };

    Name.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        data.name = target!.value;
    });
    Phone.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        data.phone = target!.value;
    });
    Email.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        data.email = target!.value;
    });
    Comment.addEventListener('input', (event) => {
        const target = event.target as HTMLTextAreaElement;
        data.comment = target!.value;
    });

    Form.addEventListener('submit', (event) => {
        console.log('submit');

        event.preventDefault();
        // fetch('http://fake.api.com', {
        //     method:  'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // });
        setTimeout(() => {
            data = initialData;
            Form.reset();
        }, 1000);
    });
};

ninethSectionFunction();
