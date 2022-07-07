select "filmId",
       "title"
from   "films"
WHERE  "rentalRate" < '1.00'
order by "rentalRate" ASC
