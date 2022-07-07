insert into "languages" ("name")
values ('HTML'),
       ('CSS'),
       ('JavaScript')
returning *;

select *
from "languages";
