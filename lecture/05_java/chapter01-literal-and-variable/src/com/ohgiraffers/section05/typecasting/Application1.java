package com.ohgiraffers.section05.typecasting;

public class Application1 {
    public static void main(String[] args) {

        /*자동 현병환 규칙
         *
         * - 서로 다른 숫자 타입을 연산하면 자바가 두 값을 함꼐 계산할 수 있는 타입으로 맞춘다
         * 일반적으로 표현 범위가 더 넓은 타입으로 자동 변환한 뒤 연산한다.*/

        /* 표현 범위가 더 넓은 숫자 자료형으로는 자동 형변환 */
        byte bnum = 1;
        short snum = bnum;
        int inum = snum;
        long lnum = inum;

        int num1 = 10;
        long num2 = 10;

        // int result1 = num1 + num2; // num1 + num2의 타입은 long인데 int에 담을 수 없어서 에러
        long result1 = num1 + num2;

        /* 정수는 실수로 자동 형변환된다 */
        long eight = 8;
        float four = eight;
        System.out.println("four = " + four); // four = 8.0

        /* 강제 형변환
            바꾸려는 자료형으로 캐스트 연산자를 이용하여 형변환한다.
            (바꿀자료형) 값;
         */
        // 큰 자료형에서 작은 자료형으로 변경 시
        long lnum2 = 8;
    //    int inum2 = lnum2;
        int inum2 = (int)lnum2; // 강제적으로 long 타입을 int 타입으로 바꾸기

        // 실수를 정수로 변경 시 강제 형변환 필요
        float fnum2 = 4.0f;
        // 자바에서 실수 리터럴의 기본 타입은 double이다. float로 사용하려면 f를 붙인다
        long lnum3 = (long)fnum2;
        System.out.println("lnum3 = " + lnum3); // lnum3 = 4
    }
}
