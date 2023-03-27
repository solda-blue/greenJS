// a 태그 클릭했을 때
// li 태그 on 클래스 이름을 추가 + 다른 li 태그의 클래스는 이름을 제거

const btnList = document.querySelectorAll('.list .btn');

console.log(btnList);

// 버튼 중 하나를 선택해서 이벤트 추가
for(let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', onTab);
}

// on 클래스를 li에 추가하는 함수
function onTab(e) {
    // li에 있는 on을 제거하기 위해 btnList를 사용
    for(let i = 0; i < btnList.length; i++) {
        btnList[i].parentElement.classList.remove('on');
    }
    // a태그의 새로고침 제거하고 사용
    e.preventDefault();
    e.target.parentNode.classList.add('on');
}