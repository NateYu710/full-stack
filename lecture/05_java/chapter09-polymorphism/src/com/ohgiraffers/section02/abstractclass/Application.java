package com.ohgiraffers.section02.abstractclass;

public class Application {
    public static void main(String[] args) {
        /*
        * [추상 클래스]
        * 직접 객체를 생성할 수 없으며, 자식 클래스의 공통 기능을 정의하는 부모 클래스
        * */
//            Player player = new Player();

        Warrior warrior = new Warrior();
        warrior.attack();

        Wizard wizard = new Wizard();
        wizard.attack();

        /*
        * 전사가 검으로 베기 공격을 합니다. 슈슉!!
        마법사가 파이어볼 마법으로 공격합니다!🔥🔥🔥
        * */


        Player[] players = new Player[2];
        players[0] = new Warrior();
        players[1] = new Wizard();

        for (Player player : players) {
            player.attack();
            player.levelUP();
        }
        /*
        * 전사가 검으로 베기 공격을 합니다. 슈슉!!
        레벨업!!
        마법사가 파이어볼 마법으로 공격합니다!🔥🔥🔥
        레벨업!!
        * */


    }
}
