package com.ohgiraffers.section01.list.run;

import com.ohgiraffers.section01.list.comparator.AscendingPrice;
import com.ohgiraffers.section01.list.dto.BookDTO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Application2 {
    public static void main(String[] args) {

        List<BookDTO> bookList = new ArrayList<>();

        bookList.add(new BookDTO(1,"홍길동전", "허균", 50000));
        bookList.add(new BookDTO(3,"동의보감", "허준", 46000));
        bookList.add(new BookDTO(2,"삼국사기", "김부식", 40000));


        System.out.println(bookList);

         Collections.sort(bookList); // 객체의 number로 비교
        System.out.println("bookList = " + bookList);
        for(BookDTO book : bookList) {
            System.out.println(book);
        }

//        BookDTO{number=1, title='홍길동전', author='허균', price=50000}
//        BookDTO{number=2, title='삼국사기', author='김부식', price=40000}
//        BookDTO{number=3, title='동의보감', author='허준', price=46000}


        /*
        * 기본값과 다른 기준으로 정렬
        * 별도의 Comparator구현한 구현체인 AscendingPrice를 전달한다
        * */

        bookList.sort(new AscendingPrice());
        System.out.println(("가격 오름차순 정렬"));
        for(BookDTO book : bookList) {
            System.out.println(book);
        }

//        BookDTO{number=2, title='삼국사기', author='김부식', price=40000}
//        BookDTO{number=3, title='동의보감', author='허준', price=46000}
//        BookDTO{number=1, title='홍길동전', author='허균', price=50000}

    }
}
