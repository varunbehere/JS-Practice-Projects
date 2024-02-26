const submitButton = document.querySelector('#submitButton');
const clearButton = document.querySelector('#clearButton');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Button Clicked');
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
  
    if (height === '' || isNaN(height) || height < 0 || weight === '' || isNaN(weight) || weight < 0) {
        alert('Please Enter a Valid Height & Weight');
    } else {
        const result = (weight / ((height * height) / 10000)).toFixed(2);
        if (result < 18.6) {
            alert(`Your BMI is ${result} and You are Underweight !!`);
        } else if (result >= 18.6 && result <= 24.9) {
            alert(`Your BMI is ${result} and it's between normal range !!`);
        } else {
            alert(`Your BMI is ${result} and Overweight !!`);
        }
    }
});

clearButton.addEventListener('click', function (e) {
    location.reload();
});
