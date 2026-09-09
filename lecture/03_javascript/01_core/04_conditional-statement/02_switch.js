/**
 * switch문
 * 하나의 변수에 대해 여러 경우를 처리한다.
 * switch (변수) {
    case 값1:
        실행할 코드;
        break;

    case 값2:
        실행할 코드;
        break;

    default:
        실행할 코드;
}
 */

const fruit = '바나나';

switch (fruit) {
    case '사과' :
        console.log('선택한 과일은 사과이다.');
        break; //break는 참이면 switch문을 벗어나라는 의미
    case '바나나':
        console.log('선택한 과일은 바나나이다.')
        break;
    case '오렌지':
        console.log('선택한 과일은 오렌지이다.');
        break;
} //선택한 과일은 바나나이다

// break가 없다면
switch (fruit) {
    case '사과' :
        console.log('선택한 과일은 사과이다.');
    case '바나나':
        console.log('선택한 과일은 바나나이다.')
    case '오렌지':
        console.log('선택한 과일은 오렌지이다.');
} //선택한 과일은 바나나이다
// 선택한 과일은 오렌지이다.

switch (fruit) {
    case '사과' :
        console.log('선택한 과일은 사과이다.');
        break; //break는 switch문을 벗어나라는 의미
    case '바나나':
        console.log('선택한 과일은 바나나이다.')
        break;
    case '오렌지':
        console.log('선택한 과일은 오렌지이다.');
        break;
    default: //위 조건들에 해당하지 않을 때 실행
        console.log('알 수 없는 과일입니다.')
} //선택한 과일은 바나나이다