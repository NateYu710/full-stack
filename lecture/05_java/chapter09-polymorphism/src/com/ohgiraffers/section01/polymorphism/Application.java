package com.ohgiraffers.section01.polymorphism;

public class Application {
    public static void main(String[] args) {

        /*
        * [다형성]
        * 부모 타입 하나로 여러 자식 객체를 다룰 수 있다.
        * 같은 메소드를 호출해도 실제 객체에 따라 다른 동작이 실행되는 성질이다.
        *
        * 부모타입 변수 = new 자식클래스();
        *
        * 컴파일 시: 부모 타입의 멤버만 접근 가능
        * 실행(runtime) 시: 오버라이딩된 자식 메소드가 실행됨
        * 자식 고유 멤버(ex.자식 고유 메서드) 사용 시 다운캐스팅 필요
        * */



        Zookeeper zooKeeper1 = new Zookeeper();
        zooKeeper1 .feed(new Rabbit());
        // Rabbit 객체를 생성해서 zooKeeper1의 feed() 메서드에 인자로 전달
        /*
        * Rabbit rabbit = new Rabbit();
            zooKeeper1.feed(rabbit);
        // 이거와 같은 의미
        * */


        /*
        *
            토끼에게
            토끼가 당근을 먹고 있습니다
        * */
        zooKeeper1.feed(new Tiger());

        /*
        * 호랑이에게
          호랑이가 고기를 맛있게 먹고 있습니다.
        * */

        // 다형성 적용 후
        // 부모의 클래스인 Animal타입으로 변경
        // 업캐스팅 - 자식 객체의 참조값을 부모 타입 변수에 저장
        Animal a1 = new Rabbit(); // 토끼가 뀨~ 귀엽게 울음소리를 냅니다.
        Animal a2= new Tiger(); // 호랑이가 울부짖습니다 어흥~~


        // ctrl 누르고 cry이를 누르게 되면 animal 타입을 가리킨다
        /*
        * [동적 바인딩]
        * 컴파일 시점에는 부모의 메소드를 호출하는 것으로 보이지만,
        * 실행 시점(Runtime)에는 참조 변수가 실제로 가리키는 객체 (Rabbit, Tiger)의
        * 오버라이딩 된 메소드가 실행되는 원리이다.
        * */
        a1.cry();
        a2.cry();
        
        // a1.jump(): // 부모타입으로는 자식만의 고유 기능은 접근 불가

        ((Rabbit)a1).jump(); // 다운캐스팅: 부모타입의 변수를 자식타입의 변수로 형변환
        // 토끼가 점프를 뜁니다~!!
        // ((Rabbit)a2).jump();  // a2의 실제 객체는 Tiger이기 때문에 Rabbit으로 형변환 불가

        /* 다운캐스팅 전에 instanceof 연산자로 가리키는 객체를 확인하는 것이 안전 */
        System.out.println("a1은 Tiger 타입인가? " + (a1 instanceof Tiger)); //false

        if (a1 instanceof Rabbit) {
            ((Rabbit)a1).jump();
        }
        // 토끼가 점프를 뜁니다~!!

        /* 다형성을 활용한 객체 배열 */
        Animal[] animals = new Animal[5];
        animals[0] = new Rabbit();
        animals[1] = new Tiger();
        animals[2] = new Rabbit();
        animals[3] = new Tiger();
        animals[4] = new Rabbit();

        for (Animal animal : animals) {
            animal.cry(); //동적 바인딩 발생
        }
        /*
        * 토끼가 뀨~ 귀엽게 울음소리를 냅니다.
        호랑이가 울부짖습니다 어흥~~
        토끼가 뀨~ 귀엽게 울음소리를 냅니다.
        호랑이가 울부짖습니다 어흥~~
        토끼가 뀨~ 귀엽게 울음소리를 냅니다.
        * */

        for (Animal animal : animals) {
            if (animal instanceof Rabbit) {
                ((Rabbit)animal).jump();
            } else if (animal instanceof Tiger) {
                ((Tiger)animal).bite();
            }
        }

        Zookeeper zooKeeper2 = new Zookeeper();

        for (Animal animal : animals) {
            zooKeeper2.feed(animal);
        }
        /**
         * 다형성 적용
         토끼가 당근을 먹고 있습니다
         다형성 적용
         호랑이가 고기를 맛있게 먹고 있습니다.
         다형성 적용
         토끼가 당근을 먹고 있습니다
         다형성 적용
         호랑이가 고기를 맛있게 먹고 있습니다.
         다형성 적용
         토끼가 당근을 먹고 있습니다
         * */

    }
}
