import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  return (
    <form className="NewItem" id={uuid()} onSubmit={props.onFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={props.onFormName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={props.onFormCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
