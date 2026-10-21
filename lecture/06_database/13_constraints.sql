# CONSTRAINTS(제약 조건)

# NOT NULL
-- NULL값을 허용하지 않음

create table if not exists user_notnull (
	user_no int not null,
    user_id varchar(255) not null,
    user_pwd varchar(255) not null,
    gender varchar(3)
) ENGINE = innodb;

desc user_notnull;

insert into user_notnull values(1, 'user01', 'pass01', '남');

select * from user_notnull;

insert into user_notnull values(1, 'user01', null , '남'); 
-- Error Code: 1048. Column 'user_pwd' cannot be null	0.000 sec
-- not null: 무조건 값이 들어와야된다

insert into user_notnull values(1, 'user01', 'pass01' , null);

# unique
-- 중복값 허용하지 않음

 create table if not exists user_unique (
	user_no int not null unique, -- 회원번호는 중복될 수 없다(컬럼레벨)
    user_id varchar(255) not null,
    user_pwd varchar(255) not null,
    gender varchar(3),
    unique(user_id) -- id도 중복될 수 없다(테이블 레벨) --  UNIQUE(user_no, user_id) 이런식으로 한번에 묶을 수 있다
) ENGINE = innodb;


insert into user_unique values(1, 'user01', 'pass01' , '남');
insert into user_unique values(1, 'user02', 'pass02' , '여'); -- user_no가 unique라 중복되면 안됨
-- Error Code: 1062. Duplicate entry '1' for key 'user_unique.user_no'	0.000 sec
insert into user_unique values(3, 'user03', 'pass01' , '남');

select * from user_unique;


# primary key
-- 테이블에서 한 행의 정보를 찾기 위해 사용 할 컬럼을 의미
-- 테이블에 대한 식별자 역할을 한다(한 행씩 구분하는 역할)
-- not null + unique 제약조건의 의미

create table if not exists user_primarykey (
	user_no int, -- 회원번호는 중복될 수 없다(컬럼레벨)
    user_id varchar(255) not null,
    user_pwd varchar(255) not null,
    gender varchar(3),
    primary key (user_no) -- id도 중복될 수 없다(테이블 레벨) --  UNIQUE(user_no, user_id) 이런식으로 한번에 묶을 수 있다
    -- auto increment는 테이블레벨에서는 불가능
) ENGINE = innodb;

insert into user_primarykey values(1, 'user01', 'pass01', '남');
insert into user_primarykey values(1, 'user02', 'pass02', '여');
-- Error Code: 1062. Duplicate entry '1' for key 'user_primarykey.PRIMARY'	0.000 sec
insert into user_primarykey values(2, 'user02', 'pass02', '여');

select * from user_primarykey;

# foreigin key
-- 두 테이블을 연결하고 관계를 맺어준다.
-- 참조된 다른 테이블에서 제공하는 값만 사용할 수 있다.
-- 제공되는 값 외에는 null을 사용할 수 있다.

create table if not exists user_grade (
	grade_code int primary key,
    grade_name varchar(255) not null
) engine=innodb;

insert into user_grade values('10', '일반회원'), (20, '우수회원'), (30, '특별회원');


create table if not exists user_foreignkey1 (
	user_no int primary key,
    grade_code int,
    foreign key (grade_code) references user_grade(grade_code) -- mysql은 foreign key는 table레벨 뿐이 안됨
) engine=innodb;

insert into user_foreignkey1 values(1,10);
-- insert into user_foreignkey1 values(2,50);
-- foreignkey 제약조건 위반
insert into user_foreignkey1 values(2,20);

select * from user_foreignkey1;

# on update / on delete 옵션
-- set null: 부모(user_grade)가 바뀌거나 사라지면, 해당 값을 null로 바꾼다.
-- cascade: 부모가 바뀌면 자식도 따라 바뀌고, 부모가 사라지면 자식도 함꼐 사라진다.
-- RESTRICT:	자식이 참조 중이면 부모의 변경·삭제 거부
-- NO ACTION:MySQL InnoDB에서는 RESTRICT와 동일


create table if not exists user_foreignkey2 (
	user_no int primary key,
    grade_code int,
    foreign key (grade_code) references user_grade(grade_code) -- mysql은 foreign key는 table레벨 뿐이 안됨
    on update set null -- 부모 테이블의 참조 키 값이 변경될 때
    on delete set null -- 부모 테이블의 참조 행이 삭제될 때
) engine=innodb;

insert into user_foreignkey2 values(1,10), (2,10), (3,30);
select * from user_foreignkey2;

drop table if exists user_foreignkey1;

-- 부모 테이블의 grade_code 수정
update user_grade
set grade_code = 40
where grade_code = 10;

# check
-- 들어올 수 있는 값의 범위나 조건을 직접 지정
create table if not exists user_check(
	user_no int auto_increment primary key,
    user_name varchar(255) not null,
    gender varchar(30) check(gender in ('남', '여')),
    age int check (age >= 19)
)engine=innodb;

insert into user_check
values(null, '홍길동', '남', 25);

insert into user_check
values(null, '판다', '여', 5);
-- check constraints 위반

insert into user_check
values(null, '판다', '여자', 5);
-- 위와 같은 동일한 이유


select * from user_check;


# default
-- insert시 특정 컬럼에 값을 주지 않으면, 자동으로 채워질 기본값을 지정한다

create table if not exists tbl_country(
	country_code int auto_increment primary key,
    country_name varchar(255) default '한국',
    add_day date default(current_date),
    add_time time default(current_time)
) engine=innodb;

insert into tbl_country
values();

insert into tbl_country
values(null, default, default, default);

insert into tbl_country(country_name) values('미국');



select * from tbl_country;

drop table if exists tbl_country;







