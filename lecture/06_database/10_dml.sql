/* DML */

-- INSERT, UPDATE, DELETE, SELECT(DQL)

select * from tbl_menu;

# INSERT
-- 새로운 행을 추가하는 구문이다.

insert into tbl_menu values(null, '순대국밥', 9000 ,4 ,'Y');
start transaction;

-- insert 하고 싶은 데이터 컬럼을 지정
insert into tbl_menu(menu_name, menu_price, orderable_status, category_code)
values('초콜릿', 5000, 'Y', 7);

-- 한번에 여러 행 추가
insert into
	tbl_menu
values
(null, '바닐라아이스크림', 2000, 12, 'Y'),
(null, '바닐라아이스크림', 1000, 11, 'Y'),
(null, '바닐라아이스크림', 1700, 8, 'Y');

# update
-- 테이블에 이미 존재하는 행의 컬럼 값을 수정

select menu_code, menu_name, category_code
from tbl_menu
where menu_name = '순대국밥';

update tbl_menu
set category_code = 7 -- 바꿀 내용
where menu_code = 22; -- 바꿀 대상

# delete
-- 테이블에서 특정 행을 삭제하는 구문

select * from tbl_menu
where menu_code = 22;

delete from tbl_menu
where menu_code = 22;

# replace
-- insert시 primary key 또는 unique key가 충돌이 발생할 수 있다면
-- replace를 통해 중복 된 데이터를 덮어 쓸 수 있다.

-- primary key 중복 에러 발생!!
-- insert into tbl_menu values(17, "참기름", 5000, 10, 'Y');

-- 해당 키의 데이터가 있으면 -> 기존 데이터를 삭제(delete) 하고, 새로운 데이터를 insert 한다
replace into tbl_menu values(17, "참기름", 5000, 10, 'Y');

rollback;
delete from tbl_menu
where menu_code= 22;


