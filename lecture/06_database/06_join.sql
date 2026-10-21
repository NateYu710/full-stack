# join

show create table tbl_menu; -- foreginer key가 category_code 
desc tbl_category; -- primary key가 category_code인 테이블

select menu_name as '메뉴 이름', -- 띄어쓰기가 있어 따옴표 사용
menu_price as price -- 간단하면 as와 따옴표 생략 가능
from tbl_menu;


-- Inner join : 교집합 (가장 기복적인 조인)
select
	a.menu_name,
	b.category_name
from
	tbl_menu a join tbl_category b
on a.category_code = b.category_code; -- on 같은 행을 찾을 연결 조건

-- outer join(left / right)
/* left join : join 구문을 기준으로 왼쪽 테이블의 데이터는 모두 보여주고,
				오른쪽 테이블에서 짝이 맞는 데이터가 없으면 'null'로 채워서 보여준다' */
			
select 
	a.category_name,
    b.menu_name
from 
	tbl_category a
left join tbl_menu b
on a.category_code = b.category_code;

-- select a.category_name, b.menu_name
-- from tbl_category a, tbl_menu b
-- where a.category_code = b.category_code(+); 
-- MYSQL에서는 불가능



-- self join(같은 테이블 안에서 행과 행의 관계가 있는경우, 
-- 그걸 연결해서 보고 싶을 때 셀프조인을 할 수 있다)

select * from tbl_category;

select
	a. category_name as '하위 카테고리',
    b. category_name as '상위 카테고리'
from
	tbl_category a -- '하위' 역할을 할 a테이블
join tbl_category b -- '상위' 역할을 할 b 테이블 
on a.ref_category_code = b.category_code;



