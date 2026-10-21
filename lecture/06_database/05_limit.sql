# limit
-- 결과중에 딱 내가 원하는 만큼만 잘라서 줘!! 라고 요청하는 키워드

select * from tbl_menu
order by menu_price desc
limit 5;


-- limit [시작위치(건너뛸 개수)], [가져올 행의 개수]
select * from tbl_menu
order by menu_price desc
limit 1, 4; -- 첫번째 행을 건너뛰고 4개 시작

select * from tbl_menu
order by menu_price desc
limit 4
offset 1;

