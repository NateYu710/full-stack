package com.hw1.view;

import java.util.Scanner;
import com.hw1.controller.LibraryManager;
import com.hw1.model.dto.Member;
import com.hw1.model.dto.Book;

// 메뉴 출력, 사용자 입력, Manager 호출..
public class LibraryMenu {
    private LibraryManager lm = new LibraryManager();
    private Scanner sc = new Scanner(System.in);
    Member mem = new Member();

    public void mainMenu() {
        System.out.print("이름을 입력하세요: ");
        String name = sc.next();
        System.out.print("나이를 입력하세요: ");
        int age = sc.nextInt();
        System.out.print("성별을 입력하세요: ");
        char gender = sc.next().charAt(0);

        Member mem = new Member(name, age, gender);
        lm.insertMember(mem);
        while(true) {
            System.out.println("==== 메뉴 ====");
            System.out.println("1. 마이페이지");
            System.out.println("2. 도서 전체 조회");
            System.out.println("3. 도서 검색");
            System.out.println("4. 도서 대여하기");
            System.out.println("0. 프로그램 종료하기");
            System.out.print("당신의 선택은?: ");
            int num = sc.nextInt();
            sc.nextLine();
            switch(num) {
                case 1 :
                    System.out.println(lm.myInfo().toString());
                    break;
                case 2 : selectAll();
                    break;
                case 3 :
                    searchBook();
                    break;
                case 4 :
                    rentBook();
                    break;
                case 0 : return;
                default :
                    System.out.println("잘못된 입력을 하셨습니다");
                    break;
            }
        }
    }

    public void selectAll() {
        // LibraryManager의 selectAll() 메소드 호출하여 결과 값 Book[] 자료형에 담기
        Book[] bList = lm.selectAll();
        for(int i = 0 ; i < bList.length; i++) {
            if(bList[i] != null) {
                System.out.println(i + "번도서 : " + bList[i].toString());
            }
        }
    }

    public void searchBook() {

        System.out.print("검색할 제목 키워드를 입력하세요 : ");
        String keyword = sc.nextLine();
       Book[] searchList = lm.searchBook(keyword);
       boolean isFound = false;

       if(searchList == null) {
           System.out.println("검색 하신 책이 없습니다.");
       } else {
           for(Book book : searchList) {
               if(book != null) {
                   isFound = true;
                   System.out.println(book.toString());
               }
           }
           if(!isFound) {
               System.out.println("검색 하신 책이 없습니다.");
           }
       }

    }

    public void rentBook() {
        selectAll();
        System.out.print("대여할 도서 번호 선택: ");
        int result = lm.rentBook(sc.nextInt());
        switch(result) {
            case 0 :
                System.out.println("성공적으로 대여되었습니다");
                break;
            case 1 :
                System.out.println("나이 제한으로 대여 불가능입니다.");
                break;
            case 2 :
                System.out.println("성공적으로 대여되었습니다. 요리학원 쿠폰이 발급되었습니다." +
                        "마이페이지를 통해 확인하세요");
                break;
            default:
                System.out.println("도서 대여 처리 중 오류가 발생했습니다.");
                break;
        }

    }

    public LibraryManager getLm() {
        return lm;
    }

    public void setLm(LibraryManager lm) {
        this.lm = lm;
    }

    public Scanner getSc() {
        return sc;
    }

    public void setSc(Scanner sc) {
        this.sc = sc;
    }
}
