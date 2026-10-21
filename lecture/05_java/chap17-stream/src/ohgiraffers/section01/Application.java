package ohgiraffers.section01;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Application {
    public static void main(String[] args) {

        /*
        * Stream API
        * 컬렉션에 들어있는 여러 데이터를 조건에 따라 거르고, 바꾸고 모으는 작업을
        * 읽기 좋게 만들어주는 도구이다.
        * */

        List<String> names = Arrays.asList("홍길동", "유관순", "이순신", "신사임당", "장보고", "강감찬", "이성계");

        for (String name : names) {
            System.out.println(name); // list 요소를 하나하나 출력
        }

        // .stream(): 요소를 차례로 처리할 Stream을 만든다
        names.stream()
                .forEach(name -> System.out.println(name));
        // forEach()가 함수형 인터페이스인 Consumer<T>를
        // 매개변수로 받기 때문에 람다식 사용 가능

        // filter , map, forEach로 파이프라인 만들기
        // 이름이 세 슬자인 사람만 골라 대괄호를 붙인 뒤 출력


        /* for/if 사용 */
        for (String name : names) {
            if (name.length() == 3) {
                String decoratedName = "[" + name + "]";
                System.out.println(decoratedName);
            }
        }

        /*
        * [홍길동]
        [유관순]
        [이순신]
        [장보고]
        [강감찬]
        [이성계]
        * */

        /* Stream 사용 */
        names.stream()
                .filter(name -> name.length() == 3)
                .map(name -> "[" + name + "]")
                .forEach(decoratedName -> System.out.println(decoratedName));

          /*
        * [홍길동]
        [유관순]
        [이순신]
        [장보고]
        [강감찬]
        [이성계]
        * */

        List<String> leeFamily = names.stream()
                .filter(name -> name.startsWith("이"))
                .sorted(Comparator.reverseOrder())
                // Stream의 데이터를 정렬하는 중간 연산
                // Comparator.reverseOrder: 데이터를 내림차순으로 정렬
                .collect(Collectors.toList());
        // : Collectors.toList(): Stream으로 처리한 결과를 다시 List로 저장
        // 최종 결과물들을 새로운 List로 수집

        System.out.println("이씨 가문 사람들 : " + leeFamily);
        System.out.println("원본 이름 목록 : " + names);

        // 최종 연산
        // 1.count() : 조건에 맞는 요소의 개수 세기

        long leeCount = names.stream()
                .filter(name -> name.startsWith("이"))
                .count(); // count는 long타입 반환
                // 중간 연산을 통과한 요소 수를 long으로 반환하는 최종 연산
        System.out.println(leeCount); //2


        // 2. anyMatch() : 하나라도 조건을 만족하면 true
        boolean hasJang = names.stream()
                .anyMatch(name -> name.equals("장보고")); // 하나라도 조건을 만족하면 true
        System.out.println(hasJang); //true


        // 3. allMatch() : 모든 요소가 조건을 만족하면 true
        boolean isAllThreeLetters = names.stream()
                .allMatch(name -> name.length() == 3); // 모든 요소가 조건을 만족하면 true
        System.out.println(isAllThreeLetters);
        // false


        // Stream은 최종 연산이 한 번 실행되면 소비된다. 다시 사용 불가하다.
        Stream<String> stream = names.stream();
        System.out.println( "첫 번째 최종 연산 결과 : " + stream.count()); //첫 번째 최종 연산 결과 : 7
        // stream 종료
        stream.forEach(System.out::println); // IllegalStateException발생


    }
}
