package com.ohgiraffers.section01.string;

public class Application {

    public static void main(String[] args) {
        /*[String]
        문자열 처리
     */

        String rawData = "   [PROD-001] Apple iPhone 16 Pro | a17 bionic | 2500000   ";
        System.out.println(rawData); //    [PROD-001] Apple iPhone 16 Pro | a17 bionic | 2500000

        // trim() : 문자열의 앞/뒤 공백 제거
        String trimmedData = rawData.trim();
        System.out.println("trimmedData = " + trimmedData);
        // trimmedData = [PROD-001] Apple iPhone 16 Pro | a17 bionic | 2500000

        // toUpperCase() / toLowerCase() : 대/소문자 변환
        String upperData = trimmedData.toUpperCase();
        System.out.println("upperData = " + upperData);
        // upperData = [PROD-001] APPLE IPHONE 16 PRO | A17 BIONIC | 2500000

        /* indexOf() : 특정 문자의 위치(인덱스) 반환
        * 찾지 못하면 -1 반환*/
        int opening = upperData.indexOf('[');
        int codeEnd = upperData.indexOf(']');

        System.out.println("여는 괄호 : " + opening); // 여는 괄호 : 0
        System.out.println("닫는 괄호 : " + codeEnd); //  닫는 괄호 : 9
        
        /* substring(시작 인덱스, 끝 인덱스) : 문자열의 특정 구간을 잘라내어 새로운 문자열로 반환 */
        String productCode = upperData.substring(opening + 1, codeEnd);
        /*
        * substring()은 시작 인덱스는 포함하고 끝 인덱스는 포함하지 않으므로,
        * 앞의 '['는 +1로 제외하지만 뒤의 ']'는 끝 인덱스를 그대로 사용
        * */

        System.out.println("productCode = " + productCode); //productCode = PROD-001
        
        /* replace(): 문자열 내의 특정 문자(열)를 다른 문자(열)로 치환한 새로운 문자열 반환  */
        String replaceName = upperData.replace("IPHONE 16 PRO", "GALAXY S26");
        System.out.println("replaceName = " + replaceName);
        // replaceName = [PROD-001] APPLE GALAXY S26 | A17 BIONIC | 2500000

        /*문자열 생성 방식
        * 리터럴 방식
        * - String Constant Pool의 같은 문자열을 재사용
        *
        * new String() 방식
        * - 새로운 String 객체를 생성 */
        String str1 = "java";
        String str2 = "java";
        String str3 = new String("java");
        String str4 = new String("java");

        System.out.println(str1 == str2); //true
        System.out.println(str3 == str4); // false

        System.out.println(str3.equals(str4)); //true
        // String 클래스에서 이미 equals() 메서드를 재정의해 놓았기 때문
        // 따라서 문자열 비교는 equals를 하는것이 안전하다

        // null에 안전한 문자열 비교
        String input = null;
        System.out.println("java".equals(input)); //false
    //     System.out.println(input.equals("java")); //NullPointerException

        /* 문자열은 '불변(immutable)' 객체이다
        * '+' 연산등으로 문자열을 변경하면 기존 문자열이 수정되는 것이 아니라,
        * 새로운 문자열 객체가 생성되고 변수가 새 문자열을 가리키게 된다. */

        str2 += " mysql"; // str2 = str2 + " mysql"
        System.out.println("str1 == str2 : " + (str1 == str2)); // str1 == str2 : false

        /* split() : 특정 구분자를 기준으로 문자열을 잘라 '문자열 배열'로 반환한다 */
        String emp= "100/홍길동/서울/교육부";
        String[] empArr = emp.split("/");

        for(String info : empArr) {
            // .isEmpty() : 문자열의 길이가 0이면 true, 아니면 false 반환
            if(info.isEmpty()) {
                System.out.println("정보 없음");
            } else {
                System.out.println(info);
            }
        }

        /*
        * 자바의 split()은 구분자를 정규식으로 해석한다.
        */
        String fileName = "report.final.pdf";
        String[] fileNameParts = fileName.split("\\.");
        for(String part : fileNameParts) {
            System.out.println(part);
        }

        /*
         * split(.)만하면 출력이 안됨
         * split()은 정규표현식을 사용하기 때문에 .만 입력하면 모든 문자를 구분자로 인식하므로,
         * 마침표 자체를 기준으로 문자열을 나누려면 split("\\.")을 사용해야 한다
         * */


        /*
        * report
            final
            pdf
        * */


        /*
        * 이스케이프 문자
        * 문자열 내에서 줄바꿈, 탭, 따옴표 등 특별한 기능을 하는문자, 역슬래시(\)로 시작한다.
        * \n (줄바꿈), \t (탭), \" (쌍따옴표), \'(홑따옴표), \\ (역슬래시)
        * */



    }

}
