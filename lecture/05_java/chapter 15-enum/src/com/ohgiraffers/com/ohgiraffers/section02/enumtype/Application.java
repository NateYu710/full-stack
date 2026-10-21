package com.ohgiraffers.com.ohgiraffers.section02.enumtype;

public class Application {
    public static void main(String[] args) {

        Subjects subject1 = Subjects.JAVA;
        Subjects subject2 = Subjects.HTML;

        if (subject1 == subject2) {
            System.out.println("두 과목은 같은과목이다.");
        } else {
            System.out.println("두 과목은 다른과목이다.");
        }

        // 두 과목은 다른과목이다.

        // printSubject(2); // subjects 타입이 아니므로 전달 불가
        printSubject(Subjects.HTML);

        // 선언된 상수 순회
        for (Subjects s : Subjects.values()) {
            // s.ordinal() : 현재 상수의 선언위치를 0 부터 반환
            // s.name(): 같은 상수의 소스 이름을 문자열로 반환
            // value: 직접 만들지 않아도 Enum을 선언하면
            // 자바 컴파일러가 자동으로 만들어주는 메서드
            System.out.println((s.ordinal() + 1) + ". " + s.name());
        }

        /*
        * 1. JAVA
          2. MYSQL
          3. JDBC
          4. HTML
          5. CSS

        * */


    }

    public static void printSubject(Subjects subjects) {
        System.out.println("전달받은 과목 : " + subjects.toString());
        // 일반 객체는 toString()을 재정의하지 않으면 클래스명@해시코드가 출력되지만, Enum 객체는 기본적으로 상수 이름이 출력

    }
}
