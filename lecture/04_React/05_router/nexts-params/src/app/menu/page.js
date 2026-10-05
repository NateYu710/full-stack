'use client';

import MenuItem from '@/item/MenuItem';
import { getMenuList } from '@/lib/MenuAPI';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Menu() {
  const [menuList, setMenuList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const router = useRouter(); //next navigation으로 선택
  // 코드로 페이지를 이동할 때 사용하는 Next.js Hook

  useEffect(() => {
    setMenuList(getMenuList()); //@/lib/MenuAPI에 함수를 호출
  }, []);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickHandler = () => {
    router.push(`/menu/search?menuName=${searchValue}`);
  };

  return (
    <>
      <h1>메뉴 페이지 입니다</h1>
      {/* input 태그를 위한 div 영역 */}
      <div>
        <input
          type="text"
          name="menuName"
          value={searchValue}
          onChange={onChangeHandler}
        />
        <button onClick={onClickHandler}>검색</button>
      </div>

      <div>
        {menuList.map((menu) => (
          <MenuItem key={menu.menuCode} menu={menu} />
        ))}
        {/*@/item/MenuItem 컴포넌트를 가져옴*/}
        {/**getMenuList()   // 함수 실행 → 데이터를 가져옴
        <MenuItem />    // 컴포넌트 실행 → 화면을 만들어서 보여줌 */}
      </div>
    </>
  );
}
