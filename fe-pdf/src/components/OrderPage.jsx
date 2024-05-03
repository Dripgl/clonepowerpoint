import React, { useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import "../style/OrderPage.css";


function OrderPage({ initialItems }) {

  const listItems = [
    { name: "Michael Jordan", id: 1 },
    { name: "Kobe Bryant", id: 2 },
    { name: "LeBron James", id: 3 },
    { name: "Magic Johnson", id: 4 },
    { name: "Ronaldo", id: 5 },
    { name: "Messi", id: 6 },
    { name: "Kevin De Bruyne", id: 7 },
    { name: "Neymar", id: 8 },
  ];

  const [items, setItems] = useState(listItems);

  return (
    <Reorder.Group className="container_page" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item  className="file_order" key={item.id} value={item}>
          {item.name}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

export default OrderPage;
