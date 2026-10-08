public class Application1 {
    public static void main(String[] args) {
        // 실습 1
        int num1 = 20;
        int num2 = 30;

        System.out.println("더하기 결과 : " + (num1 + num2));
        System.out.println("빼기 결과 : " + (num1 - num2));
        System.out.println("곱하기 결과 : " + num1 * num2);
        System.out.println("나누기한 몫 : " + num1 / num2);
        System.out.println("나누기한 나머지 : " + num1 % num2);

        // 실습2

        double width = 12.5;
        double height = 36.4;

        double parameter = (width + height) * 2;
        double area = (width * height);
        System.out.println("둘레 : " + parameter);
        System.out.println("면적 : " + area);

        //실습 3
        char ch = 'a';
        System.out.println("문자 a의 unicode: " + (int) ch);

        //실습 4

        double korean = 80.5;
        double math = 50.6;
        double english = 70.8;

        System.out.println("총점 : " + (int) (korean + math + english));
        System.out.println("평균 : " + (int) ((korean + math + english) / 3));


    }
}
