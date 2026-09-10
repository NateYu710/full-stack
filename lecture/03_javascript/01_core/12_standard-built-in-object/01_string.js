/** String 표준 빌트인 객체 
 * 문자열은 변경할 수 없는 값이므로 메서드를 실행해도 원본은 바뀌지 않고 새로운 값을 반환한다.
*/

// 1. trim - 문자열 앞뒤 공백 제거
const rawKeyword = '    JavaScript'
console.log(rawKeyword);  
const trimmedkeyword =  rawKeyword.trim();
console.log(trimmedkeyword);//Javascript

// 2. 영어 대소문자 정리(toLowerCase(), toUpperCase())
const keyword = trimmedkeyword.toLowerCase();
console.log(keyword);//javascript
console.log(keyword.toUpperCase()); //JAVASCRIPT

//3. indexOf() : 검색어가 시작하는 인덱스 반환, 찾지 못하면 -1을 반환한다 
const title = 'JavaScript 배열 수업';
const searchTitle = title.toLowerCase();
console.log(searchTitle.indexOf(keyword)); //0
// 찾을 값을 직접 넣거나, 그 값이 저장된 변수를 넣어도 된다.

console.log(searchTitle.indexOf('python')); //-1

//includes(): 검색어가 들어있는지를 true 또는 false로 반환
console.log(searchTitle.includes('script')); //true
// 일부만 일치해도 true반환
console.log(searchTitle.includes('python')); //false


//4. slice() - 필요한 부분 가져오기
const fileName = 'my-profile.jpg';
// slice(시작인덱스, 끝인덱스)는 시작 인덱스부터 끝 인덱스 바로 앞까지 잘라 반환
console.log(fileName.slice(0,10)); //my-profile
// lastIndexOF('.') : 문자열에서 마지막 마침표(.)의 인덱스를 찾는다
const dotIndex = fileName.lastIndexOf('.');
console.log(dotIndex); //10
const extension = fileName.slice(dotIndex);
//입력한 index 부터 찾는다
console.log(extension); //.jpg

//5.split - 문자열을 배열로 나누기
const tags = '#자바스크립트#개발자#프론트엔드';
const tagParts = tags.split('#');
console.log(tagParts); //[ '', '자바스크립트', '개발자', '프론트엔드' ]
/**
 * split('#')은 #을 기준으로 자르는데, 맨 처음 # 앞에는 아무 글자도 없음.
  그래서 첫 번째 요소가 빈 문자열 ''이 된다
 */

  //6. 배열 메서드로 빈 값 제외
  const tagList = tagParts.filter(tag => tag !== '');
  console.log(tagList); // [ '자바스크립트', '개발자', '프론트엔드' ]

  // 메서드 체이닝 방식

const tagList2 = tags
    .split('#')
    .filter(tag => tag !== '');

console.log(tagList2);
// [ '자바스크립트', '개발자', '프론트엔드' ]



