// 약수및 약수의 개수 모두 출력
const num = 24;
let ct = 0;

for (i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
        ct += 1;
    }
}
console.log(`약수의 개수는 ${ct}개입니다`)



// 콜백 함수

function calculate(a, b, ComparisonCallback) {
    return ComparisonCallback(a, b) // bigger(a,b)
}

function bigger(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return 'a와 b의 크기는 동일합니다';
    }
}
function smaller(a,b) {
   if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return 'a와 b의 크기는 동일합니다';
    } 
}

const result = calculate(3, 10, bigger);
console.log(result);


//객체 + 함수를 이용한 은행 계좌 관리

const account = {
    owner: '능한',
    balance: 50000
};

function deposit(account, money) {
    account.balance += money; 
}

function withdraw(account, money){
    if (account.balance < money) {
        console.log('잔액 부족으로 출금 할 수 없습니다..');
    } else {
        account.balance -= money
    }    
}
deposit(account, 3000);
console.log(account.balance);
withdraw(account, 8000);
console.log(account.balance);
withdraw(account, 46000);

