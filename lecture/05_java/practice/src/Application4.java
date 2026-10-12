import java.util.Arrays;
import java.util.Scanner;

public class Application4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 실습 1
        System.out.print("홀수인 양의 정수를 입력하세요 : ");
        int num = sc.nextInt();
        int value = 1;
        int count = 0;

        if (num % 2 != 1 || num < 1) {
            System.out.println("양수 혹은 홀수만 입력해야 합니다.");
        } else {
            int [] arr = new int[num];
            for(int i = 0 ; i < arr.length ; i++) {
                count ++;
                if(((double)num / 2) > count) {
                    arr[i] = value;
                    value ++;
                }
                if (((double)num / 2) < count) {
                    arr[i] = value;
                    value --;
                }
            }
            for(int element : arr) {
                System.out.print(element + " ");
            }
        }
        System.out.println();

        //실습 2

        // 중복없이 배열 저장하기
        int arr2[] = new int[4];
        int count2 = 0;
        while(count2 < arr2.length) {
            boolean isDuplicated = false;
            int random = (int)(Math.random() * 10);
            for(int i = 0; i < count2; i++) {
                if(arr2[i] == random) {
                    isDuplicated = true;
                    break;
                }
            }
            if(!isDuplicated) {
                arr2[count2] = random;
                count2++;
            }
        }
         System.out.println(Arrays.toString(arr2));
        int count3 = 10;
        while (true) {
            System.out.println(count3 + "회 남으셨습니다.");
            System.out.print("4자리 숫자를 입력하세요 : ");
            int num2 = sc.nextInt();
            while (num2 < 1000 || num2 >= 10000) {
                System.out.println("4자리의 정수를 입력해야합니다.");
                System.out.print("4자리 숫자를 입력하세요 : ");
                num2 = sc.nextInt();
            }

            // 숫자안에 있는 값을 배열로 만들어주기
            int arr3[] = new int[4];
            arr3[0] = num2 / 1000;
            arr3[1] = (num2 % 1000) / 100;
            arr3[2] = (num2 % 1000 % 100) / 10;
            arr3[3] = (num2 % 1000 % 100 % 10);

            // ball과 strike 갯수 구하기
            int strike = 0;
            int ball = 0;

            for(int i = 0 ; i < arr2.length; i++) {
                for(int j = 0; j < arr3.length; j++) {
                    if(i == j && arr2[i] == arr3[j]) {
                        strike ++;
                        break;
                    } else if(arr2[i] == arr3[j]) {
                        ball ++;
                        break;
                    } else {
                        continue;
                    }
                }
            }
            if(strike == 4) {
                System.out.println("정답입니다.");
                break;
            } else {
                System.out.println("아쉽네요 " + strike + "s " + ball + "B 입니다."  );
            }
            count3 --;
            if(count3 == 0) {
                System.out.println("10번의 기회를 모두 소진하셨습니다. 프로그램을 종료합니다.");
                break;
            }
        }
    }
}
