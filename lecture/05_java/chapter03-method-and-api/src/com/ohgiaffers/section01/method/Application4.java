package com.ohgiaffers.section01.method;

public class Application4 {
    public static void main(String[] args) {
        
        int first = 100;
        int second = 50;
        
        //non-static 메소드의 경우
        // 클래스명 변수명 = new 클래스명();
        // 변수명.메소드명();
        Calculator calc = new Calculator();
        int min = calc.minNumberOf(first, second);
        System.out.println("min = " + min); // min = 50
        
        /*
            static 메소드의 경우
            다른 클래스에 작성한 경우 클래스명을 반드시 기술
            클래스명.메소드명();
         */
        
        int max = Calculator.maxNumberOf(first, second);
        System.out.println("max = " + max); // max = 100
        
        /*static 메소드는 객체(calc)를 통해 호출하기보다
        클래스명으로 직접 호출하는 것이 권장*/

        int max2 = calc.maxNumberOf(3,1);
        System.out.println("max2 = " + max2); //max2 = 3
    }
}
