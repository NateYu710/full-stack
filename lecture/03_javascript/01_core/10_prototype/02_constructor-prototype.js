/*
const student1 = {
    name: 'vksek',
    age: 8
};

const student2= {
    name: '다람쥐',
    age: 5
};
*/

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Student('판다', 8);
const student2 = new Student('다람쥐', 4)

console.log(Student.prototype); //{}


/**
 * student 함수
 * 
 * student.prototype -> student1
 */
Student.prototype.activate = true;
Student.prototype.getInfo = function() {
    return `${this.name}는 ${this.age}세 입니다.`;
}

console.log(Student.prototype); 
// { activate: true, getInfo: [Function (anonymous)] }
// ->두개의 속석이 추가됨


// new 키워드를 이용해서 만들면 생성자함수의 prototype 객체에 연결된다.
const student3 = new Student('홍길동', 20);
const student4 = new Student('장보고', 30);

console.log(Object.getPrototypeOf(student3) === Student.prototype);
//true
console.log(Object.hasOwn(student3, 'getInfo')); 
//공통 객체에 정의해놨기 때문에 false

console.log(student3.activate); //true

console.log(student3.getInfo());
//홍길동는 20세 입니다.
console.log(student4.getInfo());
//장보고는 30세 입니다.

console.log(student3.getInfo === student4.getInfo); //true
/**
 * student3.getInfo === student4.getInfo → 같은 함수인가?
 *  student3.getInfo() === student4.getInfo() → 실행 결과가 같은가?
 */ 

student3.age = 35;
console.log(student3.getInfo());

/**
 * 생성자 함수는 new와 함께 사용해서 같은 형태의 객체를 여러 개 만들기 위한 함수입니다. 
 * 생성자 함수 안에서 this.name, this.age처럼 작성한 프로퍼티는 새로 만들어지는 
 * 각각의 객체에 직접 저장됩니다.
    생성자 함수를 만들면 자바스크립트는 자동으로 생성자함수.prototype이라는 객체를 만들어 둡니다. 
    new 생성자함수()로 만든 객체들은 이 prototype 객체에 자동으로 연결됩니다.
 */


//연습문제

/**
 * Book(title, price) 생성자에서 title과 price를 각 객체에 저장합니다.
getTotal(quantity)은 Book.prototype에 정의하고 현재 도서의 가격과 수량을 곱해 반환합니다.
15000원 도서와 20000원 도서를 만들어 각각 두 권의 총액을 확인합니다.
두 도서가 같은 getTotal 함수를 사용하는지 확인합니다.
book1이 getTotal을 직접 가지고 있는지, Book.prototype이 가지고 있는지 확인합니다.
첫 도서의 가격을 18000원으로 바꾸고 두 도서의 총액을 다시 확인합니다.
 */

function Book(title, price) {
    this.title = title
    this.price = price
};

Book.prototype.getTotal = function(quantity) {
    return this.price * quantity;
}


const book1 = new Book('HTML', 15000);
const book2 = new Book('CSS', 20000);

console.log(book1. getTotal(2));
console.log(book2. getTotal(2));

console.log(Object.hasOwn(book1, 'getTotal')); // false
console.log(Object.hasOwn(Book.prototype, 'getTotal')); //true

book1.price = 18000;
console.log(book1. getTotal(2));
console.log(book2. getTotal(2));


