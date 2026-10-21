package com.ohgiraffers.section01.exception;

public class Application {
    public static void main(String[] args) throws Exception {
        // JVM이 main을 다루므로 JVM이 예외 처리



        // int number = Integer.parseInt("abc"); //numberformatexception

        /*
        * 예외 처리(Exception Handling)
        *
        * 프로그램 실행중 발생 문제를 감지하고 안내/기록/복구 방법을 정하는 것
        * */
        ExceptionTest et = new ExceptionTest();

        et.checkEnoughMoney(10000, 50000);

        /*
        * 가지고 계신 돈은 50000원 입니다.
        상품을 구입하기 위한 돈이 충분합니다.
        즐거운 쇼핑 하세요~
        * */

        et.checkEnoughMoney(50000, 10000);

        // 예외가 발생했다면 위 throw에서 실행흐름이 끝나므로 이 줄까지 내려오지 않습니다
        System.out.println("프로그램을 종료합니다.");

        /*
        * 가지고 계신 돈은 10000원 입니다.
        Exception in thread "main" java.lang.Exception: 돈이 부족합니다!!
	    at com.ohgiraffers.section01.exception.ExceptionTest.checkEnoughMoney(ExceptionTest.java:17)
	    at com.ohgiraffers.section01.exception.Application.main(Application.java:16)
        * */
    }

}
