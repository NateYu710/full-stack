package com.ohgiraffers.section01.array;

public class Application1 {
    public static void main(String[] args) {

        int score1 = 80;
        int score2 = 90;
        int score3 = 75;

        int sumOfScores = score1 + score2 + score3;
        double avgOfScores = sumOfScores / 3.0;

        System.out.println("합계 :" + sumOfScores); // 합계 :245
        System.out.println("평균: " + avgOfScores); //  평균: 81.66666666666667

        int[] scores = new int[5]; // 길이 5의 int 배열을 생성

        scores[0] = 80;
        scores[1] = 90;
        scores[2] = 75;
        scores[3] = 90;
        scores[4] = 100;
       //  System.out.println(scores); // [I@9807454

        int sum2 = 0;
        for (int i =0; i < scores.length; i++) {
            sum2 += scores[i];
        }

        double avg2 = sum2 / (double)scores.length;

        System.out.println(sum2); //435
        System.out.println(avg2); //87.0

    }
}
