const button = document.querySelector('button');
const displayedNumber = document.querySelector('.result');

// round answer to nearest eighth

button.addEventListener('click', e => {
  e.preventDefault();

  const distance = document.querySelector('#measurement').value;
  const product = +distance * 1.414;
  displayedNumber.innerHTML = roundNumber(product);
});

function roundNumber(number) {
  const decimal = number - Math.floor(number);
  const newDecimal = () => {
    if (decimal >= 0.9375) {
      return 1;
    } else if (decimal >= 0.875) {
      return 0.875;
    } else if (decimal >= 0.8125) {
      return 0.875;
    } else if (decimal >= 0.75) {
      return 0.75;
    } else if (decimal >= 0.6875) {
      return 0.75;
    } else if (decimal >= 0.625) {
      return 0.625;
    } else if (decimal >= 0.5625) {
      return 0.625;
    } else if (decimal >= 0.5) {
      return 0.5;
    } else if (decimal >= 0.4375) {
      return 0.5;
    } else if (decimal >= 0.375) {
      return 0.375;
    } else if (decimal >= 0.3125) {
      return 0.375;
    } else if (decimal >= 0.25) {
      return 0.25;
    } else if (decimal >= 0.1875) {
      return 0.25;
    } else if (decimal >= 0.125) {
      return 0.125;
    } else if (decimal >= 0.0625) {
      return 0.125;
    }
    return 0;
  };

  return Math.floor(number) + newDecimal();
}
