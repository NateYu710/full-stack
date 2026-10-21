package com.ohgiraffers.section01.list.run;

import java.util.ArrayList;
import java.util.List;

public class Application6 {
    public static void main(String[] args) {
        /*
        * [제네릭 와일드 카드]
        * 호출할 떄 들어오는 정확한 요소 타입은 달라도
        * 메소드가 허용할 타입의 범위를 정하는 문법
        * */

        List<Integer> integerList = new ArrayList<>();
        integerList.add(10);
        integerList.add(20);

        List<Double> doubleList = new ArrayList<>();
        doubleList.add(1.5);
        doubleList.add(2.5);

      //  List<Number> numberList = integerList;
        /* 객체 하나를 대입하는 것과 리스트 전체를 대입하는 것은 다르다
        *
        * */
        printAnyList(integerList);
        /*
        * 10
        * 20
        * */
        printAnyList(doubleList);

        /*
        * 1.5
        * 2.5
        * */
        System.out.println("정수 합계 : " + sum(integerList));
        // 정수 합계 : 30.0
        System.out.println("실수 합계 : " + sum(doubleList));
        // 실수 합계 : 4.0

        List<Number> numberList = new ArrayList<>();
        addInteger(numberList);
        System.out.println("numberList = " + numberList); // [100]

    }
    private static void printAnyList(List<?> list) {

        for(Object value : list) {
            System.out.println(value);
        }
    }

    private static double sum(List<? extends Number> list) {
        double total = 0;

        for (Number number : list) {
            total += number.doubleValue();
        }
        return total;
    } // 읽을때 유리

    private static void addInteger(List<? super Integer> list) {
        list.add(100);
    } // 새로 쓸때 유리


}
