const keys = [
  '7',
  '8',
  '9',
  'C',
  '4',
  '5',
  '6',
  '+',
  '1',
  '2',
  '3',
  '-',
  '.',
  '0',
  '*',
  '/',
  '=',
];

const screen = document.querySelector('.screen');
const keypads = document.querySelector('.keypads');

keys.forEach((key) => {
  const button = document.createElement('button');
  button.innerHTML = key;
  button.addEventListener('click', () => {
    if (key === '=') {
      if (screen.innerHTML !== '') screen.innerHTML = eval(screen.innerHTML);
    } else if (key === 'C') {
      screen.innerHTML = '';
    } else {
      screen.innerHTML += key;
    }
  });
  keypads.appendChild(button);
});
