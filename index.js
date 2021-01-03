'use strict'
//navbar 부분
/*navbar profile click시 menu list 표시,감추기*/
const navbarProfile = document.querySelector('.userInfo__user');
const navbarProfileMenu = document.querySelector('.userInfos__wrap');

navbarProfile.addEventListener('click', () => {
    navbarProfileMenu.classList.toggle('hidden');
});

//story부분
/*content story slide*/
const storyRightButton = document.querySelector('.section__story__arrowRight');
const storyLeftButton = document.querySelector('.section__story__arrowLeft');
const storyList = document.querySelectorAll('.story__lists');
const storyLength = document.querySelectorAll('.story__lists').length;
const storyWidth = 67;
const slideCount = 4;
let storyCount = 0;
let valueCount = 0;

const storyRightButtonClick = () => {
    storyCount += 1;
    if (storyCount > 0) storyLeftButton.classList.remove('hidden');
    valueCount += storyWidth * slideCount;
    for (let i = 0; i < storyLength; i++) {
        storyList[i].style.transition = "300ms";
        storyList[i].style.left = `-${valueCount}px`;
        storyList[i].style.left = `-${valueCount}px`;
    }
}

const storyLeftButtonClick = () => {
    storyCount -= 1;
    if (storyCount === 0) storyLeftButton.classList.add('hidden');
    valueCount -= storyWidth * slideCount;
    for (let i = 0; i < storyLength; i++) {
        storyList[i].style.transition = "300ms";
        storyList[i].style.left = `-${valueCount}px`;
    }
}

storyRightButton.addEventListener('click', storyRightButtonClick);
storyLeftButton.addEventListener('click', storyLeftButtonClick);


//content 부분
/*content header 부분 사용자 이름 및 위치 추가*/
const selectSectionWrap = document.querySelector('.section__wrap');
let tags = '';
for (const i in postData) {
    tags = `
    <div class="section__content">
        <div class="content__header">
            <div class="content__header__wrap">
                <div class="header__userImage">
                    <img class="header__userImage" src="./images/profile.jpg" alt="user profile"/>
                </div>
                <div class="header__wrap">
                    <div class="header__userNamelocation">
                        <div class="header__userName">${postData[i].username}</div>
                        <div class="header__location">${postData[i].localtion}</div>
                    </div>
                    <div class="header__menu"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
        </div>
    </div>
    `;
    selectSectionWrap.insertAdjacentHTML('beforeend', tags);
}


//section content images add
for (const i in postData) {
    const selectSectionContent = document.querySelectorAll('.section__content');
    tags = `
    <div class="content__images">
        <div class="content__image__wrap">
            ${postData[i].images.map(e => `<img src=${e} alt="content Image" class="content__image">`)}
        </div>
        
        <div class="content__image__arrorLeft hidden"><i class="fas fa-arrow-circle-left"></i></div>
        <div class="content__image__arrorRight hidden"><i class="fas fa-arrow-circle-right"></i></div>
    </div>
    `;
    selectSectionContent[i].insertAdjacentHTML('beforeend', tags);
}

//section content images count add
for (const i in postData) {
    const selectSectionContent = document.querySelectorAll('.section__content');
    const get = postData[i].images.map((value, index) => index === 0 ?
            '<div class="image__count action"></div>' : '<div class="image__count"></div>'
        )
    tags = `
     <div class="section__image__counts">
        ${get.map(data => data)}
    </div>
    `;

    //map기능 사용하면 ','로 구분되어 삭제하기 위한 작업
    postData[i].images.map(() => tags = tags.replace(',',''));

    selectSectionContent[i].insertAdjacentHTML('beforeend', tags);
}