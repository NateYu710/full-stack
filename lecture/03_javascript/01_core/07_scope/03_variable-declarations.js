//var은 함수 범위
function compareVar() {
    var i = 100;
    for (var i = 0; i < 3; i++) {
        console.log('var 안:', i);
    }
    console.log('var 밖:', i);
}
compareVar();
/**
var 안: 0
var 안: 1
var 안: 2
var 밖: 3
 */



// let : 블록범위
function compareLet() {
    let i = 100;
    for (let i = 0; i < 3; i++) {
        console.log('let 안:', i);
    }
    console.log('let 밖:', i);
}
compareLet();
/**
let 안: 0
let 안: 1
let 안: 2
let 밖: 100
 */

function compareAssignment() {
    var oldMessage = '처음';
    var oldMessage = '변경'; // 같은 범위에서의 재선언을 허용
    console.log(oldMessage);

    let message = '처음';
    message = '변경';
    console.log(message);
    //let message = '중복'; // 재선언 허용하지 않음

    const greeting = '안녕하세요';
    console.log(greeting);
    // greeting = '안녕히 가세요'; // 재할당 허용 안함
}

compareAssignment();

// var은 함수 전체, let과 const는 해당 {} 블록 안에서만 사용


function compareInitialization() {
    console.log('var 선언 전', oldValue);
    var oldValue = '준비됨'
    console.log('var 대입 후', oldValue);


    // console.log(value); /ReferenceError
    let value;
    console.log('let 선언 후', value);
    value = '준비됨'
    console.log('let 대입 후', value);
    
}
compareInitialization();
/**
var 선언 전 undefined
var 대입 후 준비됨
let 선언 후 undefined
let 대입 후 준비됨
 */

// var는 선언 전에 접근해도 undefined가 나오지만, let은 선언 전에 접근하면 에러가 발생한다. 
// 둘 다 선언만 하고 값을 넣지 않으면 undefined다.


const student = {
    name: '판다',
    age: 5
};
student.name = '코알라';
console.log('학생이름:', student.name)

// 학생이름: 코알라