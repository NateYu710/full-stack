package com.ohgiraffers.section03.interfaceimplements;

public class Application {
    public static void main(String[] args) {

        Keyboard keyboard = new Keyboard();
        Mouse mouse = new Mouse();
        Computer computer = new Computer();

        computer.connectDevice(keyboard);
        computer.connectDevice(mouse);
        /*
        * 컴퓨터의 usb포트에 장치를 연결합니다
        키보드가 usb 포트에 연결 되었습니다.
        컴퓨터의 usb포트에 장치를 연결합니다
        마우스가 usb 포트에 연결되었습니다
        * */

        computer.disconnectDevice(keyboard);
        computer.disconnectDevice(mouse);

//        컴퓨터의 usb 포트에서 장치 연결을 해제합니다.
//        키보드 연결을 해제합니다.
//        컴퓨터의 usb 포트에서 장치 연결을 해제합니다.
//        마우스 연결을 해제합니다.
    }
}
