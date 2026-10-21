# index

create table phone(
	phone_code int primary key,
    phone_name varchar(100) not null,
    phone_price decimal(10, 2) not null
);

insert into phone values(1, 'iphone', 2400000),(2,'Galaxy', 2000000), (3, 'Xiaomi', 1700000);

-- explain은 select문을 mysql이 어떻게 실행할지 보여준다.(실행계획)
explain 
	select * from phone
    where phone_name = 'iphone';
    
create index idx_phone_name
on phone(phone_name); -- phone table에 phone_name 컬럼에 인덱스 생성

show index from phone; -- index 확인

-- 인덱스 삭제
drop index idx_phone_name on phone;