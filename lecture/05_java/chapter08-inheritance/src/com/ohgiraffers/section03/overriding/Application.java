package com.ohgiraffers.section03.overriding;

public class Application {
    public static void main(String[] args) {

        VendingMachine vendingMachine = new VendingMachine();
        CoffeeVendingMachine coffeeVendingMachine = new CoffeeVendingMachine();

        System.out.println(vendingMachine.vend()); //밀크 커피
        System.out.println(coffeeVendingMachine.vend()); // 아이스 아메리카노
        coffeeVendingMachine.clean(); //내부를 스팀으로 청소합니다.
        coffeeVendingMachine.powerOn(); // 자판기 전원을 켭니다


    }
}
