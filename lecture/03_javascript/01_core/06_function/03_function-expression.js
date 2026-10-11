/** 함수 표현식 - 값으로 담기 */

// console.log(hi('판다')); 

const hi = function(name) { //함수 이름은 생략가능
    return `${name}님 안녕하세요!`;
};

console.log(hi('판다'));
// 호출할때는 함수 이름이 아닌 변수이름으로 호출해야한다 

// 함수 선언문은 코드 실행 전에 먼저 준비되기 때문에 선언 위치보다 위에서 참조 가능
// 함수 선언문이 코드의 가장 위로 올라간 것처럼 보이는 동작을 호이스팅이라고 한다.
console.log(hello('홍길동'));


// 함수 선언문의 호이스팅
function hello(name) {
    return `${name} 안녕?`
}

console.log(hello('판다'));
