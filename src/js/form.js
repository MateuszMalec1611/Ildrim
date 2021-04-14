(function form() {
    const textAreaInput = document.querySelector('.form__box-description');
    const fullName = document.querySelector('#full-name');
    const phoneNumber = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const city = document.querySelector('#city');
    const zip = document.querySelector('#zip');
    const button = document.querySelector('.form__button');
    let $mistakes;

    const formErrors = {
        data: 'Wprowadź poprawne dane',
        number: 'Wprowadź poprawny numer telefonu',
        email: 'Wprowadź poprawny adres email',
        city: 'Wprowadź poprawną nazwę miasta',
        zipCode: 'Wprowadź poprawny kod pocztowy'
    }

    const showError = (element, text) => {
        const formBox = element.parentElement;
        const error = formBox.querySelector('.form__box-error');
        error.style.display = 'block';
        error.innerText = text;
        $mistakes++;
        if($mistakes === 1) element.focus();
    }

    const clearError = element => {
        const formBox = element.parentElement;
        const error = formBox.querySelector('.form__box-error');
        error.style.display = 'none';
    }


    const checkFullName = () => {
        const re = /^([a-z]{2,3} [A-ZŁŻ][a-ząęóżźćńłś]{2,})|([A-ZŁŻ][a-ząęóżźćńłś]{2,})(-[A-ZŁŻ][a-ząęóżźćńłś]{2,})?$/;
        re.test(fullName.value) ? clearError(fullName) : showError(fullName, formErrors.data);
    }

    const checkPhoneNumber = () => {
        const re = /^(?:\(?\?)?(?:[-\.\(\)\s]*(\d)){9}\)?$/;
        re.test(phoneNumber.value) ? clearError(phoneNumber) : showError(phoneNumber, formErrors.number);
    }

    const checkEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(email.value) ? clearError(email) : showError(email, formErrors.email);
    }

    const checkCity = () => {
        city.value.length >= 2 ? clearError(city) : showError(city, formErrors.city);
    }

    const checkZip = () => {
        const re = /[0-9]{2}-[0-9]{3}/;
        re.test(zip.value) ? clearError(zip) : showError(zip, formErrors.zipCode);
    }

    button.addEventListener('click', event => {
        $mistakes = 0;
        checkFullName();
        checkPhoneNumber();
        checkEmail();
        checkCity();
        checkZip();

        if ($mistakes > 0) event.preventDefault();
    });

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

    textAreaInput.addEventListener('keyup', textAreaStyles);
})();