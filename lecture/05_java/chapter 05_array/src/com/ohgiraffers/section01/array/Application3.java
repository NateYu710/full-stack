package com.ohgiraffers.section01.array;

import java.util.Scanner;

public class Application3 {
    public static void main(String[] args) {
        /**
         *  5명의 자바 점수를 정수로 입력받아 합계와 평균을 실수로 구하는 프로그램 만들기
         */

        //1. 5명의 점수를 저장할 배열을 할당한다.

        int [] arr = new int[5];
        Scanner sc = new Scanner(System.in);

        //2. 키보드로 점수를 입력받아 배열에 값을 할당한다. (반복문 사용)
        for(int i = 0; i < arr.length; i++) {
            System.out.print("점수를 입력하세요 : ");
            int score = sc.nextInt();
            arr[i] = score;
        }

        int sum = 0;
        //3. 합계와 평균을 계산한다. (반복문 사용)
        for(int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        //4. 합계와 평균 출력
        System.out.println(sum);
        double avg = (double)sum / arr.length;
        System.out.println(avg);


    }
}
