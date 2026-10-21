package com.ohgiraffers.section01.stringbuilder;

public class Application {
    public static void main(String[] args) {

        long startTime = System.nanoTime();

        /*
        * [String]
        * - 불변 객체
        * - 연결 결과로 새로운 문자열이 만들어짐
        * - 반복적인 문자열 연결에는 비효율적일 수 있음
        *
        * [StringBuilder]
        * - 가변 객체
        * - append()로 내부 내용을 누적
        * - 반복적인 문자열 조립에 적합
        * */


        /*
        * System.nanoTime()은 자바에서 코드의 실행 시간을 측정할 때 사용하는 메서드
        * */

        String str = "";
        for(int i = 0; i < 10000; i++) {
            str += i;
        }

        long endTime = System.nanoTime();
        System.out.println(str.length());
        System.out.println("작업시간 : " + (endTime - startTime));
        // 작업시간 : 70089500

        startTime = System.nanoTime();
        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < 10000; i++) {
            sb.append(i);
        }
        String result = sb.toString(); //일반 문자열로 변환

        endTime = System.nanoTime();

        System.out.println(sb.length());
        System.out.println("StringBUilder 작업시간 : " + (endTime - startTime));
        // StringBUilder 작업시간 : 1309200

        StringBuilder sb2 = new StringBuilder("javamysql");

        /* delete(start, end): 시작 인덱스부터 종료 인덱스 전까지의 문자열 제거 */
        System.out.println(sb2.delete(4,9)); // java
        /* insert(index, value) : 지정한 인덱스에 값 삽입 */
        System.out.println(sb2.insert(0,"my")); // myjava
        /* reverse() : 문자열의 순서를 뒤집는다 */
        System.out.println(sb2.reverse()); // avajym

        // append()는 자기 자신(StringBuilder)을 반환하므로 메서드 체이닝이 가능하다
        StringBuilder query = new StringBuilder();
        query.append("SELECT ")
                .append("* ")
                .append("from product ")
                .append("where price > ")
                .append(10000);
        System.out.println(query.toString()); // SELECT * from product where price > 10000


    }
}
