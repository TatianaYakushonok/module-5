'use strict';

const ads = document.querySelector('.ads');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const content = document.querySelectorAll('.content');
const propsList = document.querySelectorAll('.props__list');
const propsItem = document.querySelectorAll('.props__item');
const propsItemTwo = document.querySelectorAll('.props__item_two');
const itemTitle = document.querySelectorAll('.item__title');

ads.remove();
items.append(item[1], item[2], item[3], item[0], item[4], item[5]);
content[4].append(itemTitle[4], propsList[3]);
propsItem[2].after(propsItem[14]);
propsList[2].before(itemTitle[3]);
propsList[5].before(itemTitle[1]);
itemTitle[2].textContent = 'This и прототипы объектов';
itemTitle[2].after(propsList[4]);
Array.from(propsItemTwo).map((item, i) => {
  if (i === 8 || i === 9) propsList[2].append(item);
});
