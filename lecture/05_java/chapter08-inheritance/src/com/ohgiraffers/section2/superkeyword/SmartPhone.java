package com.ohgiraffers.section2.superkeyword;

public class SmartPhone extends Product {

    // 스마트폰만의 통신사(agency) 필드를 추가
    private String agency;

    // 부모 필드 포함 모든 필드를 초기화 하는 생성자

    public SmartPhone(String code, String name, int price, String agency) {
        super(code, name, price);
        this.agency = agency;
    }


    // getINformation() 메소드 오버라이딩

    @Override
    public String getInformation() {
        String parentsInfo = super.getInformation();
        String agencyInfo = " " + agency;
        return parentsInfo + agencyInfo;

    }
}
