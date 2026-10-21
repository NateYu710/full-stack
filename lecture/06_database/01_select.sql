# SELECT
-- SELECT 컬럼명 FROM 테이블명
use menudb;

-- 단일 열(컬럼) 데이터 검색
select menu_name from tbl_menu;

select menu_code, menu_name, menu_price
from tbl_menu;


-- 모든 열에서 데이터 검색(*: 모든 컬럼을 의미하는 와일드 카드)
select * from tbl_menu;


select 6 + 3;
select now(); -- 현재시간 반환
select concat('홍', '길동'); -- 문자열 합치기
select concat('홍', '길동') as name -- 컬럼명 별칭으로 주기


