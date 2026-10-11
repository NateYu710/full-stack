import java.util.Scanner;

public class Application3 {
    public static void main(String[] args) {
        //실습 1
        Scanner sc = new Scanner(System.in);
        System.out.print("국어 점수를 입력하세요 : ");
        double korean = sc.nextDouble();
        System.out.print("영어 점수를 입력하세요 : ");
        double english = sc.nextDouble();
        System.out.print("수학 점수를 입력하세요 : ");
        double math = sc.nextDouble();

        double avg = (korean + english + math) / 3;

        if(avg >= 60 && korean >= 40 && english >=40 && math >= 40) {
            System.out.println("합격입니다");
        } else {
            if(avg < 60 ) {
                System.out.println("평균 점수 미달로 불합격입니다.");
            }
            if(korean < 40) {
                System.out.println("국어 점수 미달로 불합격입니다.");
            }
            if(english < 40) {
                System.out.println("영어 점수 미달로 불합격입니다.");
            }
            if(math < 40) {
                System.out.println("수학 점수 미달로 불합격입니다.");
            }
        }

        //실습 2
        System.out.print("월 급여 입력 : ");
        int salary = sc.nextInt();
        System.out.print("매출액 입력 : ");
        int sales = sc.nextInt();
        double bonusRate;

        if (sales >= 50000000) {
            bonusRate = 0.05;
        } else if (sales >= 30000000) {
            bonusRate = 0.03;
        } else if (sales >= 10000000) {
            bonusRate = 0.01;
        } else {
            bonusRate = 0;
        }
        double bonus = sales * bonusRate;
        double totalSalary = salary + bonus;

        System.out.println("=============================================");
        System.out.println("매출액 : " + sales);
        System.out.println("보너스율 : " + (int)(bonusRate * 100) + "%");
        System.out.println("월 급여 : " + salary);
        System.out.println("보너스 금액 : " + (int)bonus);
        System.out.println("=============================================");
        System.out.println("총 급여 : " + (int)totalSalary);

        //실습 3
        System.out.print("정수를 입력하세요 : ");
        int num = sc.nextInt();
        int count = 0;
        String result = "";
        while(count < num) {
            count ++;
            if (count%2 == 1 ) {
                result += "수";
            } else {
                result += "박";
            }
        }
        System.out.println(result);


        // 실습 4
        int random = (int)(Math.random() * 100) + 1;
        int count2 = 0;
        while(true) {
            count2 ++;
            System.out.print("정수를 입력하세요 : ");
            int num2 = sc.nextInt();
            if(num2  == random) {
                System.out.println("정답입니다. " + count2 + "회만에 정답을 맞추셨습니다.");
                break;
            } else if (num2 > random) {
                System.out.println("입력하신 정수보다 작습니다.");
            } else {
                System.out.println("입력하신 정수보다 큽니다.");
            }
        }
    }
}
