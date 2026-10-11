/**
 * 함수의 기본 구조
 * 특정 동작을 이름 붙여 재사용할 수 있게 만든 코드 묶음이다
 */
const area1 = 10 * 20;
const area2 = 30 * 40;
const area3 = 50 * 60;
console.log(area1, area2, area3);

// 함수 선언문
function calculateArea(width, height) {  //1. 함수 이름과 매개변수(parameter)
    console.log('함수 안으로 들어왔습니다.'); //2. 실행할 로직
    const area = width * height;
    return area; //3. 반환값 - 호출한 곳으로 값 전달
}
//return 이 없으면 함수 안에서는 area가 12로 계산됐지만, 
// return area;가 없어서 밖에서는 그 값을 받을 수 없음
// 

// 호출 및 결과활용
const result = calculateArea(10, 20);  //인자(argument)전달하며 함수 호출
console.log(result);

console.log(calculateArea(30,40));
console.log(calculateArea(50,60));

/**
 * 매개변수(parameter)와 인수(argument)
 * 함수를 정의할 때 설정하는 통로를 매개변수, 실제 호출할 때 넘기는 값을 인수라고 한다.
 */

// 매개변수는 함수가 호출될 때 값을 받기 위해
// 함수 내부에 만들어지는 지역 변수라고 볼 수 있다.
function greet(name) {
    console.log(name);
    console.log(arguments); // [Arguments] { '0': '홍길동', '1': '이순신' }
    return `${name}님 안녕하세요!`;
}
console.log(greet('홍길동'));

// console.log(name); //ReferenceErrorL: 함수 내부(지역 스코프)에서만 살아있다.

// 인수 개수 불일치
console.log(greet());
//undefined
//undefined님 안녕하세요!
console.log(greet('홍길동', '이순신')); //홍길동이 들어감
//첫번째 인수만 사용됨

// 매개변수 기본값 활용
function hi(name = '아무개') {
    // 인수가 전달되지 않거나 undefined가 들어오면 '아무개'가 기본값으로 쓰임
    return `${name} 안녕?`;
}

console.log(hi()); //아무개 안녕?
console.log(hi('유관순')); //유관순 안녕?
console.log(hi(undefined)); // 아무개 안녕?

