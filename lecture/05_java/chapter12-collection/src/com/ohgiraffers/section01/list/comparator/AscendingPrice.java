package com.ohgiraffers.section01.list.comparator;
import com.ohgiraffers.section01.list.dto.BookDTO;

import java.util.Comparator;

public class AscendingPrice implements Comparator<BookDTO> {

    // 가격 오름차순 정렬
    @Override
    public int compare(BookDTO o1, BookDTO o2) {
        return Integer.compare(o1.getPrice(), o2.getPrice()); //
    }

    /*
    * o1 : 첫 번째 비교 대상
        o2 : 두 번째 비교 대상
        * compareTo()는 현재 객체가 이미 정해져 있기 때문에 매개변수를 하나만 받
    * */
}
