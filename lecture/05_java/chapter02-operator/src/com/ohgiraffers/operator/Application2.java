package com.ohgiraffers.operator;

public class Application2 {

    public static void main(String[] args) {

        /*
         * 1. 논리 연산자
         *
         * && : AND
         *      두 논리식이 모두 true일 때 true
         *
         * || : OR
         *      두 논리식 중 하나라도 true이면 true
         *
         * !  : NOT
         *      true → false
         *      false → true
         *
         * 자바의 논리 연산에는 boolean 값만 사용할 수 있다.
         * JavaScript처럼 숫자, 문자열, 객체를
         * truthy / falsy 값으로 판단하지 않는다.
         */

        System.out.println(true && true);   // true
        System.out.println(true && false);  // false

        System.out.println(true || true);   // true
        System.out.println(true || false);  // true

        System.out.println(!false);         // true


        /*
         * 비교 연산의 결과도 boolean이므로
         * 논리 연산자와 함께 사용할 수 있다.
         */

        int num1 = 55;

        System.out.println(num1 >= 1 && num1 <= 100);
        // true
        // num1이 1 이상이고 100 이하인지 확인


        /*
         * 2. 단락 평가(Short-Circuit Evaluation)
         *
         * && : 앞의 결과가 false이면
         *      뒤의 조건을 확인하지 않는다.
         *
         * || : 앞의 결과가 true이면
         *      뒤의 조건을 확인하지 않는다.
         *
         * &&와 ||는 boolean끼리 연산하고
         * 결과도 boolean으로 반환한다.
         */

        int num2 = 10;

        boolean result1 = false && (++num2 > 0);

        System.out.println("result1 = " + result1); // false
        System.out.println("num2 = " + num2);       // 10

        /*
         * false && ...
         *
         * 앞의 값이 이미 false이므로
         * 전체 결과는 무조건 false이다.
         *
         * 따라서 뒤의 (++num2 > 0)은 실행되지 않는다.
         * num2는 10 그대로 유지된다.
         */


        /*
         * 3. 삼항 연산자
         *
         * 형식
         *
         * (조건식) ? 참일 때 값 : 거짓일 때 값
         */

        int num3 = 10;

        String result3 =
                (num3 > 0) ? "양수다." : "양수가 아니다.";

        System.out.println("result3 = " + result3);
        // result3 = 양수다.
    }
}