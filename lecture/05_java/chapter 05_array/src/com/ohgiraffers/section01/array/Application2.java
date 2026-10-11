package com.ohgiraffers.section01.array;

public class Application2 {

    public static void main(String[] args) {

        /*
         * 1. 배열 선언
         *
         * int 배열 객체를 가리킬 수 있는 참조 변수만 만든다.
         * 아직 실제 배열은 생성되지 않은 상태이다.
         */

        int[] iarr;   // 권장되는 방식
        char carr[];  // 사용 가능하지만 int[] 형태를 더 권장


        /*
         * 2. 배열 할당
         *
         * new int[5]
         * → Heap 영역에 int 값 5개를 저장할 배열 객체를 생성한다.
         *
         * 생성된 배열의 참조값을 iarr에 저장하므로
         * iarr을 통해 배열에 접근할 수 있다.
         */

        iarr = new int[5];


        /*
         * 3. 선언과 동시에 배열 할당
         */

        int[] iarr2 = new int[5];
        // 길이가 5인 배열 생성
        // 값을 직접 넣지 않았기 때문에 기본값 0으로 초기화


        // 배열 생성과 동시에 초기값 지정
        int[] iarr3 = new int[]{11, 22, 33, 44, 55};


        // 선언과 동시에 초기화할 경우 new int[] 생략 가능
        int[] iarr4 = {11, 22, 33, 44, 55};


        /*
         * 4. 배열의 기본값
         *
         * 배열을 생성하면 각 칸은 자료형에 맞는 기본값으로 초기화된다.
         *
         * 정수형   → 0
         * 실수형   → 0.0
         * boolean → false
         * char    → U+0000 (널 문자)
         * 참조형   → null
         */

        for (int i = 0; i < iarr.length; i++) {
            System.out.println(i + "번 인덱스의 값: " + iarr[i]);
        }

        /*
         * 출력
         *
         * 0번 인덱스의 값: 0
         * 1번 인덱스의 값: 0
         * 2번 인덱스의 값: 0
         * 3번 인덱스의 값: 0
         * 4번 인덱스의 값: 0
         */


        /*
         * 5. 배열에 값 저장
         */

        iarr[0] = 10;
        iarr[1] = 20;
        iarr[2] = 30;

        // iarr[5] = 60;
        // 에러 발생
        // 길이가 5인 배열의 인덱스는 0 ~ 4까지만 존재한다.


        /*
         * 배열에 저장된 값 출력
         */

        for (int i = 0; i < iarr.length; i++) {
            System.out.println(i + "번 인덱스의 값: " + iarr[i]);
        }

        /*
         * 출력
         *
         * 0번 인덱스의 값: 10
         * 1번 인덱스의 값: 20
         * 2번 인덱스의 값: 30
         * 3번 인덱스의 값: 0
         * 4번 인덱스의 값: 0
         */

        // 문자열도 배열로 사용 가능
        String[] sarr = {"apple", "banana", "orange"};

        // 반복문이나 Arrays.toString()을 사용
        for (int i = 0; i < sarr.length; i++) {
            System.out.println(i + "번 인덱스의 값: " + sarr[i]);
        }
    }
}