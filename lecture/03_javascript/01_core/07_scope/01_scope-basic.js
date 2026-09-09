/** 스코프 - 변수를 사용할 수 있는 범위 */

function calculateArea(width, height) {
    const area = width * height;
    console.log('함수 안:', area);
    return area;
}

const result = calculateArea(10, 20);
console.log(result);

// 둘다 함수 안에서 쓰는 것들이라 오류남
// console.log(area); 
// console.log(width);

const outerValue = '바깥쪽 값';
if (true) {
    const blockValue = '블록 안의 값';
    console.log(outerValue); //바깥쪽 값
    console.log(blockValue); //블록 안의 값
// 블록 안에서 블록 밖에있는 변수 접근가능함    
}

// console.log(blockValue);
// 블록 밖에서 블록 안에있는 변수 접근 불가능