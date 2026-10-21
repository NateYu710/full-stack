# order by 기준컬럼
-- select 문의 가장 마지막에 위치하며, 결과집합을 하나의 열로 정렬

select menu_code, menu_name, menu_price
from tbl_menu
order by menu_price;
-- menu_price ASC; -- ASC는 오름차순을 의미(생략가능)
desc tbl_menu;

-- 내림차순 정렬
select menu_code, menu_name, menu_price
from tbl_menu
order by menu_price desc;

select menu_code, menu_name, menu_price
from tbl_menu
order by menu_price desc, menu_name;
/* 내림차수 desc 생략 불가능 
2차 기준: 가격이 같으면, 이름 오름차순으로) */

select menu_code, menu_price,
	menu_code * menu_price as calculated_value
from tbl_menu
order by calculated_value desc;

/* field(컬럼, 첫번째, 두번째,...) : 
컬럼 값이 목록의 몇 번째에 있는지 숫자로 알려준다 */

select field('B', 'A', 'B', 'C'); -- B가 목록의 몇번째 있는지 알려줌 
-- 2가 나옴

-- 'N'을 1순위, 'Y'를 2순위로 정렬


Select menu_name, orderable_status
from tbl_menu
order by field(orderable_status, 'N', 'Y') ; 


-- null 값이 있는 컬럼에 대한 정렬
select * from tbl_category
order by ref_category_code is null, -- null 이면 true(1), 아니면 false(0)
		ref_category_code;
        
-- 내림차순 시 null을 처음이으로 (is null desc)

select * from tbl_category
order by ref_category_code is null desc, -- null 이면 true(1), 아니면 false(0)
		ref_category_code;



