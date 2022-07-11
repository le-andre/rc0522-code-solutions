select "countries"."name",
 count("cityId") as "numberOfCities"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
