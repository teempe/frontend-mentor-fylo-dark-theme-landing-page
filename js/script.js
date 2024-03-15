const formCta = document.querySelector('.form-cta');
const inputEmail = formCta.querySelector('input[type="email"]');


const validateEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return emailPattern.test(email);
}

const renderFormError = () => {
    formCta.classList.add('form-cta--error');
}

const cleanFormError = () => {
    formCta.classList.remove('form-cta--error');
}

const cleanFormInput = () => {
    inputEmail.value = '';
    inputEmail.blur();
    cleanFormError();
}

const handleFormSubmit = event => {    
    event.preventDefault();
    cleanFormError();
    
    const inputValue = inputEmail.value.trim();
    if (validateEmail(inputValue)) {
        console.log(`Success! ${inputValue} registered.`);
        cleanFormInput();
        return;
    }

    renderFormError();
}

const handleKeyPress = event => {
    // Escape clean up form (even if form is not focused)
    if (event.key === 'Escape') {
        cleanFormInput(formCta.querySelector('input[type="email"]'));
        return;
    }
}

formCta.addEventListener('submit', handleFormSubmit);

// to clean up form input when user press Ecsape
document.body.addEventListener('keydown', handleKeyPress);
