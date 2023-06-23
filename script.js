const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const cardNumber = form.cardNumber.value;
    const firstName = form.firstName.value;
    const dateNumber = form.dateNumber.value
    const cvc = form.cvc.value;

    const cardNumberInput = document.getElementById('cardNumber');
    const firstNameInput = document.getElementById('firstName');

    const holderForCrd = document.querySelector('.holderForCrd');
    const holderForName = document.querySelector('.holderForName')

    const patternForCardNumber = /^\d{16}$/;
    const patternForFirstName = /^[A-Za-z\s'-]+$/;
  
    if(patternForCardNumber.test(cardNumber)){
        // Cardnumber is valid
        cardNumberInput.style.border = '1px solid gray'
        holderForCrd.textContent = '';
    } else {
        cardNumberInput.style.border = '1px solid red'
        holderForCrd.textContent = 'Card Number should only contain numbers and should be 16 characters long'
    }

    if(patternForFirstName.test(firstName)) {
        // Name is Valid 
        firstNameInput.style.border = '1px solid gray';
        holderForName.textContent = '';
    } else {
        firstNameInput.style.border = '1px solid red'
        holderForName.textContent = 'Type a Proper Name'
    }

})