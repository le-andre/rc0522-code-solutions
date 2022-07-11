select "genres"."name",
       count("genres"."name") as "genreNumber"
FROM "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "firstName" = 'Lisa' and
      "lastName" = 'Monroe'
group by "genreId"
order by "genreId" asc;
