package com.ohgiraffers.section03.copy;

public class Application {
    public static void main(String[] args) {

        int[] originArr = {1,2,3,4,5};



        int[] copyArr = originArr; //값을 복사하는게 아니라 주솟값을 복사했다

        /*
        [얕은 복사]
         // 배열 자체가 복사되는 것이 아니라 배열을 가리키는 참조 값이 복사되므로
        // copyArr의 요소를 바꾸면 originArr에서도 값이 변경된다.
        메소드에 인자로 배열을 전달하거나, 메소드가 배열을 반환할 때 발생
         */


        System.out.println("같은 배열인가? " + (originArr == copyArr)); // true

        System.out.println(originArr[4]); // 5
        copyArr[4] = 80;
        System.out.println(originArr[4]); // 80 원본배열까지 바뀌어버림
    }
}
