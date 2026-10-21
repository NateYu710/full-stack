# group by
-- 지정된 컬럼의 값이 같은 데이터들을 하나의 그룹으로 묶는다.

-- count() : 각 그룹에 속한 행의 개수를 센다
select category_code, count(*) '메뉴 개수'
from tbl_menu
group by category_code;


select category_code,
		-- menu_code, -- group by를 사용할 떄, group by에 사용된 컬럼과 집계함수만 올 수 있다
	sum(menu_price) '가격 총합',
	   truncate(avg(menu_price), 0) '가격 평균' -- 소수점 버리기
from tbl_menu
group by category_code;

-- having: 그룹에 대한 조건 필터링(where는 그룹화 전 조건 필터링이다)

select catecory_code, count(*) '메뉴 개수'
from tbl_menu
group by category_code
having count(*) >= 3;

-- rollup : 그룹별 집계결과와 합계 그 그룹들의 소계와 총계를 보여줌(ROLLUP = n+1, CUBE = 2ⁿ)
select category_code, sum(menu_price)
from tbl_menu
group by category_code
with rollup; -- mysql만 할 수 있는 문법

-- 가격대별, 그 안에서 카테고리별로 그룹화 하고 rollup 적용
select menu_price, category_code, sum(menu_price)
from tbl_menu
group by menu_price, category_code
with rollup;



