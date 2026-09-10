/** filter, fine, some, every */

const students =[
    {name: '홍길동', score: 90},
    {name: '권판다', score: 80},
    {name: '유관순', score: 95}
];

// filter: 콜백함수의 반환결과가 true인 요소만 모아 새로운 배열로 만듦

const highScorers = students.filter(
    student => student.score >= 85
);

console.log(highScorers);
// [ { name: '홍길동', score: 90 }, { name: '유관순', score: 95 } ]

const highScor = students.map(
    student => student.score >= 85
);
console.log(highScor); // [ true, false, true ]

// find() - 처음으로 조건을 통과한 요소 하나를 반환하고 검색을 끝낸다
const firstHighScorer = students.find(student => student.score >= 85);
console.log(firstHighScorer); //{ name: '홍길동', score: 90 }

// 조건이 맞지 않는걸 넣었을때(find)
console.log(students.find(student => student.score >= 100)); //undefined
// find로 맞는 요소를 찾지 못하면 undefined를 반환하기 때문에 안정적인 접근을 위해
// 옵셔널 체이닝 연산자(?.)를 사용할 수 있다.
//ex
const secondHighScorer = students.find(student => student.score >= 100);
// console.log(secondHighScorer.name); -- error가 뜸
console.log(secondHighScorer ?. name); // undefined
 // 조건이 맞지 않는걸 넣었을떄(filter)
console.log(students.filter(student => student.score >= 100)) //[]

// some - 조건에 맞는 요소가 한개라도 있는지 확인, 불리언 값 반환
const hasHighScorer = students.some(student => student.score >= 85)
const hasHighScorer2 = students.some(student => student.score >= 100)
console.log(hasHighScorer); //true
console.log(hasHighScorer2); //false

// every - 모든 요소가 조건에 만족하는지 확인, 불리언 값 반환
const allHighScorer = students.every(student => student.score >= 85)
console.log(allHighScorer) //false

