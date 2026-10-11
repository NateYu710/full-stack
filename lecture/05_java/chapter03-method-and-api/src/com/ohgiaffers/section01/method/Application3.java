package com.ohgiaffers.section01.method;

public class Application3 {
    public static void main(String[] args) {
        /*
        * static 메소드
        * 특정 객체가 아니라 클래스에 속하므로 객체를 만들지 않고 호출한다.
        *
        * 일반 메소드 = 객체를 만들어야 호출 가능
        static 메소드 = 객체 없이 클래스 이름으로 바로 호출 가능
        *
        * 클래스명.메소드명();
        * */

        System.out.println(Application3.sumTwoNumbers(10, 20)); // 30
        // new를 이용해 객체를 생성할 필요가 없음

        // 동일한 클래스(현재 클래스: Application3)
        // 내에 작성된 static 메서드는 클래스명 생략 가능
        System.out.println(sumTwoNumbers(10, 20)); //30
    }

    public static int sumTwoNumbers(int first, int second) {
        return first + second;
    }
}
