'use strict'; // 엄격 모드

function Student(name, age) {
    console.log('this가 있는가?', this != undefined);
    // this가 있는가? true
    console.log(`name이 있는가:`, 'name' in this)
    // name이 있는가: false //아직 this.name을 만들기 전이라 false.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}는 ${this.age}세 입니다.`;
    };
    console.log(`초기화한 값:`, this.name, this.age);
}

const student = new Student('호랑이', 50); //객체 생성
console.log(`객체를 반환받았는가:`, typeof student === 'object');
/**
 * new를 쓰면 빈 객체가 하나 만들어지고, this가 그 객체를 가리키고, 
 * 값이 저장된 뒤 그 객체가 반환되는 과정을 확인하는 코드
 */

/**
 * 목록
 * 
 * Student 생성자 함수가 정의됩니다.
new Student('호랑이', 50)이 실행됩니다.
new가 새로운 빈 객체를 만듭니다.
생성자 함수 안의 this가 새로 만들어진 객체를 가리킵니다.
아직 this.name이 만들어지기 전이라 'name' in this는 false입니다.
this.name = name으로 name 프로퍼티를 만듭니다.
this.age = age로 age 프로퍼티를 만듭니다.
this.getInfo = function() {...}으로 getInfo 메서드를 추가합니다.
초기화된 this.name, this.age 값이 출력됩니다.
생성자 함수 실행이 끝나면 new가 완성된 객체를 반환합니다.
반환된 객체가 student 변수에 저장됩니다.
typeof student === 'object'로 객체가 정상적으로 반환됐는지 확인합니다.
 */

function Dog(name, age) {
    // new.target: new()로 호출하면 Dog를 가리키고 일반 호출로 하면 undefined이다.
    if(!new. target) { //현재 함수가 new로 호출됐는지 확인하는 특별한 표현식
        console.log(`new 없이 호출했네요 ~new를 붙여서 다시 실행합니다.`);
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = new Dog('바둑이', 3);
console.log(dog)

/**
 * Book(title, price) 생성자를 작성하고 제목과 가격을 프로퍼티에 저장합니다.
getTotal(quantity) 메서드는 현재 책 가격과 수량을 곱해 반환합니다. 내부에서는 출력하지 않습니다.
‘자바스크립트 입문’ 15000원과 ‘객체와 함수’ 20000원인 책 두 개를 new로 만듭니다.
두 책의 두 개 속성을 출력합니다.
첫 책 가격을 18000으로 바꾸고 두 책의 두 개 속성을 다시 출력합니다.
첫 책의 수량 5로 총액을 계산합니다.
 */

function Book(title, price) {
    this. title = title;
    this. price = price;
    this. getTotal = function(quantity) {
        return this.price * quantity;
    }
}

const book1 = new Book('자바스크립트 입문', 15000);
const book2 = new Book('객체와 함수', 20000);

console.log(book1.getTotal(2));
console.log(book2.getTotal(2));

book1.price = 18000;
console.log(book1.getTotal(2));
console.log(book1.getTotal(2));
console.log(book1.getTotal(5));






