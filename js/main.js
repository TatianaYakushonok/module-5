'use strict';

const checkingString = (el, str) => {
  if (str === 'del') el.lastChild.remove();
  if (str === 'clear') el.replaceChildren();
  if (str === null || str === 'exit') return null;

  if (str === 'del' || str === 'clear') {
    return false;
  }
  if (!isNaN(str)) {
    alert('Вы не ввели текст. Введите текст для пункта списка');
    return false;
  }

  return true;
};

const addStr = () => {
  const str = prompt('Введите текст для пункта списка');

  return str;
};

const createListItem = (str) => {
  const li = document.createElement('li');
  li.textContent = str;
  return li;
};

const createElement = () => {
  const ul = document.querySelector('.list');
  let str = addStr();
  const checkStr = checkingString(ul, str);

  if (checkStr && str) {
    str = str.trim();
    const li = createListItem(str);
    ul.append(li);
  }
  if (checkStr === null) {
    return;
  }

  return createElement();
};

createElement();
