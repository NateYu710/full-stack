/*
Member(name, options) 생성자 함수를 작성하세요.

프로퍼티
- name
- options

Member.prototype에 다음 메서드를 작성하세요.

1. getPoint()
   - options.point를 반환
   - 없으면 0 반환

2. addPoint(point)
   - 기존 포인트에 point를 더합니다.

3. usePoint(point)
   - 보유 포인트보다 사용하려는 포인트가 크면
     '포인트가 부족합니다.' 반환
   - 가능하면 포인트를 차감하고
     '포인트를 사용했습니다.' 반환

회원 생성

const member1 = new Member('홍길동', { point: 1000 });
const member2 = new Member('유관순');

실행

console.log(member1.getPoint());
member1.addPoint(500);
console.log(member1.getPoint());

console.log(member1.usePoint(1200));
console.log(member1.getPoint());

console.log(member2.getPoint());
member2.addPoint(300);
console.log(member2.getPoint());

예상 출력

1000
1500
포인트를 사용했습니다.
300
0
300
*/

function Member(name, options) {
    this.name = name
    this.options = options; 
};


Member.prototype.getPoint =  function(){
    return this.options ?. point ?? 0
};

    /* ex:) member2.options = {
    point: 0 가 생성되는 건 아님
    */

Member.prototype.addPoint = function(point){
    if (this.options ?. point == undefined ) { //객체가 없으면 undefined를 반환
        this.options = {} //빈객체 생성
        this.options.point = point
        return this.options.point
    } else {
        this.options.point += point
        return this.options.point;
    };
    
};
Member.prototype.usePoint = function(point){
    if(this.options ?. point === undefined) {
        this.options = {}
        this.options.point = 0
        return '포인트가 없습니다'
    } else if (this.options.point < point) {
        return '포인트가 부족합니다'
    } else {this.options.point -= point
        return '포인트를 사용했습니다' };
};

const member1 = new Member('홍길동', { point: 1000 });
const member2 = new Member('유관순');

console.log(member2.getPoint());
console.log(member2.usePoint(100));

console.log(member1.getPoint()); //1000
member1.addPoint(500); 
console.log(member1.getPoint()); //1500

console.log(member1.usePoint(1200));
console.log(member1.getPoint());//300

console.log(member2.getPoint());
member2.addPoint(300);
console.log(member2.getPoint());


