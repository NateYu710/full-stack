/**
 * 1번. 생성자 함수 만들기

Car 생성자 함수를 만드세요.

조건:

brand와 year를 전달받습니다.
각각 this.brand, this.year에 저장합니다.
new를 이용해서 "현대", 2025인 car1 객체를 만드세요.
car1.brand, car1.year를 출력하세요.
 */

function Car(brand, year) {
    this.brand = brand
    this.year = year
};
const car1 = new Car('현대', 2025)

console.log(car1.brand);
console.log(car1.year);