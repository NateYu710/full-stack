# cast functions

# 명시적 형변환
-- cast
-- convert

select avg(menu_price) as '변환 전 평균'
from tbl_menu;

-- cast(값 as 바꿀타입)
select cast(avg(menu_price) as signed integer) as '메뉴 평균 가격'
from tbl_menu; -- 정수타입으로 변환(실질적으로 형변화를 시키는건 아님)

-- convert(값, 바꿀타입)
select convert(avg(menu_price) , signed integer) as '메뉴 평균 가격'
from tbl_menu; -- 정수타입으로 변환(실질적으로 형변화를 시키는건 아님)

-- convert(값, 바꿀타입)
select convert(avg(menu_price) , signed) as '메뉴 평균 가격'
-- signed integer: 부호가 있는 정수, 즉 음수, 0, 양수를 표현(integer는 생략 가능)
from tbl_menu; -- 정수타입으로 변환(실질적으로 형변화를 시키는건 아님)

select cast('2026-10-21' as date); -- 문자열을 날짜타입으로 형변환

select menu_name, 
	concat(cast(menu_price as char(5)), '원') as '메뉴가격'
from tbl_menu;

select menu_name, 
	concat(convert(menu_price,char(5)), '원') as '메뉴가격'
from tbl_menu;

# 암시적 형변환

select '1' + '2';

select 3 > 'May'; -- 'May'는 숫자로 시작하지 않으므로 0으로 변환




