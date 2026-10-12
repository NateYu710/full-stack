package com.ohgiraffers.section05.overloading;

public class Application {
    public static void main(String[] args) {

        Calculator calc = new Calculator();

        //  오버로딩 적용전
        System.out.println(calc.addTwoInts(10 ,20)); //30
        System.out.println(calc.addTwoDoubles(10.5, 20.5)); //31.0

        //오버로딩 적용 후
        // 자바가 인자를 보고 알맞는 메서드를 '알아서' 찾아줌
        System.out.println(calc.add(20, 30));
//        정수 2개를 더하는 add()
//        50
        System.out.println(calc.add(20.5, 30.5));
//        실수 2개를 더하는 add()
//        51.0
        System.out.println(calc.add(40, 50 ,60));
//        정수 3개를 더하는 add()
//        150


    }
}
