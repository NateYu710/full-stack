package com.ohgiraffers.section01.generic;

public class Application {

    public static void main(String[] args) {
        /*
         * [제네릭]
         * 클래스나 메소드에서 사용할 자료형을 미리 고정하지 않고
         * 사용하는 시점에 결정하는 문법
         *
         * 타입별 중복 코드를 줄이고
         * 잘못된 타입의 데이터가 들어오는 것을 방지한다
         * */

        NomalBox normalBox = new NomalBox();

        normalBox.setContent("안녕하세요");
        String content = (String)normalBox.getContent(); //다운 케스팅
        // 반환 값이 object라 에러뜸


//        normalBox.setContent(123);
//        String wrongContent = (String)normalBox.getContent();

        /*
        * setContent(123)으로 저장한 값은 Integer 객체인데, getContent()로
        * 가져온 값을 String으로 강제 형변환하려고 했기 때문에 오류가 발생
        * */

        /*
        * Object 에는 숫자도 저장할 수 있어 자체 컴파일 오류가 발생하지 않는다.
        * 하지만 런타임 시점에 숫자를 String으로 바꾸려는 순간 ClassCaseException이 발생한다.
        * */

        // T자리에 들어갈 자료형을 넣어줌
        GenericBox<String> stringBox = new GenericBox<>();

        stringBox.setContent("안녕");
        // stringBox.setContent(123) 다른 자료형은 들어갈 수 없음

        String strContent = stringBox.getContent();
        /*
        * 제네릭 타입 인자에는 int같은 기본 자료형이 아니라 참조 자료형을 사용한다.
        * 따라서 int가 아닌 Integer로 지정한다.
        * */

        GenericBox<Integer> integerBox = new GenericBox<>();
        // <int>는 참조자료형이라 불가

        integerBox.setContent(123); // autoboxing됨 int -> integer로
        int intContent = integerBox.getContent(); //오토언박싱
        System.out.println(intContent + 1); //124

    }
}
