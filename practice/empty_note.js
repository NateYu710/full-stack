// 1. 배열 기본
// 조건: length를 사용할 것. 마지막 과일의 인덱스를 직접 3이라고 쓰지 말 것.
const fruits = ['사과', '바나나', '포도', '딸기'];

console.log('첫 번째 과일:', fruits[0]);
console.log('마지막 과일:', fruits[fruits.length - 1]);
console.log('과일 개수:', fruits.length);

// 2.push / pop / shift / unshift
/**
 * 맨 뒤에 '순대' 추가
2. 맨 앞에 '돈까스' 추가
3. 맨 뒤 음식 하나 제거
4. 맨 앞 음식 하나 제거
5. 최종 배열 출력
 */

const foods = ['김밥', '라면', '떡볶이'];
foods.push('순대');
console.log(foods);
foods.unshift('돈까스');
console.log(foods);
foods.pop();
console.log(foods);
foods.shift();
console.log(foods);

/**
 * const students = [
    { name: '홍길동', score: 90 },
    { name: '유관순', score: 85 },
    { name: '이순신', score: 95 }
];
1번 학생: 홍길동 / 90점
2번 학생: 유관순 / 85점
3번 학생: 이순신 / 95점
*/

const students = [
  { name: '홍길동', score: 90 },
  { name: '유관순', score: 85 },
  { name: '이순신', score: 95 },
];

let count = 0;

students.forEach((student) => {
  console.log(`${++count}번 학생: ${student.name} / ${student.score}점`);
});

const products = [
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 30000 },
  { name: '모니터', price: 200000 },
];

//map()을 이용해서 상품 이름만 들어있는 배열을 만들어봐.
/**
 * ['키보드', '마우스', '모니터']
 * 그리고 가격에 각각 10%를 더한 새로운 가격 배열도 만들어봐.
 * [55000, 33000, 220000]
 */

const ArrayProduct = products.map((product) => {
  return product.name;
});
console.log(ArrayProduct);

const NewPrice = products.map((price) => {
  return Math.floor(price.price * 1.1);
});
console.log(NewPrice);

const members = [
  { name: '홍길동', age: 20 },
  { name: '유관순', age: 17 },
  { name: '이순신', age: 35 },
  { name: '김철수', age: 16 },
];

/**
 * filter()를 사용해서 20세 이상 회원만 새로운 배열로 만들어봐
 * 
 * [
    { name: '홍길동', age: 20 },
    { name: '이순신', age: 35 }
]
 */

const NewMember = members.filter((member) => {
  if (member.age >= 20) {
    return member;
  }
});

console.log(NewMember);

//find + 옵셔널 체이닝

const users = [
  { id: 1, name: '홍길동' },
  { id: 2, name: '유관순' },
  { id: 3, name: '이순신' },
];
/**
 * id가 2인 회원을 찾아서 이름을 출력
 * 답: 유관순
 * 그리고 id가 10인 회원을 찾아 이름을 출력
 * undefined
 */

const FindUser = users.find((user) => {
  if (user.id === 2) {
    console.log(user.name);
  }
});

const FindUser2 = users.find((user) => user.id === 10);
console.log(FindUser2?.name);

// some / every

/**
 * const scores = [90, 75, 80, 100, 65];
 * some()과 every()를 이용해서 다음을 확인해봐.

90점 이상인 학생이 한 명이라도 있는가?
모든 학생이 60점 이상인가?
모든 학생이 80점 이상인가?

예상 결과:

true
true
false
 */

const scores = [90, 75, 80, 100, 65];

const scoring = scores.some((score) => score >= 90);
console.log(scoring);

const scoring1 = scores.every((score) => score >= 60);
console.log(scoring1);

const scoring2 = scores.every((score) => score >= 80);
console.log(scoring2);

/**
 * sort
const products = [
    { name: '마우스', price: 30000 },
    { name: '모니터', price: 200000 },
    { name: '키보드', price: 50000 }
];

가격이 싼 순서대로 정렬해봐.

결과:

마우스 30000
키보드 50000
모니터 200000

그 다음 비싼 순서대로도 정렬해봐.
 */

const items = [
  { name: '마우스', price: 30000 },
  { name: '모니터', price: 200000 },
  { name: '키보드', price: 50000 },
];

const monitor = items.sort((a, b) => {
  return a.price - b.price;
});

console.log(monitor);

/**
 * reduce 기본
const numbers = [10, 20, 30, 40, 50];

reduce()를 이용해서 총합을 구해봐.

150

그 다음 평균도 구해봐.

30

힌트:

총합 / 배열.length
 */

const numbers = [10, 20, 30, 40, 50];

const ArrayNumber = numbers.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(ArrayNumber);
console.log(ArrayNumber / numbers.length);

/**
 * 객체 배열 + reduce
const cart = [
    { name: '사과', price: 1000, count: 3 },
    { name: '바나나', price: 2000, count: 2 },
    { name: '수박', price: 10000, count: 1 }
];

reduce()를 이용해서 실제 전체 구매금액을 구해봐.

즉:

사과 = 1000 × 3
바나나 = 2000 × 2
수박 = 10000 × 1

결과:

17000
 */

const cart = [
  { name: '사과', price: 1000, count: 3 },
  { name: '바나나', price: 2000, count: 2 },
  { name: '수박', price: 10000, count: 1 },
];

const SumCart = cart.reduce((sum, current) => {
  return sum + current.price * current.count;
}, 0);
console.log(SumCart);

/**
 * filter → map 연결
const students = [
    { name: '홍길동', score: 90 },
    { name: '유관순', score: 70 },
    { name: '이순신', score: 95 },
    { name: '김철수', score: 60 }
];

80점 이상인 학생들의 이름만 배열로 만들어봐.

최종 결과:

['홍길동', '이순신']

가능하면 이렇게 메서드를 연결해서 풀어봐.

students
    .filter(...)
    .map(...);
 */

const people = [
  { name: '홍길동', score: 90 },
  { name: '유관순', score: 70 },
  { name: '이순신', score: 95 },
  { name: '김철수', score: 60 },
];

const grade = people
  .filter((people) => people.score >= 80)
  .map((people) => {
    return people.name;
  });
console.log(grade);

/**
 * filter → sort → map
const products = [
    { name: '노트북', price: 1200000, stock: 3 },
    { name: '마우스', price: 30000, stock: 0 },
    { name: '키보드', price: 80000, stock: 5 },
    { name: '모니터', price: 300000, stock: 2 }
];

조건은 다음과 같아.

재고가 있는 상품만 고른다.
→ 가격이 싼 순서대로 정렬한다.
→ 상품 이름만 배열로 만든다.

최종 결과:

['키보드', '모니터', '노트북']
 */

const machines = [
  { name: '노트북', price: 1200000, stock: 3 },
  { name: '마우스', price: 30000, stock: 0 },
  { name: '키보드', price: 80000, stock: 5 },
  { name: '모니터', price: 300000, stock: 2 },
];

const MachineName = machines
  .filter((machine) => machine.stock > 0)
  .sort((a, b) => {
    return a.price - b.price;
  })
  .map((machine) => {
    return machine.name;
  });
console.log(MachineName);
