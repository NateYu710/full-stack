package com.ohgiraffers.com.ohgiraffers.section03.grammer;

import java.util.Locale;

public enum UserRole {
    GUEST("게스트"),
    CONSUMER("구매자"),
    PRODUCER("판매자"),
    ADMIN("관리자");

    // 상수 객체를 생성하면서 생성자에 값 전달

    private final String description;

    private UserRole(String description) {
        System.out.println("UserRole 생성자 호출" + description);
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public String getNmaeToLowerCase() {
        // this.name() : 선언 이름을 문자열로 반환
        return this.name().toLowerCase();
    }
}
