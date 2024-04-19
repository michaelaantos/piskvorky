import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

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
  checkGameStatus();
};

const selectAll = document.querySelectorAll('.game__box--square');
selectAll.forEach((button) => {
  button.addEventListener('click', selectbutton);
});

const changeElm = (htmlButton) => {
  if (htmlButton.classList.contains('board__field--cross')) {
    return `x`;
  } else if (htmlButton.classList.contains('board__field--circle')) {
    return `o`;
  } else {
    return `_`;
  }
};

const checkGameStatus = () => {
  const herniPole = [...selectAll].map(changeElm);
  const vitez = findWinner(herniPole);

  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      console.log('funguje');
      alert(`Vyhrál hráč se symbolem ${vitez}.`);

      location.reload();
    }, 1000);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert('Hra skončila remízou');
      location.reload();
    }, 1000);
  }
};
