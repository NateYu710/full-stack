# where 조건
-- '조건 필터링'의 역할, 특정 조건에 맞는 행만 선택하는데 사용된다
-- (1) 비교 연산자 활용 (=, <>, > <=)
select
	menu_name,
    menu_price,
    orderable_status
from
	tbl_menu1
where orderable_status <> 'Y'; -- 이조건이 true가 되는 행들만 결과헤 포함
-- <> 같지 않다 'y'가 아닌 데이터만 조회

-- (2) 논리 연산자(and, or)를 활용하여 조건 조합
-- AND(두 조건이 모두 참이어야 함)
-- OR (둘 중 하나라도 참이면 참)
-- 주문 가능하면서(Y), 카테고리가 10번인 메뉴 찾기

select
	menu_name,
    category_code,
    orderable_status
from
	tbl_menu
where orderable_status = 'Y' && category_code = 10;

-- 주문 가능하거나(Y) 카테고리가 10번인 메뉴 찾기

select
	menu_name,
    category_code,
    orderable_status
from
	tbl_menu
where orderable_status = 'Y' || category_code = 10;

-- 우선순위 (AND > OR)
SELECT 1 OR 0 AND 0; -- 1

SELECT (1 OR 0) AND 0;

/*1 → TRUE (참)


0 → FALSE (거짓)
*/

-- 가격이 만원 이상이고, 2만 5천원 이하인 메뉴 찾기
desc tbl_menu;

select menu_name, menu_price
from tbl_menu
where menu_price between 10000 and 25000;
-- menu_price >= 10000 and menu_price <= 15000
-- menu_price not between 10000 and 25000;

-- like
-- 메뉴 이름에 '마늘'이 포함된 메뉴를 찾고 있을때alter
-- %는 문자가 없거나 여러 개 있어도 된다는 와일드 카드이다.
select menu_name
from tbl_menu
where menu_name like '%마늘%'; -- 이름 어느위치에든 마늘이 포함된 메뉴를 찾는다
-- 부정은 not like 
-- menu_name like '%마늘' 마늘로 끝나는 메뉴
-- like '마늘%' -- 마늘로 시작하는메뉴

-- in 연산자
-- 카테고리 코드가 4번
-- 카테고리 코드가 4번이거나, 5번이거나, 6번인 메뉴 찾기
desc tbl_menu;

select menu_name, category_code
from tbl_menu
where category_code in(4,5,6); -- 부정은 not in

-- is null 연산자
select category_code, category_name, ref_category_code
from tbl_category
where ref_category_code is null; -- 부정은 is not null
-- null인것들만 고르기










 