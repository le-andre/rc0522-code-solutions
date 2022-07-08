select "firstName",
       "lastName"
FROM "films"
JOIN "inventory" using ("filmId")
JOIN "rentals" using ("inventoryId")
JOIN "customers" using ("customerId")
where "title" = 'Magic Mallrats';
