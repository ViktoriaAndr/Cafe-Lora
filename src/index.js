import './style.css';

console.log('funguju!');

const dropDown = document.querySelector('nav');

const toggleNav = () => {
  dropDown.classList.toggle('nav-closed');
};

const hamburger = document.querySelector('#nav-btn');

hamburger.addEventListener('click', toggleNav);

const closeNav = () => {
  dropDown.classList.add('nav-closed');
};

const linkList = document.querySelectorAll('a');

for (let i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener('click', closeNav);
}
