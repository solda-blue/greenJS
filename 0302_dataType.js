// 계산식만 작성하면 저장도 출력도 되지 않는다
1+3;
// 작성한 내용을 볼 때는 console.log()를 통해 확인
// 브라우저(클라이언트 쪽)에서 확인
console.log(1+3);

// 문자열은 한 라인에 작성할 수 있다
// \ 를 통해서 특수문자를 표현할 수 있다
console.log("hi \nhi");

// 문자열 안에 ${}를 사용하여 표현식을 넣을 수 있다
console.log(`52 + 273 = ${52+273}`);

// TODO: 문자열 실습 1
// 1. "반갑습니다" "홍길동입니다" 를 문자연결 연사자를 이용하여 출력하라
console.log('"반갑습니다"' + '"홍길동입나다"');
// 2. console.log를 이용하여 이스케이프 문자를 이용해서 줄바꿈해서 출력하세요
console.log("\t반갑습니다\n홍길동입니다");
// 3. 문자열 안에 표현식을 넣어 ${} 100*273 +23 식과 답을 같이 출력하세요
console.log(`100 * 273 + 23 = ${100 * 273 + 23}`);

console.log(4 <5);
console.log(5 != 4);

// Boolean 불
console.log(3 != 3);
// 3 != 3 결과 : false
console.log(3+2 == 5);
// 3+2 == 5 결과 : true
// != 같지 않다를 볼때는 왼쪽 오른쪽의 값을 보고 기호가 맞는지 아닌지를 판단해서 결과보기
// 3과 5 => 같다/같지 않다

// boolean값 계산 - 논리 연산자 
// ! (not) : bollean 값을 반대로 출력
console.log(!true); // 출력결과 => false


// || (or) : 두개의 boolean 값 중에 하나라도 true 결과 => true
console.log(true || false); // 출력결과 => true

// && (and) : 두개의 boolean 값이 전부 true 일 때 결과 => true
console.log(true && true); // 출력결과 => true

// TODO: bool 실습 1
// 1. 비교/논리 연산자를 사용해서 결과값이 true가 나올 수 있는 표현식을 서로 다른 연산자 3개를 사용하여 만드세요
console.log(5 < 13, 2!=4, 20*3 == 60 );
// 2. "안녕"과 "hi"를 비교했을 때 true가 나오게 만드세요
console.log("안녕" != "하이");
// 3. true와false 값을 놀리 연산자로 계산했을 떄 결과가 true로 출력이 되려면 어떤 연산자를 쓰면 됨?
console.log(true || false);


// TODO: 변수 실습 1
// 1. 사람에 대한 정보 : 홍길동, 20, "010-123-4567" 세 개의 값을 변수에 할당하세요
let person = {name : "홍길동", age : 20, phone : "010-123-4567"};
console.log(person);
// 2. "홍길동" 이라는 값이 들어간 변수에 다른 이름인 "성춘향"을 할당한 후 결과를 출력하세요
person.name = "성춘향"
console.log(person);

// TODO: 변수 실습 2
// 1. 식별자 이름이 hi인 변수를 만들어 "hello world"로 초기화 한 후 식별자를 사용하여 문자열을 출력
let hi = "hello world"
console.log(hi);
// 2. num1 과 num2에 각각의 수를 할당 후 두수를 더한 결과를 출력
let num1 = 200; let num2 = 404;
console.log(num1 + num2);
// 3. currentHumidity = 70, rainHumidity = 65 두개의 변수를 비교하여
// isRain 의 값을 할당 후 true인지 false 인지 출력
let currentHumidity = 70; let rainHumidity = 65;
let isRain = currentHumidity > rainHumidity;
console.log(isRain);

// 복합대입연산자
let numOpar = 0;
// 현재 변수에 1을 더해줄 때
numOpar = numOpar + 1;
console.log(numOpar);
// 복합 대입 연산자를 이용하여 1 더해줌
numOpar += 1;
console.log(numOpar);

// TODO: 그 외 연산자 실습 1
let sumNum = 0;
// 1. sumNum = sumNum + 1 을 복합대입연산자와 증감연산자로 표현하세요
sumNum += 1;
console.log('sumNum => ', sumNum);
sumNum++
console.log('sumNum => ', sumNum);
// 2. sumNum = sumNum - 1 을 복합대입연산자와 증감연산자로 표현하세요
sumNum -= 1;
console.log('sumNum => ', sumNum);
sumNum--
console.log('sumNum => ', sumNum);

// TODO: 특수 자료형 실습 1
let num = 10; let text = "숫자입니다";
// 1. Typeof()를 이용하여 자료형을 확인한 후에 두 변수를 더한 값을
// numText에 할당하고 어떤 자료형인지를 확인하세요
text = typeof(num);
console.log(`num의 자료형은 ${text}입니다.`);
// 2. MAX_WIDTH 을 값을 2를 가지고 있는 상수로 사용하기 위해 선언
const MAX_WIDTH = 2;

// const zooObj = {
//     cat: { age: 4, color: 'orange' },
//     dog: { age: 7, color: 'black' },
//   };

//   console.log(zooObj.elephant.age);

//   function getElephantAge() {
//     return zooObj.elephant.age;;
//   }

