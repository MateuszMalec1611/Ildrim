(function form() {
    const inputs = document.querySelectorAll('.form__box-input');
    const button = document.querySelector('.form__button');
    const textAreaInput = document.querySelector('.form__box-description');
    let $mistakes = 0;
    let $validate = false;


    const formErrors = {
        data: 'Wprowadź poprawne dane',
        phone: 'Wprowadź poprawny numer telefonu',
        email: 'Wprowadź poprawny adres email',
        city: 'Wprowadź poprawną nazwę miasta',
        zip: 'Wprowadź poprawny kod pocztowy'
    }

    const showError = (inputName, input) => {
        const formBox = input.parentElement;
        const error = formBox.querySelector('.form__box-error');

        $mistakes++;
        if ($mistakes === 1) input.focus();

        switch (inputName) {
            case 'data':
                error.innerText = formErrors.data;
                break;
            case 'phone':
                error.innerText = formErrors.phone;
                break;
            case 'email':
                error.innerText = formErrors.email;
                break;
            case 'city':
                error.innerText = formErrors.city;
                break;
            case 'zip':
                error.innerText = formErrors.zip;
                break;

            default:
                break;
        }
        error.style.display = 'block';
    }

    const clearError = element => {
        const formBox = element.parentElement;
        const error = formBox.querySelector('.form__box-error');
        error.style.display = 'none';
    }

    const checkInputs = () => {
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                const inputName = input.getAttribute('id');
                showError(inputName, input);
            }
            if (input.checkValidity()) clearError(input);
        });
    }

    const checkInputForValue = input => input.value.length ? input.classList.remove('empty') : input.classList.add('empty');
    
    const checkInput = element => {
        const input = element.target;

        checkInputForValue(input);

        if (!input.checkValidity() && $validate) {
            const inputName = input.getAttribute('id');
            showError(inputName, input);
        }
        if (input.checkValidity() && $validate) clearError(input);
    }

    inputs.forEach(input => {
        const inputName = input.getAttribute('id');
        const properInput = document.querySelector(`#${inputName}`);
        checkInputForValue(properInput);
        properInput.addEventListener('input', checkInput);
    });

    button.addEventListener('click', event => {
        $mistakes = 0;
        checkInputs();
        $validate = true;
        if ($mistakes > 0) event.preventDefault();
    });

    // TEXT AREA STYLES SECTION

    const textAreaStyles = () => {
        const textAreaLabel = textAreaInput.nextElementSibling;

        if (textAreaInput.value !== '') {
            textAreaLabel.classList.add('form__box-description--active');
            textAreaInput.style.height = '12rem';
        } else {
            textAreaLabel.classList.remove('form__box-description--active');
            textAreaInput.style.height = '4rem';
        }
    }

    textAreaInput.addEventListener('input', textAreaStyles);
})();