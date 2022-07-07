select "firstName",
       "lastName"
from "films"
JOIN "castMembers" using ("filmId")
JOIN "actors" using ("actorId")
where "title" = 'Jersey Sassy';
