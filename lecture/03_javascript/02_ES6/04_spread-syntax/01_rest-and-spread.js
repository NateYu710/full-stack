/**
 * [Spread Syntax]
 * 함수의 '인수' 자리나, 배열/객체 리터럴 안에서 사용하여
 * 배열의 요소들을 개별 값의 목록으로 펼쳐준다.
 *
 * [Rest Parameter]
 * 함수의 '매개변수' 자리에 사용하여, 정해지지 않은 개수의 인수들을
 * 하나의 '배열'로 모아서 받는다.
 */

const scores = [80, 95, 70];

// Math.max()
// Math.max(80, 95, 70);
console.log(Math.max(scores)); //NaN
// 배열 자체를 받는 함수가 아니라 숫자들을 각각 따로 받아야하는 메서드

// Spread(...) : 배열을 인수로 펼친다
console.log(Math.max(...scores)); //95

/**
 * 스프레드: ...을 사용해서 배열이나 객체 안의 값들을 펼쳐서 꺼내는 문법
 */

const frontEnd = ['HTML', 'CSS'];

const languages = [...frontEnd, 'JavaScript'];
console.log(languages); // [ 'HTML', 'CSS', 'JavaScript' ]

const frontEnd2 = [...frontEnd, 'HTML', 'CSS'];
console.log(frontEnd2); //[ 'HTML', 'CSS', 'HTML', 'CSS' ]

// 모든 요소를 새 대솰호 안에 펼치므로 모양은 같지만 서로 다른 배열이 만들어짐
const languagesCopy = [...languages];
console.log(languages === languagesCopy); // false (요소는 같지만 서로다른 배열)

const sameLanguages = languages;
console.log(sameLanguages === languages); // true

const original = [{ name: '홍길동' }];

const copied = [...original];
console.log(copied); //[ { name: '홍길동' } ]

// 내부에 객체가 있다면 그 객체까지 새로 만드는 것든 아닌 얕은 복사이다.
console.log(original === copied); //false
console.log(original[0] === copied[0]); //true

/**
 * 얕은 복사: 겉만 새로 복사하고 내부 객체는 주소를 공유한다.
 original → 배열 주소 100
copied   → 배열 주소 200

original[0] → 객체 주소 500
copied[0]   → 객체 주소 500
깊은 복사: 내부 객체까지 전부 새로운 주소로 복사한다.
original → 배열 주소 100
copied   → 배열 주소 200

original[0] → 객체 주소 500
copied[0]   → 객체 주소 500
얕은 복사 → 내부 객체 주소를 공유해서 true
깊은 복사 → 내부 객체도 새로 만들어서 false
 */

// 객체를 펼쳐 새 객체 만들기
const student = {
  name: '홍길동',
  score: 80,
};

const updatedStudent = {
  ...student,
  score: 90,
};
// 원래의 값을 복사한다음에 새로운 값을 넣어준다
console.log(updatedStudent); //{ name: '홍길동', score: 90 }

// Rest 파라미터: 나머지 인수를 배열로 모으기
function sum(...numbers) {
  let total = 0;

  console.log('받은 인수의 배열', numbers);
  // 받은 인수의 배열 [ 10, 20 ], 받은 인수의 배열 [ 10, 20, 30, 40 ]
  for (const number of numbers) {
    total += number; // total = total + number
  }
  return total;
}
console.log(sum(10, 20)); //30
console.log(sum(10, 20, 30, 40)); //100

const prices = [1000, 2000, 3000];

// 함수의 매개변수 자리에는 Rest 팔미터
function printTotal(label, ...values) {
  // Rest 파라미터(매개변수에서 가장 나중에 작성해야된다)
  let total = 0;

  for (const value of values) {
    total += value;
  }
  console.log(label, total);
}

// 호출 쪽에서 Spread 문법
printTotal('합계:', ...prices); //스프레드

// 연습문제

const cart = ['키보드', '마우스'];
const updatedCart = [...cart, '모니터'];
const order = {
  id: 1,
  status: '결제 대기',
};
const completedOrder = {
  ...order,
  status: '결제 완료',
};

function getTotal(...prices) {
  let sum = 0;
  for (const price of prices) {
    sum += price;
  }
  console.log(sum);
}

console.log(updatedCart); //[ '키보드', '마우스', '모니터' ]
console.log(order); //{ id: 1, status: '결제 대기' }
console.log(completedOrder); //{ id: 1, status: '결제 완료' }
getTotal(50000, 30000, 200000); //280000
