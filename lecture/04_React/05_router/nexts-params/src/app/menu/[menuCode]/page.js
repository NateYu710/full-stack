'use client';

import { getMenubyMenuCode } from '@/lib/MenuAPI';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MenuDetail() {
  const { menuCode } = useParams(); // /menu/? 동적인 값을 읽어옴

  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(getMenubyMenuCode(menuCode)); //@/lib/MenuAPI에서 호출
  }, [menuCode]);

  return (
    menu && (
      /**
       * 조건부 렌더링 menu의 값이 있을 때만 렌더링
       * useEffect구문은 렌더링 후 작업하기때문에 렌더링 전에는 undefined가 들어감
       */

      <>
        <h1>{menu.menuName} 상세페이지</h1>
        {/* <p>주소에서 받은 menuCode: {menuCode}</p> */}
        {/*menuCode라는 이름은 폴더 이름 [menuCode]에서 가져옴*/}
        <h3>메뉴 가격: {menu.menuPrice}</h3>
        <h3>메뉴 종류: {menu.categoryName}</h3>
        <h3>메뉴 설명: {menu.detail.description}</h3>
        <img
          src={menu.detail.image}
          style={{ maxWidth: 500 }}
          alt={menu.menuName}
        />
      </>
    )
  );
}
