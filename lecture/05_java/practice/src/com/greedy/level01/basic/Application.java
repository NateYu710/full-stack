package com.greedy.level01.basic;

public class Application {
    public static void main(String[] args) {
        Calculator App = new Calculator();
        App.checkMethod();
        System.out.println("1부터 10까지의 합: " + App.sum1to10());
        App. checkMaxNumber(10, 20);
        System.out.println("10과 20의 합은: " + App.sumTwoNumber(10, 20));
        System.out.println("10과 5의 차는: " + App.minusTwoNumber(10, 5));


    }
}
