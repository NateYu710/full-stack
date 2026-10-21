package com.ohgiraffers.com.ohgiraffers.section03.grammer;

public class Application {
    public static void main(String[] args) {

        UserRole admin = UserRole.ADMIN; // new 키워드로 객체 생성

        /*
        * UserRole 생성자 호출게스트
        UserRole 생성자 호출구매자
        UserRole 생성자 호출판매자
        UserRole 생성자 호출관리자
        * */

        UserRole guest = UserRole.GUEST; // 이미 위에서 준비된 상수 참조



        System.out.println(admin.name()); //ADMIN
        System.out.println(admin.getDescription()); //관리자
        System.out.println(admin.getNmaeToLowerCase()); //admin

    }
}
