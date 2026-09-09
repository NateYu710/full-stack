/**
 * 변수
 * 변수 (variable)는 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'이다
 *
 * 변수를 생성할 때 우리는 변수를 선언한다고 표현한다.
 *
 * 변수 선언 방법
 * 키워드 변수명;
 *
 * 키워드: 변수를 어떤 규칙으로 만들지 정함
 * 변수명: 값을 다시 사용할 때 부를 변수 이름
 */

// var: ES5까지 사용했던 유일한 키워드
// 단점을 보완하기 위해 ES6에서 새로운 키워드인 let, const를 도입했다.
// "//"은 주석처리
// "control + ` " 은 터미널 키
var number;
number = 5; // 값 할당
console.log(number);

let greeting = 'Hello, Node.js'; //선언과 동시에 할당(초기화)
console.log(greeting);
/** console.log() = JavaScript에서 변수의 값이나
 * 결과 등을 콘솔에 출력하여 확인할 때 사용하는 메서드  */

greeting = 'welcome!';
console.log(greeting);

// const: 재할당 금지
// const num; (error남)
// 반드시 선언과 동시에 초기화 해야 한다.

const num = 1;
// num = 2; (선언과 동시에 할당을 안해서 error남)
console.log(num);

/** 변수명 규칙
 * - 변수 이름에는 문자, 숫자,_, $등을 사용할 수 있다.
 * - 변수 이름은 숫자로 시작할 수 없다.
 * - 카멜케이스(camelCase)를 사용하는 것이 일반적이다.
 */
// const 1age = 1;
// const if = tre; //예약어 금지
const userName = 'panda';
// 두번째 단어부터 첫 글자를 대문자로 쓰는 camelCase가 일반적
const userAge = 5;

console.log(userName);
console.log(userAge);

const age;
age = 6;
console.log(age);
