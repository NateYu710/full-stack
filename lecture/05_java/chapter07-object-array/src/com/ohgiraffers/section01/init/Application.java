package com.ohgiraffers.section01.init;

public class Application {
    public static void main(String[] args) {

        Car car1 = new Car("페라리", 300);
        Car car2 = new Car("람보르기니", 350);
        Car car3 = new Car("롤스로이스", 250);

        // 각각 배열을 만들어주는 경우
        car1.driveMaxSpeed(); //페라리이 300로 쌩~ 달려갑니다!
        car2.driveMaxSpeed(); // 람보르기니이 350로 쌩~ 달려갑니다!
        car3.driveMaxSpeed(); // 롤스로이스이 250로 쌩~ 달려갑니다!

        // 객체 배열 선언
        Car[] carArray = new Car[3]; //3칸짜리 배열만 선언(기본값은 null [연결된 객체가 아직 없는 상태])

        System.out.println(carArray[0]); //null

        // carArray[0].driveMaxSpeed();
        /*
        * NullPointerException 발생
        * - carArray[0]에 객체가 없는데 driveMaxSpeed() 메서드를 호출했기 때문
        * */

        carArray[0] = new Car("페라리", 300);
        // carArray[0]이 참조값
        carArray[1] = new Car("람보르기니", 350);
        carArray[2] = new Car("롤스로이스", 250);

        carArray[0].driveMaxSpeed(); // 페라리이 300로 쌩~ 달려갑니다!

        for(int i = 0; i < carArray.length; i++) {
            carArray[i].driveMaxSpeed();

            /*
            * 페라리이 300로 쌩~ 달려갑니다!
                람보르기니이 350로 쌩~ 달려갑니다!
                롤스로이스이 250로 쌩~ 달려갑니다!
            * */
        }
        System.out.println();

        // 객체 배열도 선언과 동시에 객체 배열 초기화가 가능하다
        Car[] carArray2 = {
                new Car("페라리", 300),
                new Car("람보르기니", 350),
                new Car("롤스로이스", 250),
        };
        // 향상된 for문으로 순회
        for (Car car : carArray2) {
            car.driveMaxSpeed();
        }

        /*
            * 페라리이 300로 쌩~ 달려갑니다!
                람보르기니이 350로 쌩~ 달려갑니다!
                롤스로이스이 250로 쌩~ 달려갑니다!
            * */

        // 가장 빠른 자동차 찾기 : 객체 배열에 최댓값 탐색 방법 적용
        Car fastestCar = carArray[0];

        for(int i = 1; i < carArray.length; i++) {
            if(carArray[i].getMaxSpeed() > fastestCar.getMaxSpeed()) {
                fastestCar = carArray[i];
            }
        }
        System.out.println(fastestCar.getModelName() + "이 가장 빠르며, 시속은 " + fastestCar.getMaxSpeed()+"입니다");
        //람보르기니이 가장 빠르며, 시속은 350입니다


    }
}
