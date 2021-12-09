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
  console.log(decimal);
  const newDecimal = () => {
    if (decimal >= 0.875) {
      return 0.875;
    } else if (decimal >= 0.75) {
      return 0.75;
    } else if (decimal >= 0.625) {
      return 0.625;
    } else if (decimal >= 0.5) {
      return 0.5;
    } else if (decimal >= 0.375) {
      return 0.375;
    } else if (decimal >= 0.25) {
      return 0.25;
    } else if (decimal >= 0.125) {
      return 0.125;
    }
    return 0;
  };

  console.log(newDecimal());
  console.log(number);
  return Math.floor(number) + newDecimal();
}
