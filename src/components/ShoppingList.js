import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [input, setInput] = useState('');
  const [formCategory, setFormCategory] = useState('produce')
  const [formName, setFormName] = useState('');
  const [array, setArray] = useState(items);


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    event.preventDefault();
    setInput(event.target.value);
    //LAGGING ONE BEHIND: IS CONSOLE LOG FIRING BEFORE SET INPUT??//
    console.log(input);
  }

  function handleFormCategory(event){
    setFormCategory(event.target.value);
  }

  function handleFormName(event){
    setFormName(event.target.value);
  }
  function handleFormSubmit(event){
    event.preventDefault();
    const newItem = {
      id: event.target.id,
      name: formName,
      category: formCategory      
    }
    setArray([
      ...array,
      newItem
    ])
    console.log(array);

  }

  const itemsToDisplayCategory = array.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplay = itemsToDisplayCategory.filter((item) => {
    if(input === '') return true;

    return item.name.includes(input)
  })

  

  return (
    <div className="ShoppingList">
      <ItemForm onFormCategory={handleFormCategory} onFormSubmit={handleFormSubmit} onFormName={handleFormName}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
