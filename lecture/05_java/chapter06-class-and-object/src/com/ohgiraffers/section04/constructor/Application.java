package com.ohgiraffers.section04.constructor;

public class Application {
    public static void main(String[] args) {
        /*
        * 생성자는 new로 객체를 만들 떄 호출되어 객체의 초기 상태를 정한다.
        * 기본 생성자와 매개변수 있는 생성자를 차례대로 호출하며
        * setter로 나중에 값을 넣는 방식과 생성 시점에 필요한 값을 전달하는 방식을 비교한다.
        * */

        // 기본 생성자 호출
        User user = new User(); // user 클래스의 기본생성자 호출됨..
         System.out.println(user.getInformation()); // User: null null null null

        user.setId("user01");
        user.setPwd("pass01");
        user.setName("판다");
        System.out.println(user.getInformation()); // User: user01 pass01 판다 null

        //2. 매개변수 있는 생성자
        User user1= new User("user02", "pass02", "코알라");
        // id, pwd, name을 초기화하는 생성자 호출..


        System.out.println(user1.getInformation()); //user02 pass02 코알라 null
    }
}
