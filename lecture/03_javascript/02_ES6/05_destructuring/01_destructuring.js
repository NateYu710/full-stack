/**
 * 구조 분해 할당
 * 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 손쉽게 담을 수 있게 하는 표현식
 */

const colors = ['빨강', '파랑'];

const red = colors[0];
const blue = colors[1];

// 배열 구조 분해 할당
const [primaryColor, secondaryColor] = colors;
// 원본에 영향을 주지는 않는다
console.log(primaryColor); //빨강
console.log(secondaryColor); //파랑

const [leader, assistant = '미정'] = ['홍길동']; //할당연산자(미정)이란걸 넣어줌

//  rest 파라미터 사용
const [first, ...other] = ['유관순', '장보고', '이순신'];
console.log(first); //유관순
console.log(other); // [ '장보고', '이순신' ]

// 객체 구조 분해 할당
const student = {
  name: '유관순',
  age: 16,
  major: '역사',
};

const studentName = student.name;
const studentAge = student.age;
console.log(studentName, studentAge); //유관순 16

// 객체구조분해는 순서가 아니라 프로퍼티 키 이릉으로 값을 찾는다
const { name, age } = student; //키 이름으로 구조분해 할당
//const {age, name} = student; 순서를 바꿔도 된다

console.log(name, age); //유관순 16

// name키의 값을 learnerName이라는 새 변수에 담는다는 뜻
const { name: learnerName } = student;
console.log(learnerName); //잘 담긴거 확인

const { name: learnerName2, job } = student;
console.log(job); //undefined

const { name: learnerName3, job2 = '학생' } = student;
console.log(job2); //새로운 값을 넣어줘도 된다(학생)

const product = {
  name: '키보드',
  price: 70000,
};

function printProduct(product) {
  const { name, price } = product;

  console.log(`상품명: ${name}`); //상품명: 키보드
  console.log(`가격: ${price}원`); //가격: 70000원
}

printProduct(product);

function printProduct2({ name, price }) {
  console.log(`상품명: ${name}`); //상품명: 키보드
  console.log(`가격: ${price}원`); //가격: 70000원
}
printProduct2(product); // 여기서 product가 함수로 전달

// 배열 고차함수의 콜백에서도 사용할 수 있음

const products = [
  { name: '키보드', price: 50000 },
  { name: '마우스', price: 30000 },
];

const productNames = products.map((product) => product.name);

// 객체 구조 분해 할당 적용

console.log(productNames); // [ '키보드', '마우스' ]

// 객체 구조 분해 할당 적용 (객체 구조분해 매개변수: 소괄호 필요)
const productNames1 = products.map(({ name }) => name);
/**
 * const name = product.name;
    return name;
 */

console.log(productNames1); //[ '키보드', '마우스' ]

const product1 = {
  name: '노트북',
  price: 2000000,
  spec: {
    cpu: 'i7',
    ram: '16GB',
  },
};

function printProduct1({ name, price, spec: { cpu }, producer = '삼성' }) {
  console.log(`상품 이름: ${name}`);
  console.log(`상품 가격: ${price}`);
  console.log(`CPU: ${cpu}`);
  console.log(`제조사: ${producer}`);
}

printProduct1(product1);
/**
 * 상품 이름: 노트북
상품 가격: 2000000
CPU: i7
제조사: 삼성
 */
