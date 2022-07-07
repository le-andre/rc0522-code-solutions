select "firstName",
       "lastName",
       "amount"
FROM "payments"
JOIN "customers" using ("customerId")
order BY "amount" DESC
LIMIT 10;
