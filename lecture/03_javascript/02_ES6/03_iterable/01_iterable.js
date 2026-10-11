// for...of와 이터러블
// 이터러블은 값을 순서대로 하나씩 꺼낼 수 있는 값이다.
// 배열과 문자열이 대표적이다.
// 배열의 값을 하나씩 꺼내서 반복할 때 사용

const fruits = ['🍎', '🍌', '🍓'];

for (let i = 0; i < fruits.length; i++) {
  console.log('일반 for문:', i, fruits[i]);
}

/**
 * 일반 for문: 0 🍎
일반 for문: 1 🍌
일반 for문: 2 🍓
 */

// for...of 문
for (const fruit of fruits) {
  console.log('for...of:', fruit);
}
/**
 * for...of: 🍎
for...of: 🍌
for...of: 🍓
 */

// 하나씩 배열의 요소의 값이 변수에 들어간다

const message = '안녕';
for (const character of message) {
  console.log('글자', character);
}
/**
 * 글자 안
글자 녕
 */

// 이터러블(iterable)은 값을 하나씩 순서대로 꺼낼 수 있는 객체
// 글자 하나씩 불러온다

const student = {
  name: '홍길동',
  score: 80,
};

// for (const value of student) {
//   console.log(value);
// }
// TypeError: student is not iterable(이터러블한 객체가 아니다)
