package com.ohgiraffers.section01.object;

public class Application {
    public static void main(String[] args) {

        /*
        * [API]
        * 프로그램을 만들 때 사용할 수 있도록 미리 제공되는 클래스와 메소드의 사용 규칙
        *
        * [Object}
        * 자바의 최상위 객체로서, 모든 클래스는 자동으로 Object 클래스를 상속한다.
        * */
        
        Book book1 = new Book(1,"홍길동전", "허균", 50000);


        // 자바가 book1을 문자열로 변경하기 위해 book1.toString()을 호출한다
        /*
        * Object.toString()의 기본형식은 '클래스명@16 진수 형태의 해시값'이다
        * 사람이 보기에 의미없는 정보이기 때문에 객체의 필드값을 보여주도록 오버라이딩 하여 사용
        * */
        System.out.println("book1 = " + book1);
        //toString 메서드를 오버라이드 안했을때:
        // book1 = com.ohgiraffers.section01.object.Book@2f4d3709
        // toString 메서드를 오버라이드 했을때:
        // book1 = Book{number=1, title='홍길동전', author='허균', price=50000}

        Book book2 = new Book(2,"목민심서", "정약용", 30000);
        Book book3 = new Book(2,"목민심서", "정약용", 30000);

        System.out.println("동일성 비교(==) : " + (book2 == book3) ); // 동일성 비교(==) : false
        /*
        * Object.equals()의 기본 기능은 동일성 비교이다
        * 하지만 서로 다른 객체라도 필드의 내용이 같으면 '같다(동등하다)'고 할때가 있다
        * 이런 '동등성 비교'를 위해 equals()를 오버라이딩한다
        * */
        System.out.println("동등성 비교(equals) : " + (book2.equals(book3))); // 동등성 비교(equals) : false
        /*
        * equals()를 재정의하지 않으면 ==와 동일하게 작동하기 때문(즉 재정의 필요)
        * */

        /*
        * 재정의 후:
        * 동일성 비교(==) : false
           동등성 비교(equals) : true
        * */
    }
}
