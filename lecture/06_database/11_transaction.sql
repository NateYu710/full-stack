#Transaction (트랜잭션) -All or Nothing 모두 성공하거나, 모두 실패해야 하는 하나의 작업 단위

-- mysql은 기본적으로 autocommit 모드가 켜져있다. 조절하고 싶다면 설정을 바꿔줘야한다.

set autocommit = off;

-- 지금부터 트랜잭션을 시작하겠다!!
start transaction;

insert into tbl_menu values(null, '순대국밥', 10000, 4, 'Y');
update tbl_menu set menu_name = '수정한 메뉴' where menu_code = 5;
delete from tbl_menu where menu_code = 7;

-- start transaction 시점 이후에 수행했던 모든 작업을 '전부 취소'하고
-- 트랜잭션 시작 전의 상태로 되돌린다.
rollback; -- commit 이후에는 소용이 없다.
select * from tbl_menu;

commit;