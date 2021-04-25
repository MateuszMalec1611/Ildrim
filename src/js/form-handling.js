(function () {
    const emailForm = document.querySelector('.form__box');
    const message = document.querySelector('.form__message');
    const button = document.querySelector('.form__button');
    const loader = document.querySelector('.lds-ring');
  
    if (emailForm) {
      emailForm.addEventListener('submit', event => {
        event.preventDefault();
        processForm(emailForm, event);
      })
    }
  
    const processForm = (form, event) => {
      const data = new FormData(form);
      message.innerHTML = "";
      button.classList.add('hidden');
      loader.classList.add('visible');
  
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      })
        .then(() => {
          message.innerHTML = `<p class="form__message-success">Dziękujemy, Twoja wiadomość została wysłana pomyślnie.</p>`;
          emailForm.reset();
          button.classList.remove('hidden');
          loader.classList.remove('visible');
        })
        .catch(error => {
          message.innerHTML = `<p class="form__message-error">Error: ${error}</p>`;
          button.classList.remove('hidden');
          loader.classList.remove('visible');
        })
    }
  })();