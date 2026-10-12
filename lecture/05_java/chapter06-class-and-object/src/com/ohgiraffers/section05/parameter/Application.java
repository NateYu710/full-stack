package com.ohgiraffers.section05.parameter;

import java.util.Arrays;

public class Application {
    public static void main(String[] args) {
        /*
         * 1. 값 복사(Pass by Value)
         * 2. 주소 복사(Pass by Reference)
         * */

        MethodParameter mp = new MethodParameter();

       // 실제 원본에 영향을 끼치지 않는경우
        int num = 20;
        System.out.println("호출 전 main num : " + num);
        mp.primitiveType(num); // '값'인 20dmf qhrtkgotj wjsekf
        System.out.println("호출 후 main의 num : " + num);
        /*
        * 호출 전 main num : 20
            전달받은 num :20
            변경 후 num :99
        호출 후 main의 num : 20
        * */


        // 실제 원본에 영향을 끼치는 경우
        int[] iarr = {1,2,3,4,5};
        System.out.println("호출 전 : " + Arrays.toString(iarr));
        mp.ArrayParameter(iarr); //iarr에 저장된 참조값을 복사해서 전달
        System.out.println("호출 후 : " + Arrays.toString(iarr)); //원본도 변경됨
        /*
        * 호출 전 : [1, 2, 3, 4, 5]
            전달받은 arr = [1, 2, 3, 4, 5]
            변경 후 arr = [99, 2, 3, 4, 5]
        호출 후 : [99, 2, 3, 4, 5]
        * */


        // 가변 인자 테스트
        mp.orderPizza("홍길동");
        mp.orderPizza("유관순", "불고기");
        mp.orderPizza("판다", "치즈", "페퍼로니", "올리브");

        /*
        *  홍길동고객님!!
        주문하신 피자 토핑: []
        유관순고객님!!
        주문하신 피자 토핑: [불고기]
        판다고객님!!
        주문하신 피자 토핑: [치즈, 페퍼로니, 올리브]
        * */
    }





}
