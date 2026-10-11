/**array 배열 
 * 관련된 값들을 하나의 목록으로 묶어서 관리한다
 * 배열도 객체이다
*/

const fruits = ['바나나', '복숭아', '키위']; // 배열 하나 하나에 있는 값들을 요소라고함
// 배열의 인덱스(index)는 배열 안에 있는 각 요소의 위치를 나타내는 번호이며, 0부터 시작
console.log(fruits); //[ '바나나', '복숭아', '키위' ]

// 배열이름[인덱스]
// 배열에서는 위치를 나타내는 번호(index)가 있다. 인덱스는 1이 아니라 0부터 시작한다.
console.log(fruits[1]); //복숭아

console.log(fruits[3]); //undefined 반환
console.log(fruits.length); //3

// 배열요소 변경방법
fruits[1] = '딸기';
console.log(fruits[1]);

// for문을 활용한 배열 순회
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};
/**
 * 바난
 * 딸기
 * 키위
 */

// 배열의 타입
console.log(typeof fruits); //object
console.log(Array.isArray(fruits)); //true

/**
배열이면 → true
배열이 아니면 → false
*/
