const user = {
    id: 'user',
    activate: true,
    login: function() {
        console.log(`${this.id}님이 로그인 되었습니다.`);
    }
};
/** 
const student = {
    passion: true

};
*/
// console.log(student.activate); //undefined

const student = Object.create(user);
// create: 새로운 빈 객체를 만들고,
// 그 객체가 프로퍼티를 찾을때 user도 살펴볼 수 있도록 연결한다
// student의 프로토타입을 user로 설정 -> student의 부모가 user이고
// user의 프로퍼티를 상속받는다
student.passion = true; // 새로운 속성 추가

console.log(student.activate); //true

console.log(student.passion); //true
// console.log(user.passion); //undefined

// student가 프로토타입으로 연걸한 객체 확인
console.log(Object.getPrototypeOf(student));
// { id: 'user', activate: true, login: [Function: login] }
console.log(Object.getPrototypeOf(student) === user); //true

// *student가 activate를 직접 가지고 있는가*
console.log('자신의 activate:', Object.hasOwn(student, 'activate'));
//자신의 activate: fals


console.log('자신의 passion:', Object.hasOwn(student, 'passion'));
//자신의 activate: false

console.log('activate' in student); //true
/**
 * Object.hasOwn()은 해당 객체가 프로퍼티를 직접 가지고 있는지만 확인하고, in 연산자는 해당 객체뿐 아니라 
 * 프로토타입으로부터 상속받은 프로퍼티까지 포함해서 존재 여부를 확인합니다.
 */

const greedyStudent = Object.create(student);
// user-> student -> greedyStudent (화살표 방향으로 상속)
greedyStudent.greed = true;


console.log(greedyStudent.activate); //true
console.log(greedyStudent.passion); //true
console.log(greedyStudent.missing); //undefined

// prototype chain은 후손 객체에서 시작해서 
// 조상 prototype 방향으로 올라가며 프로퍼티를 찾는 것

greedyStudent.id = 'student01'
console.log(greedyStudent.id); //student01
console.log(user.id); //user


// 호출 주체인 점(.)앞의 객체의 this를 참조
greedyStudent.login();
//student01님이 로그인 되었습니다.

/**
 * login() 함수 자체는 user에서 상속받아 쓰지만, greedyStudent.login()처럼 
 * greedyStudent가 호출했기 때문에 
 * 함수 안의 this는 greedyStudent를 가리킨다
 */

delete greedyStudent.id;
console.log(greedyStudent.id); //user
// greedyStudent의 프로퍼티에 id가 없기때문에 부모의 부모인
//즉 프로토타입인 user의 id로 거슬러올라가서 속성을 가져옴
greedyStudent.login(); //user님이 로그인 되었습니다.

