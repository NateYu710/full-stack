package com.ohgiraffers.section01.extend;

public class Car {

    private boolean runningStatus; // 현재 달리고 있는지

    public Car() {
        System.out.println("Car 클래스의 기본 생성자 호출...");
    }

    public void run() {
        runningStatus = true;
        System.out.println("자동차가 달립니다");
    }

    public void stop() {
        runningStatus = false;
        System.out.println("자동차가 멈춥니다.");
    }

    public void soundHorn() {
        // runningStatus에 따라 다르게 울리게 함
        if(isRunning()) {
            System.out.println("빵빵~");
        } else {
            System.out.println("주행중이 아닙니다.");
        }
    }
    /* protected : 같은 패키지에서 접근할 수 있으며,
    * 다른 패키지에서는 상속받은 자식 ㅡㄹ래스가 사용할 수 있다. */
    protected boolean isRunning() {
        return runningStatus;
    }
}
