package com.ohgiraffers.section01.extend;

public class Application {
    /*
    * [상속]
    * 공통 상태와 기능을 부모 클래스에 정의하고,
    * 자식 클래스가 그것을 이어받아 사용하거나 자신의 목적에 맞게 확장하는 방법
    * */

    public static void main(String[] args) {
        Car car = new Car(); // Car 클래스의 기본 생성자 호출...

        car.run(); // 자동차가 달립니다
        car.soundHorn(); // 빵빵~
        car.stop(); //  자동차가 멈춥니다.
        car.soundHorn(); // 주행중이 아닙니다.

        FireCar fireCar = new FireCar();
        /* Car 클래스의 기본 생성자 호출... (부모 생성자 호출 [super])
        FireCar 기본 생성자 호출... */

        fireCar.run(); //자동차가 달립니다
        fireCar.soundHorn(); //빠아아아앙!!!@@!@@!@@
        fireCar.stop(); // 자동차가 멈춥니다.
        fireCar.soundHorn(); // 소방차가 갑니다 비키세요~!!!

        fireCar.sprayWater(); //불난 곳을 발견 했습니다 물을 뿌립니다!!

        RacingCar racingCar = new RacingCar(); //Car 클래스의 기본 생성자 호출...
        racingCar.run(); // 자동차가 달립니다
        racingCar.soundHorn();
        /*
        * 레이싱카가 전속력으로 질주합니다!!!!!!
            빵빵~
        * */

    }
}
