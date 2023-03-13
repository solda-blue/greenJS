let memo = {
    title : "오늘 할일",
    todo : {
        morning : ["청소", "준비"],
        afternoon : ['수업'],
        evening : ['정리', '독서']
    }
};
// 책체 안의 객체의 값에 접근하는 방법
console.log(memo.todo.morning[0]);

// 배열 안에 객체 
let todolist = [
    {time : '아침', todo : '청소'},
    {time : '오전', todo : '수업'},
    {time : '오후', todo : '독서'},
];

// 배열 안의 객체의 속성 값을 찾는 방버
console.log(todolist[1].todo);

let myMovie = {
    title : '킹메이커',
    time : '120',
    rate : 8.84,
    coment : {
        id : 'movieMaster',
        content : 'good'
    }
};

console.log(myMovie.coment.content);

function AnimalChart(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
    this.sickness = "";
    this.condition = "";
    this.receive = function(sickness, condition) {
        this.sickness = sickness;
        this.condition = condition;
    }
    this.confirm = function() {
        let allString = [];
        for(let i in this) {
            if(typeof this[i] != 'function') {
                allString.push(this[i]);
            }
        }
        console.log(allString);
    }
}

// 이름, 동물종류, 나이, 병명, 상태 출력
// 메소드(함수)를 제외하고 출력
// 전체출력 : for in 객체
// typeof 자료형을 확인하고 출력
let first = new AnimalChart('멍멍이', '개', 2);
first.receive('감기', '안좋음');
console.log('=======================');
first.confirm();

// 진료차트와 같이 동일한 형태의 내용을 객체를 사용하여 배열안에 넣어서 작성할 수도 있다
let animalChartList = [
    new AnimalChart("멍멍", "강아지", 1),
    new AnimalChart("야옹", "고양이", 3)
]