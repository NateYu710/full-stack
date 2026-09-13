const Members = [
  { name: '홍길동', point: 1200, level: 'VIP' },
  { name: '유관순', point: 500, level: '일반' },
  { name: '이순신', point: 2000, level: 'VIP' },
  { name: '김철수', point: 0, level: '일반' },
];

/**
 * VIP 회원만 새로운 배열로 만들기
포인트가 1000 이상인 회원들의 이름만 배열로 만들기
포인트가 0인 회원 한 명 찾기
포인트가 0인 회원이 한 명이라도 있는지 확인하기
모든 회원의 포인트가 0 이상인지 확인하기
포인트가 높은 순서대로 정렬하기
전체 회원의 포인트 합계 구하기
 */

const VipMember = Members.filter((member) => member.level === 'VIP');
console.log(VipMember);

const BigPoint = Members.filter((member) => member.point >= '1000').map(
  (member) => {
    return member.name;
  },
);
console.log(BigPoint);

const ZeroPoint = Members.find((member) => member.point === 0);
console.log(ZeroPoint);

const ZeroPoint1 = Members.some((member) => member.point === 0);
console.log(ZeroPoint1);

const ZeroPoint2 = Members.every((member) => member.point >= 0);
console.log(ZeroPoint2);

const OrderMember = Members.sort((a, b) => b.point - a.point);
console.log(OrderMember);

const SumPoint = Members.reduce((sum, current) => {
  return sum + current.point;
}, 0);
console.log(SumPoint);
