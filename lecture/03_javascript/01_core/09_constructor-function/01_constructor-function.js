/** 생성자 함수 */
// 틀 하나 만들어놓고 값만 바꿔서 객체를 계속만들기 위해서
const student1 = {
    name: '판다',
    age: 5,
    getInfo: function() {
        return `${this.name}는 ${this.age}세 입니다`;
    }
}


const student2 = {
    name: '코알라',
    age: 3,
    getInfo: function() {
        return `${this.name}는 ${this.age}세 입니다`;
    }
}
console.log(student1.getInfo());
console.log(student2.getInfo());
/**
 * 판다는 5세 입니다
 * 코알라는 3세 입니다.
 */


function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}는 ${this.age}세 입니다.`;
    }
}

const student3 = new Student('원숭이', 40);
// new: 생성자 함수로 새 객체를 만들어주는 키워드
const student4 = new Student('고릴라', 30);
console.log(student3);
// Student { name: '원숭이', age: 40, getInfo: [Function (anonymous)] }
console.log(student4);
// Student { name: '고릴라', age: 30, getInfo: [Function (anonymous)] }
console.log(student3.getInfo());
// 원숭이는 40세 입니다.
console.log(student4.getInfo());
// 고릴라는 30세 입니다.

console.log(typeof(student3)); //object

/**
 * 1. this라는 빈 객체를 만든다.
 * 2.그 객체의 프로퍼티들을 할당한다.
 * 3.완성된 this 객체가 호출결과(return)가 되어 student3번에 할당 된다
 */

console.log('같은 객체인가:', student3 === student4); //같은 객체인가: false
student3.age = 31;
console.log(student3.getInfo()); //원숭이는 31세 입니다.
console.log(student4.getInfo()); //고릴라는 30세 입니다.

//예제

/**
 * 이름과 나이를 전달받는 Dog(name, age) 생성자 함수를 작성합니다.
전달받은 값을 새 객체의 name과 age 프로퍼티에 저장합니다.
new를 사용해 뽀삐 3살과 바둑이 5살 객체를 만듭니다.
두 객체의 이름과 나이를 출력합니다.
첫 번째 강아지의 나이를 4로 바꾸고 두 객체의 나이를 다시 출력합니다
 */

function Dog(name, age) { 
    this.name = name;
    this.age = age;
    this.result = function(){
        return `${this.name}: ${this.age}`;
    }
    
}

const dog1 = new Dog('뽀삐', 3);
const dog2 = new Dog('바둑이', 5);

console.log(dog1.result());
console.log(dog2.result());

dog1.age = 4;
console.log(dog1.result());
console.log(dog2.result());