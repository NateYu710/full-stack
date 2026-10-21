# subqueries (서브쿼리)

-- 1단계 서브쿼리
select category_code
from tbl_menu
where menu_name = '민트미역국';

-- 2단계 메인쿼리
-- 민트미역국과 같은 카테고리 메뉴 조회
select menu_name, category_code
from tbl_menu
where category_code = 
	(select category_code
from tbl_menu
where menu_name = '민트미역국');

-- from 절에서 서브쿼리 사용
-- 즉석에서 만들어 쓰는 임시 테이블처럼 동작 -> 파생 테이블이라고도 부른다

-- 가장 많은 메뉴가 포함된 카테고리는 메뉴를 총 몇개 가지고 있나요?

-- 1단계 서브쿼리: 카테고리별로 메뉴가 몇 개씩 있는지?
	

select category_code, count(*)
from tbl_menu
group by category_code;



-- 2단계 : 가장많은 메뉴가 포함된 카테고리의 메뉴수
SELECT MAX(menu_count) AS '최대 메뉴 수'
FROM (
    SELECT category_code, COUNT(*) AS menu_count
    FROM tbl_menu
    GROUP BY category_code
) AS count_table;

-- 상관 서브쿼리
-- 카테고리별 평균 가격보다 높은 가격의 메뉴 조회

select avg(menu_price)
from tbl_menu
where category_code = 4;

select menu_code, menu_name, menu_price
from tbl_menu a
where menu_price > (select avg(menu_price)
					from tbl_menu
					where category_code = a.category_code);




