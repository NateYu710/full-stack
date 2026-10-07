import java.util.Arrays;
import java.util.Scanner;

public class Application1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("점수를 입력하세요: ");

        int score = sc.nextInt();

        String grade = switch(score / 10) {
            case 10, 9 -> "A";
            case 8 -> "B";
            case 7 -> "C";
            default -> {
                yield "F";
            }
        };
        System.out.println(grade);
    }
}
