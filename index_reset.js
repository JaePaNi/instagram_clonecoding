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


//post content 부분
/*postData 갯수만큼 post content 화면에 출력 하기*/
const selectSectionStory = document.querySelector('.section__story');
for (let i = 0; i < postData.length; i++) {
    selectSectionStory.insertAdjacentHTML('afterend', sectionContent);
}

/*content header 부분 사용자명, 사용자 위치 추가*/
const headerUserName = document.querySelectorAll('.header__userName');
const headerLocation = document.querySelectorAll('.header__location');
for (let i = 0; i < postData.length; i++) {
    headerUserName[i].innerHTML = postData[i].username;
    headerLocation[i].innerHTML = postData[i].localtion;
}

/*content 부분 images 추가 부분*/
const contentImages = document.querySelectorAll('.image__wrap');
const contentImage = document.querySelectorAll('.content__image');
const imageLeftButton = document.querySelectorAll('.content__image__arrorLeft');
const imageRightButton = document.querySelectorAll('.content__image__arrorRight');
const contentImageParent = document.querySelectorAll('.section__image__counts');


for (let i = 0; i < postData.length; i++) {
    let countTags = '';
    for (let j = 0; j < postData[i].images.length; j++) {
        //post마다 이미지 갯수만큼 추가
        contentImages[i].insertAdjacentHTML('beforeend', `<img src=${postData[i].images[j]} alt="content Image" class="content__image" />`);

        //사진 기본 1장보다 많으면 사진 갯수만큼 이미지 위치 확인을 위한 도트 만들기, 첫번째 도트는 action 활성화
        j === 0 ? countTags += '<div class="image__count action"></div>' : countTags += '<div class="image__count"></div>';
    }
    //이미지가 여러개일 때, 사진 오른쪽으로 넘기는 버튼 활성화
    if (postData[i].images.length > 1) imageRightButton[i].classList.remove('hidden');

    contentImageParent[i].insertAdjacentHTML("beforeend", countTags);
}

let move = 0;
/*이미지 우측으로 넘기기 버튼 클릭 시*/
const onClickArrowRightButton = (i) => {
    //사진 여러장일 때, 한장 넘기면 좌측으로 넘기는 버튼 활성화
    // move += 100;
    // console.log(move);
    imageLeftButton[i].classList.remove('hidden');
    for (let j = 0; j < contentImages[i].childNodes.length; j++) {
        if(j === 0) contentImages[i].childNodes[j].style.right = '100%';
        else console.log(parseInt(contentImages[i].childNodes[j].style.right = contentImages[i].childNodes[j].style.right.slice(0,3)));
        contentImages[i].childNodes[j].style.transition = "500ms";
    }
}

for (let i = 0; i < imageRightButton.length; i++) {
    imageRightButton[i].addEventListener('click', (e) => onClickArrowRightButton(i));
}


//사진 여러장일 때 오른쪽으로 넘기는 버튼 눌렀을때
const imageRightButtonClick = () => {
    // imageCount++;
    imageLeftButton.classList.remove('hidden');
    imageSlide += 100;

    if (imageLength === imageCount) imageRightButton.classList.add('hidden');
    for (let i = 0; i < imageLength; i++) {
        imageSelect[i].style.right = `${imageSlide}%`;
        imageSelect[i].style.transition = "500ms";
    }

    //사진 우측으로 옮길 때 이미지 위치 도트 활성화
    contentImageParent.children[imageCount - 2].classList.remove('action');
    contentImageParent.children[imageCount - 1].classList.add('action');
}

//사진 여러장일 때 왼쪽으로 넘기는 버튼 눌렀을때
const imageLeftButtonClick = () => {
    imageCount--;
    imageSlide -= 100;

    //사진 맨 우측에서 좌측으로 사진을 넘기면 우측으로 넘기는 버튼 다시 활성화
    if (imageLength !== imageCount) imageRightButton.classList.remove('hidden');
    //처음 이미지로 돌아오면 좌측으로 넘어가는 버튼 비활성화
    if (imageCount === 1) imageLeftButton.classList.add('hidden');

    for (let i = 0; i < imageLength; i++) {
        imageSelect[i].style.right = `${imageSlide}%`;
        imageSelect[i].style.transition = "500ms";
    }

    //사진 좌측으로 옮길 때 이미지 위치 도트 활성화
    contentImageParent.children[imageCount].classList.remove('action');
    contentImageParent.children[imageCount - 1].classList.add('action');
}

// imageRightButton.addEventListener('click', imageRightButtonClick);
// imageLeftButton.addEventListener('click', imageLeftButtonClick);

// /*content image slider & section content image count*/
// const imageLeftButton = document.querySelector('.content__image__arrorLeft');
// const imageRightButton = document.querySelector('.content__image__arrorRight');
// const imageLength = document.querySelectorAll('.content__image').length;
// const imageSelect = document.querySelectorAll('.content__image');
// let imageSlide = 0;
// let imageCount = 1;
//
// const contentImageParent = document.querySelector('.section__image__counts');
// // const selectImageCounts = document.querySelectorAll('.image__count');
// let countTags = '';
//
// //이미지가 여러개일 때, 사진 오른쪽으로 넘기는 버튼 활성화
// if (imageLength > 1) imageRightButton.classList.remove('hidden');
//
// //사진 기본 1장보다 많으면 사진 갯수만큼 이미지 위치 확인을 위한 도트 만들기
// for (let i = 0; i < imageLength - 1; i++) {
//     countTags += '<div class="image__count"></div>';
// }
// contentImageParent.insertAdjacentHTML("beforeend", countTags);
//
// //사진 여러장일 때 오른쪽으로 넘기는 버튼 눌렀을때
// const imageRightButtonClick = () => {
//     imageCount++;
//     imageLeftButton.classList.remove('hidden');
//     imageSlide += 100;
//
//     if (imageLength === imageCount) imageRightButton.classList.add('hidden');
//     for (let i = 0; i < imageLength; i++) {
//         imageSelect[i].style.right = `${imageSlide}%`;
//         imageSelect[i].style.transition = "500ms";
//     }
//
//     //사진 우측으로 옮길 때 이미지 위치 도트 활성화
//     contentImageParent.children[imageCount - 2].classList.remove('action');
//     contentImageParent.children[imageCount - 1].classList.add('action');
// }
//
// //사진 여러장일 때 왼쪽으로 넘기는 버튼 눌렀을때
// const imageLeftButtonClick = () => {
//     imageCount--;
//     imageSlide -= 100;
//
//     //사진 맨 우측에서 좌측으로 사진을 넘기면 우측으로 넘기는 버튼 다시 활성화
//     if (imageLength !== imageCount) imageRightButton.classList.remove('hidden');
//     //처음 이미지로 돌아오면 좌측으로 넘어가는 버튼 비활성화
//     if (imageCount === 1) imageLeftButton.classList.add('hidden');
//
//     for (let i = 0; i < imageLength; i++) {
//         imageSelect[i].style.right = `${imageSlide}%`;
//         imageSelect[i].style.transition = "500ms";
//     }
//
//     //사진 좌측으로 옮길 때 이미지 위치 도트 활성화
//     contentImageParent.children[imageCount].classList.remove('action');
//     contentImageParent.children[imageCount - 1].classList.add('action');
// }
//
// imageRightButton.addEventListener('click', imageRightButtonClick);
// imageLeftButton.addEventListener('click', imageLeftButtonClick);


/*like bookmark button*/
const unlikeButton = document.querySelector('.button__unlike');
const likeButton = document.querySelector('.button__like');
const unBookmark = document.querySelector('.button__unbookmark');
const bookmark = document.querySelector('.button__bookmark');

/*좋아요 버튼 눌렀을 때*/
const onClickLike = () => likeButton.classList.remove('hidden');

/*좋아요 버튼 취소했을 때*/
const onClickUnlike = () => likeButton.classList.add('hidden');

/*북마크 버튼 눌렀을 때*/
const onClickBookmark = () => bookmark.classList.remove('hidden');

/*북마크 버튼 취소했을 때*/
const onClickUnBookmark = () => bookmark.classList.add('hidden');

unlikeButton.addEventListener('click', onClickLike);
likeButton.addEventListener('click', onClickUnlike);
unBookmark.addEventListener('click', onClickBookmark);
bookmark.addEventListener('click', onClickUnBookmark);
