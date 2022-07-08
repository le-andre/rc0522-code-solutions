SELECT "releaseYear" as "release year",
       "genres"."name" as "genre name"
from "films"
JOIN "filmGenre" using ("filmId")
JOIN "genres" using ("genreId")
where "title" = 'Boogie Amelie';
