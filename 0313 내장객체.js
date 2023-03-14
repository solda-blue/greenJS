// 내장 객체 - 자바스크립트 내에 미리 작성된 객체
// 객체를 생성하면 미리 작성된 메소드를 사용할 수 있다

// Array (배열)
let arr = ['HTML', 'CSS', 'JavaScript'];
// join() 문자열로 연견
console.log(arr.join(" / "));

// 내장 객체의 메소드를 찾기 위해 mbn과 같은 사이트 사용
// prototype. 객체를 생성하고 객체를 통해서 사용할 수 있는 메소드
// prototype이 없는 메소드 : 생성자함수 이름을 통해서 사용하는 메소드
// 자주 사용하는 객체는 생성자 함수 형태를 안 쓰기도 한다
// 대표적인 예 : Array [] >> new Array()로도 작성 가능

let arrayTest = new Array(1, 2, 3);
console.log(arrayTest);

// concat() : 두 배열의 결합 => 두개의 배열을 합해서 return
let arrConcat = arr.concat(["일", "이", "삼"]);
console.log(arrConcat);
console.log(arr);

// 기초 자료형의 복사 
let a = 1;
let b = a; // 대입연산자 사용해서 복사
b++; // b는 별개의 값을 갖는다 
console.log(a, b);

// 배열 값의 복사
// 배결의 경우 , 요소의 값을 여러개 가지고 있기 때문에 주소 사용
// 배열의 변수 이름에는 주소 값이 들어가 있다
// (변수의 이름으로 요소들이 출력되는 것은 자바스크립트에서 제공)
// 그래서 변수를 할당하면 배열의 요소가 들어가는 것이 아닌, 주소전달

// 객체는 객체가 담긴 변수이름으로 복사할 수 없다
// 메소드나 그 안에 있는 값을 꺼내쓰는 연산자를 이용해서 복사
let arrCopy1 = arr;
arrCopy1.push("새로운언어");
console.log(arr);
console.log(arrCopy1);

// 1) 메소드를 이용해서 복사
let arrCopy2 = arr.concat();
arrCopy2.push('React');
console.log(arrCopy2);
console.log(arr);

// 2) 값을 꺼내쓰는 연산자를 이용해서 복사
// ... : 스프레드 연산자 => 객체나 배열의 값을 꺼내서 반환
let arrCopy3 = [...arr];
arrCopy3.push('React');
console.log(arr);
console.log(arrCopy3);

// splice() : 지정된 배열의 값을 삭제하거나 추가
arr.splice(1, 1); // arr의 값을 직접 바꿈
console.log(arr);
// push(), pop() => arr의 값을 직접 바꿈
arr.pop();
console.log(arr);

// Array 객체 실습
// Array 메소드의 sort를 이용하여 아래 배열값을 순서대로 나열하세요
let numArr = [3,6,7,2,7,3,1];
console.log(numArr.sort());

// Array 메소드의 pop을 이용하여 consol에 전부 출력하세요
// 삭제한 마지막 요소를 return 함
let flowerArr = ['튤립', "장미", "국화"];
let pop1 = flowerArr.pop();
console.log(pop1);
let pop2 = flowerArr.pop();
console.log(pop2);
let pop3 = flowerArr.pop();
console.log(pop3);

// String : 문자열 / String은 배열과 유사하다
let str = "문자열";
// chatAt() => 문자열의 인덱스 위치에 있는 값을 가져옴
console.log(str.charAt(0));
console.log(str[1]);

// match() : 지정된 문자와 동일한 문자
// 값이 있으면 그 값을 return 하고 없으면 null
console.log(str.match('향'));
console.log(str.search('자')); // search는 인덱스를 찾아줌 없으면 -1

// replace(a, b) : a의 값을 b로 대체
console.log(str.replace('자', '석'));

// split() : 문자열을 자르는 메소드
// return 값으로 배열을 돌려준다
console.log(str.split('자'));
console.log(Array.isArray(str.split('자')));

// String 객체 실습
// charAt(n)과 replace()를 이용하여 홍길동의 가운데 값을 *로 바꿔주세요
let name1 = '홍길동';
let star = name1.charAt(1);
console.log(star);
console.log(name1.replace('길', '*'));

let startTime = new Date();
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let endTime = new Date();
console.log(endTime-startTime)

// Number : 숫자와 관련된 객체
// Number로 접근해서 쓰는 메소드와 속성이 있고 객체를 만들어서 접근하는 메소드가 있다
console.log(Number.isNaN(NaN));
let num = 10.5;
// toFixed()는 숫자 값의 소수점을 어디까지 보여줄지 정함
console.log(num.toFixed(1));

// 래퍼객체
// 숫자, boolean, 문자열과 같은 기초자료형은
// 메소드를 사용할 수 없지만 객체의 메소드를 사용하기위해
// 자바스크립트에서 메소드를 사용하기전에 객체로 만들어서 메소드에 접근한다

// 배열 갹체
// toString : 객체의 담은 변수이름을 호출했을 때 출력할 문자열을 작성
let arrString = [1, 2, 3, 4];
console.log(arrString.toString());
let obj = {
    name : '객체',
    value : '값',
    // toString 메소드를 작성하면 객체의 변수이름을 작성했을 때
    // 리턴 할 내용을 정할 수 있다
    toString : function() {return this.value}
};
console.log(obj);