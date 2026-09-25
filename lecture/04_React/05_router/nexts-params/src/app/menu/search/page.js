'use client';

import { useSearchParams } from "next/navigation";

export default function MenuSearchResult() {
    
    // 쿼리 스트링 객체 가져오기
    const searchParam = useSearchParams();

    // 'menuName='열무'에서 '열무' 라는 값 추출
    const menuName = searchParam.get('MenuName')
    console.log(menuName);

    return (
        <>
            <h1>검색결과!!</h1>
        </>
    )
}