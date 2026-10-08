package com.ohgiraffers.section02.encapsulation;

public class Application {
    public static void main(String[] args) {
        Children child1 = new Children();
        Children child2 = new Children();
//        child1. nickname = "튼튼이";
//        child1.age = -10;

//        System.out.println(child1.nickname);
//        System.out.println(child1.age);

        child1.setAge(-10); //setter 메소드로 나이 설정
        child2.setAge(8);
        System.out.println(child1.getAge());

        /*
        * 나이는 음수일 수 없습니다.
          0
         * */

        System.out.println(child2.getAge()); //8
    }


}
