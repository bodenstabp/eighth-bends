const button = document.querySelector('button');
const displayedNumber = document.querySelector('.result');

button.addEventListener('click', e => {
  e.preventDefault();
  const distance = document.querySelector('#measurement').value;
  const product = multiplier(distance, 1.414);
  displayedNumber.innerHTML = roundNumber(product);
});

function multiplier(distance, multiplier) {
  const dist = +distance;
  return dist * multiplier;
}

function roundNumber(number) {
  const decimal = number - Math.floor(number);
  console.log(decimal);
  const newDecimal = () => {
    if (decimal >= 0.9375) {
      return 1;
    } else if (decimal >= 0.875 || decimal >= 0.8125) {
      return 0.875;
    } else if (decimal >= 0.75 || decimal >= 0.6875) {
      return 0.75;
    } else if (decimal >= 0.625 || decimal >= 0.5625) {
      return 0.625;
    } else if (decimal >= 0.5 || decimal >= 0.4375) {
      return 0.5;
    } else if (decimal >= 0.375 || decimal >= 0.3125) {
      return 0.375;
    } else if (decimal >= 0.25 || decimal >= 0.1875) {
      return 0.25;
    } else if (decimal >= 0.125 || decimal >= 0.0625) {
      return 0.125;
    }
    return 0;
  };

  return Math.floor(number) + newDecimal();
}
