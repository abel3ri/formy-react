import { useState } from "react";
import "../styles/ShoppingListForm.css";
export default function ShoppingListForm({ addItem, clearItems }) {
  const [itemName, setItemName] = useState("");

  const updateItemName = (event) => {
    return setItemName(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(itemName);
    clearInputField();
  };
  const clearInputField = () => {
    return setItemName("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        // action="#"
        // method="get"
        className="ShoppingListForm"
      >
        <div>
          <label htmlFor="item">Enter item</label>
          <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(event) => updateItemName(event)}
          />
        </div>
        <div>
          <button>Add</button>
          <button type="button" className="clear-btn" onClick={clearItems}>
            Clear Items
          </button>
        </div>
      </form>
    </>
  );
}
