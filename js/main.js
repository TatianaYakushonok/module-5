'use strict';

const ul = document.createElement('ul');
document.querySelector('.container').append(ul);

const checkingString = (el, str) => {
  if (str === 'del') el.lastChild.remove();
  if (str === 'clear') el.replaceChildren();
  if (str === null || str === 'exit') return null;

  if (!isNaN(str) || str === 'del' || str === 'clear') {
    return false;
  }

  return true;
};

const addStr = () => {
  const str = prompt('Введите текст для пункта списка');
  return str;
};

const createElement = () => {
  const str = addStr();
  const checkStr = checkingString(ul, str);

  if (checkStr) {
    ul.innerHTML += `<li>${str}</li>`;
  }
  if (checkStr === null) {
    return;
  }

  return createElement();
};

createElement();
