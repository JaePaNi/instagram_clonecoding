'use strict'

/*navbar profile click시 menu list 표시,감추기*/
const navbarProfile = document.querySelector('.userInfo__user');
const navbarProfileMenu = document.querySelector('.userInfos__wrap');

navbarProfile.addEventListener('click', () => {
    navbarProfileMenu.classList.toggle('hidden');
});

/*story slide*/
const storyRightButton = document.querySelector('.section__story__arrowRight');
const story
const storySlider = document.querySelector('.section__story__slider');
const storyList = document.querySelectorAll('.story__lists');
const storyLength = document.querySelectorAll('.story__lists').length;
const storyWidth = 67;
const count = 4;
let valueCount = 0;

storyRightButton.addEventListener('click', () => {
    console.log('click');
    valueCount += storyWidth * count;
    for (let i = 0; i < storyLength; i++) {
        console.log(storyList[i]);
        storyList[i].style.left = `-${valueCount}px`;
        console.log(storyList[i].style.left);
    }
});