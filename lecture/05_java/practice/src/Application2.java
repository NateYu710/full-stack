import java.util.Scanner;

public class Application2 {
    public static void main(String[] args) {
        //실습 1
        Scanner sc = new Scanner(System.in);
        System.out.print("첫번째 정수를 입력하세요 : ");
        int num1 = sc.nextInt();
        System.out.print("두번째 정수를 입력하세요 : ");
        int num2 = sc.nextInt();
        int result = (num1 > num2) ? num1 : num2;
        System.out.println("두 수 중 큰수는 " + result + " 입니다.");

        //실습 2
        System.out.print("점수를 입력하세요 : ");
        int score = sc.nextInt();
        String pass = (score >= 60) ? "합격입니다" : "아쉽지만 불합격입니다.";
        System.out.println(pass);

        //실습 3
        System.out.print("정수를 입력하세요 : ");
        int num3 = sc.nextInt();
        String result2 = (num3 % 2 == 0) ? "짝수" : "홀수";
        System.out.println("입력하신 수는 " + result2 + "입니다");

        //실습 4
        System.out.print("점수를 입력하세요 : ");
        double score2 = sc.nextDouble();
        char result3 = switch((int)score2 / 10){
            case 9,10 -> 'A';
            case 8 -> 'B';
            case 7 -> 'C';
            case 6 -> 'D';
            case 5,4,3,2,1,0 -> 'F';
            default -> {
                System.out.println("점수를 잘못 기입하셨습니다");
                yield 'X';
            }
        };
        System.out.println("유능한의 이번 점수 등급은 " + result3 + "입니다");

        //실습 5
        System.out.print("몇 월인지 입력하세요 : ");
        int month = sc.nextInt();
        System.out.print("몇 일인지 입력하세요 : ");
        int date = sc.nextInt();
        if(month >= 1 && month <= 6 && date >= 1 && date <= 15 ) {
            System.out.println("유능한의 선물은 배민쿠폰 입니다");
        } else if(month >= 7 && month <= 12 && date >= 16 && date <= 31) {
            System.out.println("유능한의 선물은 스타벅스 커피입니다");
        } else {
            System.out.println("유능한의 선물은 사탕입니다.");
        }

    }
}
