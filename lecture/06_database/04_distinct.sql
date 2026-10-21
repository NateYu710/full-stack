# distinct(중복 제거)
-- 중복된 값을 제거하고 고유한 값들의 목록만 보고싶을때 사용

select distinct category_code
from tbl_menu
order by category_code;

-- 열이 여러 개인 distinct
-- 지정된 모든 열의 조합이 똑같을 때만 중복으로 간주하여 제거
select distinct category_code, orderable_status 
--  category_code, orderable_status 둘이 중복되는 경우만 
from tbl_menu;