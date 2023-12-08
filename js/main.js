'use strict';

const ads = document.querySelector('.ads');
const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');

const itemFourList = itemFour.querySelector('.props__list');
const itemTwoList = itemTwo.querySelector('.props__list');
const itemSixList = itemSix.querySelector('.props__list');
const itemFiveList = itemFive.querySelector('.props__list');
const itemThreeList = itemThree.querySelector('.props__list');

const propsItemFour = itemFourList.querySelector(
  '.props__item_four:nth-child(3)',
);
const propsItemTwo = itemTwo.querySelector('.props__item_four');
const propsItemSix = itemSix.querySelectorAll('.props__item_two');

const itemFiveTitle = itemFive.querySelector('h2');
const itemTwoTitle = itemTwo.querySelector('h2');
const itemSixTitle = itemSix.querySelector('h2');
const itemThreeTitle = itemThree.querySelector('h2');

ads.remove();
items.append(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix);
propsItemFour.after(propsItemTwo);
itemTwoList.before(itemFiveTitle);
itemSixList.before(itemTwoTitle);
itemFiveList.before(itemSixTitle);
itemThreeTitle.textContent = 'This и прототипы объектов';
itemThreeTitle.after(itemFiveList);
itemSixTitle.after(itemThreeList);
Array.from(propsItemSix).map((item) => itemTwoList.append(item));
