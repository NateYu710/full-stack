package com.ohgiraffers.section01.intro;

public class Application {
    public static void main(String[] args) {

        /*
        * [람다식]
        * 하나의 추상 메소드를 가진 함수형 인터페이스의 구현을
        * 간결하게 표현하는 문법이다.
        *
        * 매개변수와 실행할 동작만 작성한다.
        * (매개변수) -> {실행할 코드}
        * */
    /* 익명 클래스 덧셈 */
        Calculator anonymousAdd = new Calculator() {
            @Override
            public int operate(int a, int b) {
                return a + b;
            }

            // 일반 클래스는 이름을 지정해 별도로 선언하고,
            // 익명 클래스는 이름 없이 객체를 생성하면서 동시에 클래스를 선언하고 구현

            /*
            * 일반 클래스는 인터페이스를 implements로 구현해 별도로 선언하고,
            * 익명 클래스는 별도 클래스 선언 없이 객체를 생성하면서 인터페이스의 추상 메서드를 바로 구현
            * */
        };

        System.out.println("익명 클래스 덧셈 : " + calculate(10, 19, anonymousAdd));
        // 익명 클래스 덧셈 : 29

        // 람다식으로 계산
        Calculator lambdaAaa = (a,b) -> a + b;
        System.out.println("람다식 덧셈 : " + calculate(10 ,20, lambdaAaa));
        // 람다식 덧셈 : 30

        calculate(10, 19, (a, b) -> a - b);
        calculate(10, 19, (a, b) -> a * b);

        int bonus = 5;
        Calculator bonusCalculator = (a, b) -> a + b + bonus;
     //   bonus = 10; / 람다에 참조하는 지역변수는 처음 정한 뒤 다시 대입할 수 없다.
        /*
        * 선언된 자리에서 지역 변수의 값을 가져가 나중에 실행될 수도 있다.
        * 그 사이 지역 변수 값이 계속 바뀐다면 람다가 어느 값을 사용해야 하는지
        * 흐름을 이해하기 어려워진다.
        * 이러한 혼란을 막기 위해 자바는 람다가 참조하는 지역변수는 처음 정한 뒤 다시 대입하지 못하게 한다.
        *
        * */
        System.out.println(calculate(10, 20, bonusCalculator)); //35


    }


    public static int calculate(int first, int second, Calculator calculator) {
        return calculator.operate(first, second);
        // ex:) return lambdaAdd.operate(10, 20);
    }
}
