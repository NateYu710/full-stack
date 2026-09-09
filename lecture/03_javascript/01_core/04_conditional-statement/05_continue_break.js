/**
 * continue: 현재 반복문의 나머지 코드를 건너뛰고, 다음 반복으로 넘어간다
 * break: 현재 반복문을 완전히 종료한다
 */

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        continue;
    } // 2,4,6,8,10에서 continue 구문을 만남
    // 즉 이번 반복만 패스
    console.log(i);
}
/**
 답:
 * 1
 * 3
 * 5
 * 7
 * 9
 */
// 조건이 맞아서 continue가 실행되는 순간, 그 반복의 나머지 코드를 건너뛴다.

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        break; //반복문 종료
    }
    console.log(i);
}
//답: 1

//중첩 반복문

for(let i = 1; i <=3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue; //가장 가까운 반복문 하나에만 영향을 준다
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
/**
 * i: 1, j: 1
i: 1, j: 3
i: 2, j: 1
i: 2, j: 3
i: 3, j: 1
i: 3, j: 3
 */


// 구구단
for(let i = 1; i <= 9; i++) {
    console.log(`${i}단`)
    for (let j = 1; j <= 9; j++)
        console.log(`${i} * ${j} = ${i * j} `)
}