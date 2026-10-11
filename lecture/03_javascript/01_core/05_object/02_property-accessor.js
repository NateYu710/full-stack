/** 프로퍼티 접근
 * 1. 마침표 표기법
 * 2. 대괄호 표기법
 */

const dog = {
    name: '뽀삐',
    eat: function(food) {
        // 객체 안에 eat이라는 메서드를 만들고, 
        // 실행할 때 food라는 값을 받아서 사용하는 것
        console.log(`${this.name}은 ${food}를 맛있게 먹어요.`)
    }
}

// console.log(객체.key)
console.log(dog.name); //뽀삐
console.log(dog.eat); //[Function: eat]
dog.eat('두부'); // 뽀삐은 두부를 맛있게 먹어요.

// 대괄호 표기법
// 대괄호 표기법은 프로퍼티 키를 문자열이나 변수로 지정해서 접근해야 할 때 사용한다.
console.log(dog['name']); //프로퍼티 키를 문자열로 적는다 //뽀삐
dog['eat']('고구마'); //뽀삐은 고구마를 맛있게 먹어요.

const obj = {
    'dash-key': 'dash-value',
    0:1
};

// console.log(obj.'dash-key') 네이밍규칙에 어긋남
console.log(obj['dash-key']); //dash-value

// key가 변수에 담겨 있을 때
const prop = 'name';
console.log(dog.prop) //prop이라는 프로퍼티키가 객체안에 존재하지 않음
console.log(dog[prop]) //뽀삐
// dog['name']
