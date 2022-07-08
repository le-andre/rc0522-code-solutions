SELECT "line1",
       "cities"."name" as "city",
       "countries"."name" as "country",
       "district"
from "addresses"
join "cities" USING ("cityId")
join "countries" using ("countryId");
