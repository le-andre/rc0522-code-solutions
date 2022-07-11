select "firstName",
       "lastName",
       sum("payments"."amount") as "totalAmount"
FROM "customers"
join "payments" using ("customerId")
join "rentals" using ("rentalId")
group by "customers"."firstName",
"customers"."lastName",
"payments"."amount"
order by "totalAmount" desc;
