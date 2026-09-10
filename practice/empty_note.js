// 1. 배열 기본
// 조건: length를 사용할 것. 마지막 과일의 인덱스를 직접 3이라고 쓰지 말 것.
const fruits = ['사과', '바나나', '포도', '딸기'];

console.log('첫 번째 과일:', fruits[0],)
console.log('마지막 과일:', fruits[fruits.length-1])
console.log('과일 개수:', fruits.length)


// 2.push / pop / shift / unshift
/**
 * 맨 뒤에 '순대' 추가
2. 맨 앞에 '돈까스' 추가
3. 맨 뒤 음식 하나 제거
4. 맨 앞 음식 하나 제거
5. 최종 배열 출력
 */

const foods = ['김밥', '라면', '떡볶이'];
foods.push('순대')
console.log(foods);
foods.unshift('돈까스')
console.log(foods);
foods.pop();
console.log(foods)
foods.shift();
console.log(foods)

/**
 * const students = [
    { name: '홍길동', score: 90 },
    { name: '유관순', score: 85 },
    { name: '이순신', score: 95 }
];
1번 학생: 홍길동 / 90점
2번 학생: 유관순 / 85점
3번 학생: 이순신 / 95점
*/

const students = [
    { name: '홍길동', score: 90 },
    { name: '유관순', score: 85 },
    { name: '이순신', score: 95 }
];


students.forEach(
    (student, index) => {
        console.log(student)
    } 
);



