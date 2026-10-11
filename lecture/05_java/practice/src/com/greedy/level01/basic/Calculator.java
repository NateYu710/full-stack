package com.greedy.level01.basic;

public class Calculator {

    public void checkMethod() {
        System.out.println("메서드를 호출확인");
    }
    public int sum1to10() {
        int sum = 0;
        for(int i = 1; i <= 10; i++) {
            sum += i;
        }
        return sum;
    }

    public void checkMaxNumber(int a, int b) {
        if (a > b) {
            System.out.println("두 수 중 큰수는 " + a + "이다");
        } else if (a < b) {
            System.out.println("두 수 중 큰수는 " + b + "이다");
        } else {
            System.out.println("두 수는 똑같다");
        }
    }

    public int sumTwoNumber(int a, int b) {
        return a + b;
    }
    public int minusTwoNumber(int a, int b) {
        return a - b;
    }
}
