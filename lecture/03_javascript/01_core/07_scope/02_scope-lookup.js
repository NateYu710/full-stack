const message = '바깥';

function showMessage() {
    const message = '안쪽';
    console.log(message);
}
showMessage(); //안쪽
console.log(message); //바깥

const outerValue = '바깥쪽 변수';

if (true) {
    const blockValue = '블록 변수';
    const sayHi = function() {
        const localValue = '함수 지역 변수';
        console.log(outerValue);
        console.log(blockValue);
        console.log(localValue);
    };
    sayHi();
   // console.log(localValue); -- 밖에서 안을 호출 불가능  
}
// console.log(blockValue);
/**
 * 안쪽
바깥
바깥쪽 변수
블록 변수
함수 지역 변수
 */


// 렉시컬 스코프(Lexical Scope)
const label = '바깥';

function printLabel() {
    console.log(label);
}

function run() {
    const label = 'run 안쪽';
    printLabel();
}
run(); // 바깥
// printLabel 함수가 run 함수 안에서 만들어진 함수가 아니라 전역에서 생성됨
/**
 * 렉시컬 스코프
 * 함수가 어디에서 실행됐는지가 아니라, 어디에서 선언됐는지를 기준으로 
 * 어떤 변수를 사용할 수 있는지가 결정되는 규칙
 */