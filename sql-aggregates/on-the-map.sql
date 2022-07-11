select "countries"."name" as "countryName",
       count("cities"."name") as "cityNumber"
FROM "countries"
join "cities" using ("countryId")
group by "countries"."name"
order by "countryName" asc;
