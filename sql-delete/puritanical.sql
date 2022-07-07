delete from "films"
where "rating" != 'G'
RETURNING *;
