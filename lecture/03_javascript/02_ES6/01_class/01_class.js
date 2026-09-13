class Student {
  // new Student(..)가 실행될 때 자동으로 호출되는 초기화 메서드
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  //객체마다 함수를 새로 만들지 안고
  // Student.prototype에 한 번 만들어 공유한다
  getInfo() {
    return this.name + ': ' + this.score + '점';
  }
}

// student.prototype이라는 객체를 프로토타입으로 가진다
const student1 = new Student('홍길동', 80);
// new 없이 호출시 일반함수로 취급하는게 아니라
// TypeError: Class constructor Student cannot be invoked without 'new'at Object.
// 타입에러가 남
const student2 = new Student('유관순', 90);

console.log(student1);
// Student { name: '홍길동', score: 80 }
console.log(student2);
// Student { name: '유관순', score: 90 }
console.log(student1.getInfo());
// 홍길동: 80점
console.log(student2.getInfo());
// 유관순: 90점
student1.score = 85;

console.log(student1.getInfo());
// 홍길동: 85점
console.log(student2.getInfo());
// 유관순: 90점
