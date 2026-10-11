// function increase(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = number + 10;
//       resolve(result);
//     }, 1000);
//   });
//   return promise;
// }

// increase(10)
//   .then((number) => {
//     console.log(number);
//     return increase(number);
//   })
//   .then((number) => {
//     console.log(number);
//   });

// function checkNumber(number) {
//   const promise = new Promise((resolve, reject) => {
//     if (number < 10) {
//       const e = new Error('실패: 숫자가 너무 작습니다');
//       return reject(e);
//     }
//     resolve(number);
//   });
//   return promise;
// }
// checkNumber(11)
//   .then((number) => {
//     console.log('통과');
//     return checkNumber(number);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('검사가 마무리되었습니다.');
//   });

// function addFee(price) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //에러 처리
//       if (price < 0) {
//         const e = new Error('가격은 0보다 작을 수 없습니다.');
//         return reject(e);
//       }
//       price += 3000;
//       resolve(price);
//     }, 1000);
//   });
//   return promise;
// }
// addFee(-500)
//   .then((price) => {
//     console.log(price);
//     return addFee(price);
//   })
//   .then((price) => {
//     console.log(price);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('계산 종료');
//   });

// function addFee(price) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (price < 0) {
//         const e = new Error('가격은 0 보다 작을 수 없습니다.');
//         reject(e);
//       }
//       price += 3000;
//       resolve(price);
//     }, 1000);
//   });
//   return promise;
// }

// async function calculateTotal() {
//   try {
//     let first = await addFee(-500);
//     console.log(first);
//     let second = await addFee(first);
//     console.log(second);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('계산 종료');
//   }
// }
// calculateTotal();

// function applyDiscount(price) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (price < 0) {
//         const e = new Error('가격이 올바르지 않습니다.');
//         return reject(e);
//       }
//       price -= 1000;
//       resolve(price);
//     }, 1000);
//   });
//   return promise;
// }

// async function calculateDiscount() {
//   try {
//     let first = await applyDiscount(-500);
//     console.log(first);
//     let second = await applyDiscount(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log('할인 완료');
//   }
// }

// calculateDiscount();
