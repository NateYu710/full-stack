package com.ohgiraffers.operator;

public class Application1 {

    public static void main(String[] args) {

        /*
         * 1. 산술 연산자
         *
         * + : 더하기
         * - : 빼기
         * * : 곱하기
         * / : 나누기
         * % : 나머지
         *
         * 정수끼리 나누면 결과도 정수이므로 소수점 이하는 버려진다.
         */

        System.out.println("10 / 3 = " + (10 / 3)); // 3


        /*
         * 2. 산술 복합 대입 연산자
         *
         * += : 더한 후 대입
         * -= : 뺀 후 대입
         * *= : 곱한 후 대입
         * /= : 나눈 후 대입
         * %= : 나머지를 구한 후 대입
         */

        int num = 12;

        num += 3;
        // num = num + 3과 같은 의미

        System.out.println("num = " + num); // 15


        /*
         * 3. 증감 연산자
         *
         * ++ : 1 증가
         * -- : 1 감소
         *
         * num++ : 현재 값을 먼저 사용하고 나서 1 증가
         * ++num : 먼저 1 증가시키고 증가된 값을 사용
         */

        num++; // 15를 사용한 뒤 16으로 증가
        ++num; // 먼저 17로 증가한 뒤 17을 사용


        int firstNum = 10;

        int result = ++firstNum * 3;
        // firstNum을 먼저 11로 증가
        // 11 * 3 = 33

        System.out.println("result = " + result); // 33


        /*
         * 4. 비교 연산자
         *
         * == : 같다
         * != : 같지 않다
         * >  : 크다
         * <  : 작다
         * >= : 크거나 같다
         * <= : 작거나 같다
         *
         * 비교 연산의 결과는 항상 boolean(true 또는 false)이다.
         */

        int num1 = 10;
        int num2 = 20;

        System.out.println(num1 == num2); // false
        System.out.println(num1 != num2); // true
        System.out.println(num1 > num2);  // false
        System.out.println(num1 < num2);  // true
        System.out.println(num1 >= num2); // false
        System.out.println(num1 <= num2); // true


        /*
         * 5. 문자열 비교
         *
         * ==      : 두 변수가 같은 객체를 가리키는지 비교
         * equals(): 문자열의 실제 내용이 같은지 비교
         *
         * 문자열의 내용을 비교할 때는 equals()를 사용한다.
         */

        String str1 = "java";
        String str2 = "java";

        System.out.println(str1 == str2);
        // 같은 객체를 가리키는지 비교
        // 문자열 리터럴의 특성 때문에 여기서는 true가 나올 수 있지만
        // 문자열 내용 비교용으로 ==를 사용하면 안 된다.

        System.out.println(str1.equals(str2)); // true
        // 실제 문자열 내용이 같은지 비교


        /*
         * 6. 자바에는 === 연산자가 없다.
         *
         * JavaScript에는 ==와 ===가 있지만
         * Java에는 === 연산자가 존재하지 않는다.
         *
         * 예)
         * 1 == "1"
         *
         * int와 String처럼 서로 비교할 수 없는 타입은
         * 자동으로 타입을 바꿔 비교하지 않고 컴파일 에러가 발생한다.
         */


        /*
         * 7. boolean 비교
         *
         * boolean 값은 == 또는 !=를 사용하여
         * true / false 값이 같은지 비교할 수 있다.
         */

        boolean bool1 = true;
        boolean bool2 = false;

        System.out.println(bool1 == bool2); // false
        System.out.println(bool1 != bool2); // true
    }
}