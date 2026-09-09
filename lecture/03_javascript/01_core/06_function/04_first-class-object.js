const sayHello = function() {
    console.log('안녕하세요~');
}

console.log(typeof sayHello); //function
sayHello(); //안녕하세요~

// 객체의 프로퍼티 값으로 넣기

const myObject = {
    sayHi: function() {
        console.log('반갑습니다!');
    }
};
console.log(myObject.sayHi); //[Function: sayHi]
myObject.sayHi(); // 함수만호출 //반갑습니다!
console.log(myObject.sayHi());
// function에 return값이 없어서 undefined가 나옴
// sayHi()를 실행한 뒤, 그 함수가 return한 값을 다시 console.log()로 출력

//다른 함수에 전달하기, 함수 반환하기
function manager(task, count) {
    console.log(`매니저가 업무를 지시합니다.`);
    for (let i = 0; i < count; i++) {
        task();    
    }
    return function() {
        console.log('모두 업무가 완료되었습니다');
    }    
}
const report = manager(sayHello, 3);
report();
/**
 * 매니저가 업무를 지시합니다.
안녕하세요~
 */

/**
 * function sayHello() {
    console.log('안녕하세요');
}

function manager(task, count) {

    // 1. manager 함수가 실행되면 먼저 출력
    console.log('매니저가 업무를 지시합니다.');

    // 2. count만큼 반복
    for (let i = 0; i < count; i++) {

        // 3. task에는 전달받은 함수 자체가 들어있음
        // manager(sayHello, 3)으로 호출했으므로
        // task = sayHello 상태
        // task()는 결국 sayHello()를 실행하는 것
        task();
    }

    // 4. 새로운 함수를 만들어서 함수 자체를 반환
    // function()의 ()는 실행 괄호가 아니라 매개변수 자리
    return function() {
        console.log('모두 업무가 완료되었습니다');
    };
}


// 5. sayHello는 ()가 없으므로 실행하는 것이 아니라
// 함수 자체를 manager의 task 매개변수로 전달
//
// manager(sayHello, 3)을 실행하면
// task = sayHello
// count = 3
//
// manager가 마지막에 반환한 함수가 report에 저장됨
const report = manager(sayHello, 3);


// 6. report에는 위에서 return한 함수가 들어있음
// 여기서 report()처럼 ()를 붙였으므로 실제 함수 실행
report();

핵심:

sayHello      // 함수 자체
sayHello()    // 함수 실행

function() {} // 함수 생성
report()      // 함수 실행
 */

