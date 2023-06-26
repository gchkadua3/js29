const form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const cardNumber = form.cardNumber.value;
    const firstName = form.firstName.value;
    const dateNumber = form.dateNumber.value
    const cvc = form.cvc.value;
    const expNumber = form.dateNumber.value;
    const expNumber2 = form.dateNumber2.value;
   
    const cardNumberInput = document.getElementById('cardNumber');
    const firstNameInput = document.getElementById('firstName');
    const cvcInp = document.getElementById('cvcStyle');
    const expDateInput = document.getElementById('dateNumber');
    const expDateInput2 = document.getElementById('dateNumber2');


    const holderForCrd = document.querySelector('.holderForCrd');
    const holderForName = document.querySelector('.holderForName')
    const holderForCvc = document.querySelector('.holderForCvc');
    const holderForExpDate = document.querySelector('.holderForExpDate');
    

    const patternForCardNumber = /^\d{16}$/;
    const patternForFirstName = /^[A-Za-z\s'-]+$/;
    const cvcPattern = /^\d{3}$/;
    const expDatePattern = /^\d{2}$/;
  
    if(patternForCardNumber.test(cardNumber)){
        // Cardnumber is valid
        cardNumberInput.style.border = '1px solid green'
        holderForCrd.textContent = '';

        // Cardnumber is not valid
    } else {
        cardNumberInput.style.border = '1px solid red'
        holderForCrd.textContent = 'Card Number should only contain numbers and should be 16 characters long'
    }

    if(patternForFirstName.test(firstName)) {
        // Name is Valid 
        firstNameInput.style.border = '1px solid green';
        holderForName.textContent = '';
    } else {
        firstNameInput.style.border = '1px solid red'
        holderForName.textContent = 'Type a Proper Name'
    }

    if(cvcPattern.test(cvc)){
        cvcInp.style.border = '1px solid green'
        holderForCvc.textContent = ''
    } else {
        cvcInp.style.border = '1px solid red'
        holderForCvc.textContent = 'Type a proper CVC'
    }

    if(expDatePattern.test(expNumber) && expDatePattern.test(expNumber2)){
        expDateInput.style.border = '1px solid green'
        expDateInput2.style.border = '1px solid green'
        holderForExpDate.textContent = ''
    } else {
        expDateInput.style.border = '1px solid red'
        expDateInput2.style.border = '1px solid red'
        holderForExpDate.textContent = 'Type A valid Exp Date'
    }

})
