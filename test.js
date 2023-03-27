let arr = [1,2,3]
console.log(typeof arr);
console.log('==============');

let obj = {
    name : 'json',
    age : 30,
    hi : function() {
        console.log('hi');
    },
    publish : {
        title : 'javascript',
        content : 'object'
    }
};

for(i in obj) {
    console.log(i, obj[i]);
};

console.log('=============');

for(i of arr) {
    console.log(i);
};

console.log('=============');

for(i in arr) {
    console.log(i);
};


// console.log(add(2, 3));

let add = function (x, y) {
    return x+y;
}

console.log(add(5,4));
console.log('=============');