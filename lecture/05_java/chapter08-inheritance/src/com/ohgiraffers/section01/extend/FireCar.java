package com.ohgiraffers.section01.extend;

// 자식 클래스
public class FireCar extends Car {

    public FireCar() {
         super(); // 부모 클래스의 기본 생성자를 호출
        // super 쓰지 않아도 자동호출
        System.out.println("FireCar 기본 생성자 호출...");
    }

    /*
    * 오버라이딩
    * 부모에게 물려받은 메소드를 자식의 목적에 맞게 같은 형태로 다시 작성하는 것
    *
    * */
    @Override // 컴파일러가 부모 메소드를 올바르게 재정의했는지 검사
    // 메서드 이름이나 매개변수가 잘못되면 컴파일 오류가 발생(soundHorn -> soundHorn1 이렇게 바꾸면 에러)
    public void soundHorn() {
        if (isRunning()) {
            /* 속받은 부모의 일반 메서드도 자식 클래스의 일반 메서드에서
            객체를 새로 생성하지 않고 호출가능*/
            System.out.println("빠아아아앙!!!@@!@@!@@");
        } else {
            System.out.println("소방차가 갑니다 비키세요~!!!");
        }
    }
    // 추가적인 자식 클래스 기능
    public void sprayWater() {
        System.out.println("불난 곳을 발견 했습니다 물을 뿌립니다!!");
    }

}
