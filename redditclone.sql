drop table users CASCADE CONSTRAINTS;
drop table comments CASCADE CONSTRAINTS;
drop table posts CASCADE CONSTRAINTS;

create table users  (
id number (5),
username varchar2 (10),
password varchar2(10),
dootTotal number (10),
    PRIMARY KEY (id)
);

create table comments (
id number (5),
content varchar2 (500),
cDoots number(10),
cUser number(5),
    PRIMARY KEY (id),
    FOREIGN KEY (cUser) REFERENCES users(id)
);

create table posts  (
id number (5),
pTitle varchar2(30),
pLink varchar2(300),
pDoots number(10),
pUser number(5),
pComments number(5),
    PRIMARY KEY (id),
    FOREIGN KEY (pUser) REFERENCES users(id),
    FOREIGN KEY (pComments) REFERENCES comments(id)
);
