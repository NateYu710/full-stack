package com.ohgiraffers.Section02.extend;

public class Application {
    public static void main(String[] args) {

        RabbitFarm<Rabbit> farm1 = new RabbitFarm<>(new Rabbit());
        // rabbit 객체를 생성해서 인자로 넣어줌
        RabbitFarm<Bunny> farm2 = new RabbitFarm<>(new Bunny());
        RabbitFarm<DrunkenBunney> farm3 = new RabbitFarm<>(new DrunkenBunney());

    //    RabbitFarm<snake> farm4 = new RabbitFarm<snake>(new snake())

        Rabbit rabbit = farm1.getAnimal();
        Bunny bunny = farm2.getAnimal();
        DrunkenBunney drunkenBunny = farm3.getAnimal();

        rabbit.cry(); //토끼가 울음 소리를 냅니다. 꾸꾸
        bunny.cry(); // 바니바니 당근당근
        drunkenBunny.cry(); // 봐니봐니 당~!@$!$#!#!근

    }
}
