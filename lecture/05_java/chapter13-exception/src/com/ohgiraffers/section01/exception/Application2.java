package com.ohgiraffers.section01.exception;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.NoSuchElementException;

public class Application2 {
    public static void main(String[] args) {
        ExceptionTest et = new ExceptionTest();

        try{
            et.checkEnoughMoney(1000, 5000);
            // exception이 발생할 상황을 try구문에 넣어줌
        } catch (Exception e) { // Exception 타입의 예외가 전달 되었을 때 실행
            // 조건(돈 > 가격) catch구문은 실행되지 않음
           // throw new RuntimeException(e); // 새로운 excption 생성
            System.out.println("돈이 부족하여 상품 구입 불가!" + e.getMessage());
        }

        try {
            et.checkEnoughMoney(1000, 500);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            //getMessage:예외 객체에 저장된 메시지를 반환하는 메서드
            /* throw new Exception(); 익셉션 안에 있는 메서지를 반환함
            *
            * */
            e.printStackTrace(); // printStackTrace: 예외가 발생한 위치와 호출 경로를 출력하는 메서드
            // 실제 서비스에서는 보통 로깅 도구를 이용하여 필요한 정보를 기록한다.
        }

        System.out.println("프로그램을 정상적으로 종료합니다.");

        /*
        * 가지고 계신 돈은 500원 입니다.
        돈이 부족합니다!!
        프로그램을 정상적으로 종료합니다.
        java.lang.Exception: 돈이 부족합니다!!
            at com.ohgiraffers.section01.exception.ExceptionTest.checkEnoughMoney(ExceptionTest.java:17)
            at com.ohgiraffers.section01.exception.Application2.main(Application2.java:17)
                * */
        Deque<Integer> stack = new ArrayDeque<>(); // 비어있는 큐
        try {
            stack.pop(); // .NoSuchElementException 이런 예외를 띄움
        } catch (NoSuchElementException e) {
            // catch 안에는 exception 종류가 들어가고 exception 또한 참조 자료형이다..
            System.out.println("빈 스택에서는 값을 꺼낼 수 없습니다.");
        }

        /*
        * - checked Exception : 컴파일러가 처리 또는 throws 선언을 확인한다.
        * - Unchecked Exception : 컴파일러가 처리를 강제하지 않으며 주로 실행 중 발견된다.
        * */

    }
}
