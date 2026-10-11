package com.ohgiraffers.section02.variable;
// 현재 자바 파일이 어떤 패키지에 속하는지 선언하는 코드

public class Application1 {
    public static void main(String[] args) {
        /*
        변수 선언
        자료형 변수명;
         */

        /* 기본 자료형(primitive type) 8가지 */

        /* 정수를 취급하는 자료형
        * 저장 범위에 따라 byte, short, int, long을 구분한다.
        * 1 byte = 8 bit*/
        byte bnum; // 1byte
        short snum; // 2byte
        int inum; // 4byte
        long lnum; //8byte

        float fnum; //4byte
        double dnum; //8byte

        /* 문자를 취급하는 자료형 */
        char ch; //2byte

        /* 논리값을 취급하는 자료형 */
        boolean isTrue;

        /* 문자열을 저장할 때는 String을 사용한다.
            String은 기본 자료형에 포함되지 않는다.
            문자열을 다루기 위해 자바가 제공하는 별도의 자료형이다.
         */

        int point = 100; // 선언과 동시에 초기화
    }
}
