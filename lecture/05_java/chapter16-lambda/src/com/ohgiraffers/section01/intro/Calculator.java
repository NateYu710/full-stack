package com.ohgiraffers.section01.intro;

/*함수형 인터페이스: 추상 메소드가 하나인 인터페이스*/
@FunctionalInterface
/*
* 해당 인터페이스가 함수형 인터페이스인지 컴파일러가 검사하도록 하는 어노테이션
* */
public interface Calculator {

    int operate(int a, int b);

//    int anotherOperate(int a, int b);
    // 반드시 추상메소드가 하나여야 람다식 적용?
}
