const selectStorySlider = document.querySelector('.section__story__slider');
const createStoryList = () => {
    sliderData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('story__lists');
        div.innerHTML = `
            <div class="story__list">
                <div class="story__image">
                    <img class="story__userimage" src=${data.image} alt="user profile">
                </div>
                <div class="story__userName">${data.userName}</div>
            </div>
        `
        selectStorySlider.appendChild(div);
    });
}

let storyMove = 0;
const sectionStoryArrowRight = document.querySelector('.section__story__arrowRight');
const sectionStoryArrowLeft = document.querySelector('.section__story__arrowLeft');
sectionStoryArrowRight.addEventListener('click', () => {
    const selectStoryList = document.querySelectorAll('.story__lists');
    storyMove += 100;
    selectStoryList.forEach((data, index) => {
        index === 0 && sectionStoryArrowLeft.classList.remove('hidden');
        selectStoryList[index].style.transition = "300ms";
        selectStoryList[index].style.right = `${storyMove}%`
    });
});

sectionStoryArrowLeft.addEventListener('click', () => {
    const selectStoryList = document.querySelectorAll('.story__lists');
    storyMove -= 100;
    selectStoryList.forEach((data, index) => {
        storyMove === 0 && sectionStoryArrowLeft.classList.add('hidden');
        selectStoryList[index].style.transition = "300ms";
        selectStoryList[index].style.right = `${storyMove}%`
    });
});

const selectSectionWrap = document.querySelector('.section__wrap');
const createContentHeader = () => {
    postData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('section__content');
        div.innerHTML = `
            <div class="content__header__wrap">
                <div class="header__userImage">
                    <img class="header__userImage" src="${data.userProfile}" alt="user profile"/>
                </div>
                <div class="header__wrap">
                    <div class="header__userNamelocation">
                        <div class="header__userName">${data.username}</div>
                        <div class="header__location">${data.localtion}</div>
                    </div>
                    <div class="header__menu"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
        `;
        selectSectionWrap.append(div);
    });
}

const createContentImages = () => {
    const selectSectionContent = document.querySelectorAll('.section__content');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('content__images');
        div.innerHTML = `
            <div class="content__image__wrap"></div>
            <div class="content__image__arrorLeft hidden"><i class="fas fa-arrow-circle-left"></i></div>
            <div class="content__image__arrorRight hidden"><i class="fas fa-arrow-circle-right"></i></div>
        `;
        selectSectionContent[index].appendChild(div);
    });
}

const insertImagesAndCount = () => {
    const selectContentImageWrap = document.querySelectorAll('.content__image__wrap');
    const selectSectionContent = document.querySelectorAll('.section__content');
    const imageArrowRight = document.querySelectorAll('.content__image__arrorRight');
    postData.forEach((data, index) => {
        postData[index].images.forEach((data) => {
            const img = document.createElement('img');
            img.classList.add('content__image');
            img.src = data;
            selectContentImageWrap[index].appendChild(img);
        });

        const div = document.createElement('div');
        for (let i = 0; i < postData[index].images.length; i++) {
            div.classList.add('section__image__counts');
            div.innerHTML += i === 0 ? '<div class="image__count action"></div>' : '<div class="image__count"></div>';
        }
        selectSectionContent[index].appendChild(div);
        //이미지 여러장 일 때 화면을 넘길 수 있는 버튼 활성화
        if (postData[index].images.length > 1) imageArrowRight[index].classList.remove('hidden');
    });
}


const imageArrowClickAndCountMove = () => {
    let move = 0;
    const imageArrowRight = document.querySelectorAll('.content__image__arrorRight');
    const imageArrowLeft = document.querySelectorAll('.content__image__arrorLeft');
    const selectImages = document.querySelectorAll('.content__image__wrap');
    const selectImageCounts = document.querySelectorAll('.section__image__counts');

    imageArrowRight.forEach((data, index) => {
        imageArrowRight[index].addEventListener('click', (data) => {

            // console.log(selectImageCounts[index].childNodes[0]);

            //우측으로 사진 넘기면 좌측으로 사진넘기기 위한 버튼 활성화
            imageArrowLeft[index].classList.remove('hidden');

            //이미지 카운트 체크를 위한 변수
            const imageCount = selectImageCounts[index];
            selectImages[index].childNodes.forEach((data, index) => {
                //콘텐츠 사진이 여러장 일때, 넘기기 위한 코드
                //여러 콘텐츠의 각각 right값을 저장할 수 없어 단순히 style.right값을 가져와 작업
                data.style.right !== '' && (move = parseInt(data.style.right.slice(0, 3)) + 100);
                data.style.right === '' && (move = 100);
                data.style.transition = '300ms';
                data.style.right = `${move}%`;

                //move값을 이용해 위치 변화
                imageCount.childNodes[(move / 100) - 1].classList.remove('action');
                imageCount.childNodes[move / 100].classList.add('action');
            });
            //사진 최대 갯수까지 넘어가면 우측으로 넘어가는 버튼 비활성화
            if (move + 100 === postData[index].images.length * 100)
                imageArrowRight[index].classList.add('hidden');

        });
    });

    imageArrowLeft.forEach((data, index) => {
        imageArrowLeft[index].addEventListener('click', (data) => {

            //이미지 카운트 체크를 위한 변수
            const imageCount = selectImageCounts[index];
            selectImages[index].childNodes.forEach((data, index) => {
                //오른쪽으로 넘긴 사진 왼쪽으로 넘기기 위한 코드
                data.style.right !== '' && (move = parseInt(data.style.right.slice(0, 3)) - 100);
                data.style.transition = '300ms';
                data.style.right = `${move}%`;

                //move값을 이용해 위치 변화
                imageCount.childNodes[(move / 100) + 1].classList.remove('action');
                imageCount.childNodes[move / 100].classList.add('action');
            });
            //사진 맨 앞장으로 가면 좌측 버튼 비활성화
            if (move === 0) imageArrowLeft[index].classList.add('hidden');
        });
    });
}

const createBottom = () => {
    const selectSectionContent = document.querySelectorAll('.section__content');
    postData.forEach((data, index) => {
        const div_1 = document.createElement('div');
        const div_2 = document.createElement('div');
        div_1.classList.add('section__bottom');
        div_2.classList.add('section__bottom__wrap');
        div_1.appendChild(div_2);
        selectSectionContent[index].appendChild(div_1);
    });
}

const bottomButtons = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__buttons');
        div.innerHTML = `
            <div class="button__unlike"><i class="far fa-heart"></i></div>
            <div class="button__like hidden"><i class="fas fa-heart"></i></div>
            <div class="button__comments"><i class="far fa-comment"></i></div>
            <div class="button__share"><i class="far fa-share-square"></i></div>
            <div class="button__unbookmark"><i class="far fa-bookmark"></i></div>
            <div class="button__bookmark hidden"><i class="fas fa-bookmark"></i></div>
        `;
        selectSectionBottomWrap[index].appendChild(div);
    });
}

const likeButtonClick = () => {
    const unBookmarkButtons = document.querySelectorAll('.button__unbookmark');
    const bookMarkButtons = document.querySelectorAll('.button__bookmark');
    unBookmarkButtons.forEach((data, index) => {
        unBookmarkButtons[index].addEventListener('click', () => {
            bookMarkButtons[index].classList.remove('hidden');
        });
    });

    bookMarkButtons.forEach((data, index) => {
        bookMarkButtons[index].addEventListener('click', () => {
            bookMarkButtons[index].classList.add('hidden');
        });
    });
}

const bookMarkButtonClick = () => {
    const unLikeButtons = document.querySelectorAll('.button__unlike');
    const likeButtons = document.querySelectorAll('.button__like');
    unLikeButtons.forEach((data, index) => {
        unLikeButtons[index].addEventListener('click', () => {
            likeButtons[index].classList.remove('hidden');
        });
    });

    likeButtons.forEach((data, index) => {
        likeButtons[index].addEventListener('click', () => {
            likeButtons[index].classList.add('hidden');
        });
    });
}


const bottomLikeCount = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__likeCount');
        div.innerHTML = `
            <span>${data.likeCount > 2 ? "여러" : data.likeCount} 명이 좋아합니다.</span>
        `;
        selectSectionBottomWrap[index].appendChild(div);
    });
}

const bottomComment = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__comment');
        div.innerHTML = `
            <span class="comment__userName">${data.username}</span>
            <span class="comment__content">${data.userComment}</span>
            <span class="comment__more hidden">더 보기</span>
        `;
        selectSectionBottomWrap[index].appendChild(div);
    });
}

const bottomReplyList = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__replyLists');
        selectSectionBottomWrap[index].appendChild(div);
    });

    const selectBottomReply = document.querySelectorAll('.bottom__replyLists');
    postData.forEach((data, index) => {
        postData[index].reply.forEach((data) => {
            const div = document.createElement('div');
            div.classList.add('bottom__reply');
            div.innerHTML += `
                <span class="reply__userName">${data.replyUserName}</span>
                <span class="reply__userComment">${data.replyUserComment}</span>
            `;
            selectBottomReply[index].appendChild(div);
        });
    });
}

const bottomTime = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__time');
        div.innerHTML = `10분전`;
        selectSectionBottomWrap[index].appendChild(div);
    });
}

const bottomReplyInput = () => {
    const selectSectionBottomWrap = document.querySelectorAll('.section__bottom__wrap');
    postData.forEach((data, index) => {
        const div = document.createElement('div');
        div.classList.add('bottom__replyInput');
        div.innerHTML = `
            <div class="replyInput__input__wrap">
                <input type="text" class="reply__input" placeholder="댓글 달기...">
            </div>
            <div class="replyInput__regist__wrap">
                <span class="reply__regist">게시</span>
            </div>
        `;
        selectSectionBottomWrap[index].appendChild(div);
    });
}

const inputReply = () => {
    const selectReplyInput = document.querySelectorAll('.reply__input');
    const selectReplyRegist = document.querySelectorAll('.reply__regist');
    const selectBottomReply = document.querySelectorAll('.bottom__replyLists');

    selectReplyRegist.forEach((data, index) => {
        selectReplyRegist[index].addEventListener('click', () => {
            selectBottomReply[index].innerHTML = '';
            selectReplyInput[index].value !== '' &&
            postData[index].reply.push({
                replyUserName: 'jaepani5015', replyUserComment: selectReplyInput[index].value
            });
            selectReplyInput[index].value = '';

            //입력받은 댓글 까지 포함시켜 댓글 리로딩
            postData[index].reply.forEach((data) => {
                const div = document.createElement('div');
                div.classList.add('bottom__reply');
                div.innerHTML += `
                        <span class="reply__userName">${data.replyUserName}</span>
                        <span class="reply__userComment">${data.replyUserComment}</span>
                    `;
                selectBottomReply[index].appendChild(div);
            });
        });
    });
}

createStoryList();
createContentHeader();
createContentImages();
insertImagesAndCount();
createBottom();
bottomButtons();
bottomLikeCount();
bottomComment();
bottomReplyList();
bottomTime();
bottomReplyInput();
likeButtonClick();
bookMarkButtonClick();
inputReply();
imageArrowClickAndCountMove();