/** 옵셔널 체이닝 연산자 
 * 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고
 * 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
 * 앞에 있는 값이 없으면 에러 내지 말고 그냥 undefined를 준다는 의미
 * 객체 안에 값이 있는지 없는지 확실하지 않을 때 사용
*/

/*const user = {
    name: '능한'
};

console.log(user.address.city); //타입에러
TypeError: Cannot read properties of undefined (reading 'city')
*/


const obj = null;
const val = obj?. value; //객체 뒤에 ?.을 붙이면 된다

console.log(val); //undefined

//옵셔널 체이닝 이전에는 논리연산자 &&를 사용한 단축평가로 확인을 했다.
//단, 빈 문자열과 같은 Falsy한 값을 false 취급해서 생기는 문제가 있다.

const str = ''; //str에 어떤 문자열이 담긴지 모르는 상태로 가정
console.log(str.length); //0
// const len = str && str.length
// len에 str 즉, 빈 문자열이 담긴다. 우리가 원했던 길이 값(숫자형)이 담기지 않는다.
/**
 str이 값이 있으면 str.length를 구하고,
str이 falsy 값이면 그냥 str 자체를 반환
 */

const len = str?.length;
// null 또는 undefined일 때만 멈춘다.
// 빈 문자열은 null, undefined가 아니므로 문자열의 길이 값이 담긴다.

