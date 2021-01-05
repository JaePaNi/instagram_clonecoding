function makeid2() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const sliderData = [];
for (let i = 0; i < 10; i++) {
    const randomName = makeid2();
    sliderData.push(
        {image: './images/profile.jpg', userName: randomName},
        {image: './images/post.jpg', userName: randomName},
        {image: './images/profile.jpg', userName: randomName},
        {image: './images/post2.jpg', userName: randomName},
        {image: './images/post.jpg', userName: randomName},
        {image: './images/post2.jpg', userName: randomName},
    );
}

const randomName = makeid2();
const randomName2 = makeid2();
const randomName3 = makeid2();
const postData = [
    {
        username: randomName,
        localtion: '부천시',
        userProfile: './images/profile.jpg',
        images: ['./images/profile.jpg', './images/post.jpg', './images/post2.jpg'],
        likeCount: 1,
        userComment: "사용자 작성 글 입니다. #해시태그1 #해시태그2",
        reply: [
            {replyUserName: randomName2, replyUserComment: `@${randomName} 댓글입니다.`},
            {replyUserName: randomName3, replyUserComment: `@${randomName} 댓글올린다.`},
        ]
    },{
        username: randomName2,
        localtion: '서울시',
        userProfile: './images/profile.jpg',
        images: ['./images/post2.jpg'],
        likeCount: 3,
        userComment: "사용자 작성 글 입니다. #해시태그1 #해시태그2",
        reply: [
            {replyUserName: 'jaepani5015', replyUserComment: '@JaePaNi 댓글입니다.'},
            {replyUserName: 'jaehwan0917', replyUserComment: '@JaePaNi 댓글올린다.'},
        ]
    },{
        username: randomName3,
        localtion: '제주',
        userProfile: './images/profile.jpg',
        images: ['./images/post.jpg', './images/profile.jpg', './images/post2.jpg'],
        likeCount: 2,
        userComment: "사용자 작성 글 입니다. #해시태그1 #해시태그2",
        reply: [
            {replyUserName: 'jaepani5015', replyUserComment: '@JaePaNi 댓글입니다.'},
            {replyUserName: 'jaehwan0917', replyUserComment: '@JaePaNi 댓글올린다.'},
        ]
    }
];


const asideData = {
    user: {userId: 'jaehwan0917', userNickname: 'JaePaNi', userProfile: './images/profile.jpg'},
    recommend: [
        {userId: 'KimJaehwan', whoFollow: 'coffee', userProfile: './images/post2.jpg'},
        {userId: 'KimJaehwan', whoFollow: 'coffee', userProfile: './images/post2.jpg'},
        {userId: 'KimJaehwan', whoFollow: 'coffee', userProfile: './images/post2.jpg'},
        {userId: 'KimJaehwan', whoFollow: 'coffee', userProfile: './images/post2.jpg'},
        {userId: 'KimJaehwan', whoFollow: 'coffee', userProfile: './images/post2.jpg'},
    ]
}