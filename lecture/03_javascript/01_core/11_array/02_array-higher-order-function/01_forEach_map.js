const students =[
    {name: '홍길동', score: 90},
    {name: '권판다', score: 80},
    {name: '유관순', score: 95}
];

console.log(students[0].name); //홍길동
console.log(students[1].name); //권판다
console.log(students[2].name); //유관순

//for문으로 이름 출력
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
/*홍길동
권판다
유관순
*/

//forEach 사용 - 배열 요소 하나씩 전달 받기
/** 
forEach()는 내부적으로 이런 식으로 값을 넘긴다
콜백함수(배열요소, 인덱스);
callback(students[0], 0);
callback(students[1], 1);

*/
students.forEach(student => {
    console.log(student.name);
});
/**
 *홍길동
권판다
유관순 
 */

/*
students.forEach(function(student) {
    console.log(student.name);
});
*/

// student = { name: '홍길동', age: 20 }
// 이런식으로 배열의 요소들이 student에 들어감

students.forEach((student,index) => {
    console.log((index+1) + '번째 이름: ' + student.name);
});
/**
 * 1번째 이름: 홍길동
2번째 이름: 권판다
3번째 이름: 유관순
 */

// forEach는 콜백함수의 반환값을 모아주지 않는다.
// forEach의 반환값은 undefined이다
const ignoredNames = students.forEach(student => student.name);
console.log(ignoredNames); //undefined

// map: 각 요소를 가공해서 새로운 배열로 반환
const studentNames = students.map(student => student.name);
console.log(studentNames); //[ '홍길동', '권판다', '유관순' ]

// 원본 배열에 영향을 주지는 않는다
console.log(students[0]); //각 요소를 가공해서 새로운 배열로 반환

// 점수에 5점을 더하여 배열로 반환받기
const adjustedScores = students.map(student => {
    return student.score + 5;
})

console.log(adjustedScores);

students.forEach(student => {
    console.log(student.score);
});
/**
 * 90
80
95
// 즉 원본이 변하지는 않음
 */

