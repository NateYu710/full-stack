/** sort, reduce */

const numbers = [3,1,9,10,5];

const sorted = numbers.sort();
console.log(sorted); //[ 1, 10, 3, 5, 9 ]
/**
 * 왜 10이 중간에 껴있을까?
 * - sort()는 기본적으로 숫자를 문자열처럼 바꿔서 사전식으로 비교
 * - 문자열처럼 비교해서 앞자리 문자부터 순서대로 비교
 */
console.log(sorted === numbers); //true
console.log(numbers); //[ 1, 10, 3, 5, 9 ]
// numbers를 정렬하고, 그 정렬된 numbers를 sorted에도 넣은 것


numbers.sort((a , b) => a - b); //[ 1, 3, 5, 9, 10 ]
/**
 * 반환값 음수 : a를 b보다 앞에 놓는다.
 * 반환값 양수 : a를 b보다 뒤에 놓는다.
 * 0: 이 비교 기준에서 같은 순위로 취급한다
 */

console.log(numbers)
numbers.sort((a , b) => b - a)
console.log(numbers) //[ 10, 9, 5, 3, 1 ]

//reduce
const amounts = [1000, 2000, 3000];

let sum = 0;

// 누적하기 - for문 사용
for(let i = 0; i < amounts.length; i++) {
    sum = sum + amounts[i];
}

// 누적하기 - reduce 사용(반환값을 받아 다음 호출로 넘겨준다)
const total = amounts.reduce((sum, current) => {
    //sum: 누적값, current: 이번에처리할 배열요소
    return sum + current;
}, 0)
/**
 * amounts.reduce(콜박함수, 초기값)
 * 지금 위 함수의 sum의 초기값은 0
 */

//sort() = 원본 변경 / reduce() = 원본 유지 + 결과값 반환

console.log('빈 배열 합계:', [].reduce((sum, current) => sum + current, 0));

//빈 배열 합계: 0

// 배열이 비어 있어서 current로 꺼낼 요소가 하나도 없어. 그래서 콜백 함수는 실행되지 않고, 
// 처음에 준 시작값 0이 그대로 반환

/** 예제 */

/*
“상품 목록에서 재고가 있는 상품만 가격순으로 보여주려고 합니다. 방금 배운 메서드 중 원하는 결과에 맞는 것을 골라 보세요.”

1단계 — 판매 가능한 목록 만들기
재고가 0보다 큰 상품만 새 배열로 고릅니다.
그 배열을 가격 오름차순으로 정렬합니다.
정렬된 상품의 이름만 담긴 새 배열을 만듭니다.

중간 확인: 이름 배열이 ['파일', '노트']이면 1단계가 완성된 것입니다. 여기까지 확인한 뒤 2단계로 넘어갑니다.

2단계 — 합계·검색·판단·출력 연결하기
판매 가능한 상품을 한 개씩 살 때 총액을 구합니다. 재고 수량을 곱하지 않습니다.
원본 목록에서 이름이 펜인 상품 하나를 찾습니다.
품절 상품이 하나라도 있는지, 모든 가격이 양수인지 확인합니다.
판매 가능한 각 상품의 이름과 가격을 출력하고, 원본 상품 순서가 유지되는지 확인합니다.
*/



const products = [
    { name: '노트', price: 3000, stock: 5 },
    { name: '펜', price: 1000, stock: 0 },
    { name: '파일', price: 2000, stock: 3 }
];

const ThereisStock = products.filter(
    product => product.stock > 0
);
console.log(ThereisStock);
/**
 * [
  { name: '노트', price: 3000, stock: 5 },
  { name: '파일', price: 2000, stock: 3 }
]
 */

ThereisStock.sort((a, b) => a.price - b.price)
console.log(ThereisStock);
/**
 * [
  { name: '파일', price: 2000, stock: 3 },
  { name: '노트', price: 3000, stock: 5 }
]
 */

const ThereIsProduct = ThereisStock.map(product => product.name)
console.log(ThereIsProduct);
// [ '파일', '노트' ]

 
const TotalAmount = ThereisStock.reduce((price, current) => {
    return price + (current.price * current.stock)
}, 0);

console.log(TotalAmount); // 21000

const Namepan = products.find(product => product.name = '펜' );
console.log(Namepan); 
// { name: '펜', price: 3000, stock: 5 }

const NoSoldOut = products.some(product => {
    const Possible = (product.stock === 0 && product.price > 0)
    return Possible
})
console.log(NoSoldOut); //true

let LastProduct = []

for (let i = 0; i < ThereisStock.length; i++) {
  LastProduct.push({이름: ThereisStock[i].name, 가격: ThereisStock[i].price})
};

console.log(LastProduct);







