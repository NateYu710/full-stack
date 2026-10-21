# DDL(data definition language)
-- 데이터 정의 언어 (create, alter, drop)

# Create
-- 테이블 생성 구문

/*
create table 테이블명 (
	컬럼명 데이터 타입(길이),
    컬럼명 데이터 타입(길이),
    ...) engine = ...;
*/

-- if not exists: 존재하지 않을때만 생성하기 위한 구문
create table if not exists tb1(
	pk int,
    fk int,
    col1 varchar(255)
)engine=InnoDB;

desc tb1;


set autocommit = off;
start transaction;

insert into tb1 values(1, 10, 'Y');

select * from tb1;

-- auto_increment
-- insert시 primary key에 해당하는 컬럼에 자동으로 번호를 발생시켜 저장할 수 있다

create table if not exists tb2(
	pk int auto_increment primary key, -- auto_increment와 primary key는 순서 바꿔도 됨
    fk int,
    col1 varchar(255)
) engine=innodb;

desc tb2;

insert into tb2 values(null, 10, 'Y');
insert into tb2 values(null, 20, 'N');

select * from tb2;

#alter
-- 테이블에 추가/변경/수정/삭제하는 모든 것은 alter 명령어를 사용해 적용한다
-- add: 새컬럼 추가
-- drop column: 컬럼 삭제
-- change column: 이름을 포함한 정의 변경
-- modify: 이름을 유지한 정의 변경

alter table tb2
add col2 int; -- 컬럼 추가

desc tb2;
select * from tb2;

alter table tb2
drop column col2; -- 컬럼 삭제


alter table tb2
change column fk change_fk bigint; -- bigint: int보다 좀큰 정수타입
-- 이름과 데이터 타입을 함꼐 바꿀 떄


desc tb2;

alter table tb2
modify change_fk int; -- 데이터 타입 변경

create table if not exists tb3 (
	pk int auto_increment primary key,
    fk int,
    col varchar(255)
) engine = innodb;

desc tb3;

drop table if exists tb3; -- 테이블 구조와 데이터를 영구적으로 삭제

-- select * from tb3;


create table if not exists tb4 (
	pk int auto_increment primary key,
    fk int,
    col varchar(255)
) engine = innodb;

start transaction;


insert into tb4
	values (null, 10, 'Y'),
			(null, 20, 'Y');
            
select * from tb4;

# truncate
-- 테이블 내용물만 비우고 초기화(구조는 남겨두고, 데이터만 비우고 싶을 때 사용)

truncate table tb4;

-- 다시 데이터를 넣으면 pk가 1부터 시작
insert into tb4
	values (null, 10, 'Y'),
			(null, 20, 'Y');
            
drop table tb4;



