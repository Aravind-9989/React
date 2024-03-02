import React, { useState } from "react";

const UseStateExample3 = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Grapes", "Kiwi"]);

  const handleAdd = () => {
    let newFruits = [...fruits, "New Fruit"];
    setFruits(newFruits);
  };

  const handleDelete = (index) => {
    let newFruits = [...fruits];
    newFruits.splice(index, 1);
    setFruits(newFruits);
  };

  return (
    <>
      <h2>To Do List</h2>
      <button onClick={handleAdd}>Add fruit</button>
      <ol>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default UseStateExample3;
