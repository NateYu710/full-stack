package com.ohgiaffers.section01.method;

public class Application2 {
    public static void main(String[] args) {

        /* 전달인자(argument)와 매개변수(parameter)
            - 메소드를 호출할때 넘겨주는 값을 '전달인자' 라고 하며
            - 메소드에서 이 값을 받기 위해 선언된 변수를 '매개변수'라고 한다.
         */

        Application2 app2 = new Application2();
        app2.printAge(5);
        // 당신의 나이는5세 입니다

        int myAge = 10;
        app2.printAge(myAge);
        // 당신의 나이는10세 입니다

        // 매개변수의 타입, 개수, 순서를 정확히 맞춰서 전달해야 한다.
        app2.printUserInfo("판다", 3, '남');

        /*void는 반환값이 없다는 뜻
           void가 아닌 반환 타입을 작성했다면 그 타입에 맞는 값을 반드시 반환해야 한다.
           반환된 값은 변수에 저장하거나 다른 메소드의 전달인자로 즉시 사용할 수 있다.
         */
        String message = app2.createMessage();
        System.out.println("message = " + message); //message =hello world!

        String message2 = app2.createString("코알라", 2);
        System.out.println("message2 = " + message2);
        // message2 = 코알라님의 나이는2세 입니다.
    }

    // void 메소드는 반환값이 없음을 뜻함, 마지막줄에 return을 생략할 수 있다
    public void printAge(int age) {
        System.out.println("당신의 나이는" + age + "세 입니다");
        return; // 생략해도 문제 없음
    }

    public void printUserInfo(String name, int age, char gender) {
        System.out.println("이름:" + name + "나이:" + age + "성별:" + gender);
    }

//    public void createMessage() {
//        // return "hello world!"; // void라 반환값이 없는데 반환값을 넣어줘서 에러남
//    }

    // String 반환 타입을 작성했으므로 String 값을 반환해야 한다
    public String createMessage() {
        return "hello world!"; // void라 반환값이 없는데 반환값을 넣어줘서 에러남
    }

    public String createString(String name, int age) {
        String profile = name + "님의 나이는" + age + "세 입니다.";
        return profile;
    }
}
