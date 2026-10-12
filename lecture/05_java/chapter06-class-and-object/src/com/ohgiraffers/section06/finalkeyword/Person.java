package com.ohgiraffers.section06.finalkeyword;

public class Person {

    //final 인스턴스 필드: 객체 생성시 딱 한번 결정, 이후 변경불가

    final String ssn; // 주민등록번호 0개의 사용위치
    private String name;

    // final 필드는 반드시 '생성자'에서 초기화해야 한다.
    public Person(String ssn, String name) {
        this.ssn = ssn;
        this.name = name;
    }


    // final은 값을 변경 할 수 없기 때문에 setter필드가 생성되지 않음
    public String getSsn() {
        return ssn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
