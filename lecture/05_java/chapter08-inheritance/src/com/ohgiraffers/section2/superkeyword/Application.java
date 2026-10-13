package com.ohgiraffers.section2.superkeyword;

public class Application {

    public static void main(String[] args) {

        Product product = new Product(); //Product 기본 생성자 호출
        System.out.println(product.getInformation()); // null null 0

        Product product2 = new Product("S-1234", "갤럭시", 2300000); // Product 매개변수 있는 생성자 호출
        System.out.println(product2.getInformation()); // S-1234 갤럭시 2300000

        Computer computer1 = new Computer();
        /* Product 기본 생성자 호출
           Computer 기본 생성자 호출 */
        System.out.println(computer1.getInformation());
        // null null 0 null 0

        Computer computer2 = new Computer("C-123", "컴퓨터", 2500000, "i5", 32);
        /* Product 매개변수 있는 생성자 호출
          Computer 클래스의 부모 필드도 초기화 하는 생성자 호출 */

        System.out.println(computer2.getInformation()); //C-123 컴퓨터 2500000 i5 32

        SmartPhone smartphone = new SmartPhone("A-123", "아이폰", 1800000, "KT");
        System.out.println(smartphone.getInformation());

    }
}
