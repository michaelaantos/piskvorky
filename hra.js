let currentPlayer = 'circle';

const selectbutton = (evt) => {
  const btn = evt.target;
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    btn.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.querySelector('#current-player').src = 'pictures/cross.svg';
  } else {
    btn.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document.querySelector('#current-player').src = 'pictures/circle.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectbutton);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectbutton);
