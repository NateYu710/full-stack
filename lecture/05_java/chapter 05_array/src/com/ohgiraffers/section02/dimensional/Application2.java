package com.ohgiraffers.section02.dimensional;

import java.util.Scanner;

public class Application2 {
    public static void main(String[] args) {
        //3명 학생의 국어, 영어, 수학 점수를 저장할 2차원 배열
        int[][] scores = {
                {80,78,67}, {90, 77, 95}, {70, 89, 94}
        };

        // 각 학생의 총점과 평균 계산 및 출력
        for(int i = 0; i <scores.length; i++) {
            int sum = 0;
            for (int j = 0; j < scores[i].length; j++){
                sum += scores[i][j]; // 현재 학생의 j번째 과목점수 누적
            }
            double avg = sum / (double) scores[i].length;

            System.out.println((i + 1) + "번 학생의 총점 : " + sum );
            System.out.println((i + 1) + "번 학생의 평균 : " + avg );

            /*
            * 1번 학생의 총점 : 225
                1번 학생의 평균 : 75.0
                2번 학생의 총점 : 262
            2번 학생의 평균 : 87.33333333333333
            3번 학생의 총점 : 253
            3번 학생의 평균 : 84.33333333333333
             */
        }

        // 학생 수와 과목수 입력받기

        // 입력받은 수로 배열 생성

        // 점수 입력받기

        // 순회해서 출력해보기

        int[][] scores2 = new int [3][3];

        for(int i = 0; i < scores2.length; i++) {
            for(int j = 0; j < scores2[i].length; j++) {
                Scanner sc = new Scanner(System.in);
                System.out.print((i + 1) + "번째점수를 입력하세요 : ");
                int scr = sc.nextInt();
                scores2[i][j] = scr;
            }

        }

        for(int i = 0; i < scores2.length; i++) {
            System.out.println((i + 1) + "");
            for(int j =0; j < scores2[i]. length; j++) {
                System.out.print(scores2[i][j] + " ");
            }
            System.out.println();
        };


    }
}
