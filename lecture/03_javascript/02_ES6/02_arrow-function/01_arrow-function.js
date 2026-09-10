/**화살표 함수 */
'use strict';

const power = function(x) {
    return x * x;
}
console.log(power(3));

const arrowPower = (x) => {
    return x * x;
}
console.log('화살표 함수', arrowPower(3));

const square = x => x * x;
/*
- 화살표 함수에서 실행할 코드가 한 줄이고, 
그 결과를 바로 반환할 때는 {}와 return을 같이 생략할 수 있습니다.
- 그리고 매개변수가 딱 1개라면 ()도 생략 가능
*/
console.log(square(3));

//매개변수 없거나 여러개인 경우, 소괄호 생략 불가
const greet = () => '안녕하세요';
const add = (a,b) => a+b

console.log(greet());
console.log(add(1,2));

const calculateSquare = x => {
    return x * x;
}

// 중괄호 본문: return을 꼭 명시해서 반환해야 함
const wrongSquare = x => {
    x * x;
}
console.log(wrongSquare(3)); //undefined

/* 정리 */
/* 매개변수 1개 → () 생략 가능
실행문 1줄 + 바로 반환 → {}와 return 생략 가능
단 중괄호를 쓰면 return을 반드시 명시해 줘야함 */

// 객체를 반환할 시, 소괄호로 감싸서
// 함수 실행문이 아니고 반환할 객체를 만드는 표현식임을 표시해 주어야 한다.

const createUser = (id, name) => ({id: id, name: name});
console.log(createUser(1, '판다'));
// { id: 1, name: '판다' }

/**
 * 1. 함수
 * function createUser(id, name) {
    return {
        id: id,
        name: name
    };
}
 */
/**
 * 2. 표현식
 * const createUser = function(id, name) {
    return {
        id: id,
        name: name
    };
};
 */

// 화살표 함수도 다른 함수에 콜백으로 전달 가능
function calculate(value, operation) {
    return operation(value);
}
console.log(calculate(3,power)); //9
console.log(calculate(3,value => value * value)); //9
// value대신 다른값으로 넣어도 된다
//ex): number => number * number

/*
console.log(
    calculate(3, function(value) {
        return value * value;
    })
);
*/


