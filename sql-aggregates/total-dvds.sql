select "storeId",
sum("inventoryId") as "totalInventory"
from "inventory"
group by "storeId";
