import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";
import "../styles/ShoppingList.css";
import { useState } from "react";
export default function ShoppingList() {
  const [items, setItems] = useState([{ name: "Keyboard", id: uuid() }]);

  const addItem = (itemName) => {
    setItems((items) => {
      return [...items, { name: itemName, id: uuid() }];
    });
  };

  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => {
        return item.id != id;
      });
    });
  };

  const clearItems = () => {
    setItems((items) => {
      return [{ name: "", id: "" }];
    });
  };
  return (
    <>
      <div className="ShoppingList">
        <ul style={{}}>
          {items.map((item) => {
            return (
              item.name && (
                <div key={item.id}>
                  <li>{item.name}</li>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="deleteItemBtn"
                  >
                    Delete
                  </button>
                </div>
              )
            );
          })}
        </ul>
        <ShoppingListForm addItem={addItem} clearItems={clearItems} />
      </div>
    </>
  );
}
