import * as fs from 'fs';
import * as path from 'path';

type Item = {
  name: string;
  price: number;
  quantity: number;
}

type ShoppingList = {
  date: string;
  items: Item[];
}

const shoppingList: ShoppingList = {
  date: "2022-01-08T03:30:00.000Z",
  items: [
    {
      "name": "เนื้อหมู",
      "price": 999,
      "quantity": 1
    },
    {
      "name": "น้ำดื่ม",
      "price": 10,
      "quantity": 12
    },
    {
      "name": "ผักชี",
      "price": 30,
      "quantity": 2
    }
  ]
};

const calculateTotalPrice = (list: Item[]) => {
  // calculate total price from list of items
  return 0;
}

const main = () => {
  const totalPrice = calculateTotalPrice([]);
  fs.writeFileSync(
    path.join(__dirname, './total_price.txt'),
    Buffer.from(`${totalPrice.toString()} baht`)
  );
};

main();
