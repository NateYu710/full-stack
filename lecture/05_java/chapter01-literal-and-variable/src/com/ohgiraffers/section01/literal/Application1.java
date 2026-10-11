package com.ohgiraffers.section01.literal;

public class Application1 {
    public static void main(String[] args) {
        /*main + enter치기
         main은 자바 프로그램이 시작되는 출발점
         자바에서는 main() 메서드의 위치가 코드 위쪽이든 아래쪽이든 상관없이,
         프로그램을 실행하면 선택한 클래스의 main()부터 시작
         */

        // 숫자 형태의 값
        System.out.println(123);

        /* 실수 형태의 값 출력 */
        System.out.println(1.23);

        // 문자 형태의 값
        System.out.println('a');
//        System.out.println('abc');
        /*두개 이상은 문자로 취급하지 않기 때문에 에러*/

        //System.out.println(''); // 아무 문자도 기록되지 않은 경우 에러발생


        // 문자열 형태의 값
        System.out.println("abc");
        System.out.println("");
        System.out.println("a");

        /*논리 형태의 값*/
        System.out.println(true);
        System.out.println(false);
    }
}
