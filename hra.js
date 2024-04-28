import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const selectAll = document.querySelectorAll('.game__box--square');

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
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload();
    }, 1000);
  } else if (vitez === 'tie') {
    setTimeout(() => {
      alert('Hra skončila remízou');
      location.reload();
    }, 1000);
  } else if (vitez === null && currentPlayer === 'cross') {
    suggestNextMove();
  }
};

const suggestNextMove = async () => {
  const herniPole = [...selectAll].map(changeElm);

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: herniPole,
        player: 'x',
      }),
    },
  );

  const data = await response.json();
  const { x, y } = data.position;
  const index = selectAll[x + y * 10];

  index.click();
};

const selectButton = async (evt) => {
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

selectAll.forEach((button) => {
  button.addEventListener('click', selectButton);
});
