package com.ohgiraffers.section01.uses;

public class MemberRepository {

    /*
    * Repository는 데이터를 저장하고 조회하는 역할을 담당한다.
    * 이후 데이터베이스를 배우면 이 역할을 데이터 베이스 접근 코드로 확장할 수 있다.
    * */

    private static final Member[] members;
    // final 변수인데 초기화하지 않았기 때문에 초기화하기 전까진 에러

    // 지금까지 저장한 회원 수
    private static int count;

    // static 초기화 블럭 : MemberRepository 클래스가 처음 초기화 될 때 한 번 실행된다.
    // 해당 클래스를 처음 사용할 때 자동으로 실행되는 코드
    static {
        members = new Member[10];
    }

    // 매개변수로 전달 받은 Member 객체 배열을 Repository의 members 배열에 저장
    public static boolean store(Member[] newMembers) {
        // Member[] newMembers는 새로 저장할 회원들이 있는 배열

        // 남은 공간보다 저장할 회원수가 많으면 저장하지 않음
        if (count + newMembers.length > members.length) {
            return false;
        }

        // 값 저장
        for(int i = 0; i < newMembers.length; i++) {
            members[count++] = newMembers[i];
        }
        return true;


    }
    /*저장된 members 배열 반환*/
    public static Member[] findAllMembers() {
        return members;
    }
}
