// 사진을 클릭 했을 때 (이벤트)
// lightbox의 이미지가 클릭한 이미지로 바뀜
// lightbox의 display가 block으로 바뀜
// 다시 클릭했을 때 display가 none으로 바뀜 (이벤트)

// 사진을 클릭했을 때 사진이 여러개이므로 배열로 가져옴
const pics = document.querySelectorAll('.pic');
const lightBox = document.querySelector('.light-box');
const box = document.querySelector('.box');

box.addEventListener('click', function(e) {
    if(e.target.getAttribute('data-src')) {
        showLightBox(e);
    }
})

// 사진 하나에 이벤트를 먼저 확인한 후 반복문으로 추가
// for (let i = 0; i < pics.length; i++) {
//     pics[i].addEventListener('click', showLightBox);
// }

// 사진을 클릭했을 때 라이트 박스가 보임
function showLightBox(e) {
    let targetImg = e.target.getAttribute('data-src');
    let image = document.getElementById('image');
    console.log(targetImg);
    image.setAttribute('src', targetImg);
    lightBox.style.display = 'block';
}

lightBox.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) {
        lightBox.style.display = 'none';
    }
})