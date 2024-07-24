import React, { useState } from 'react'

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);



  const handleSubmit = (event) => {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <div>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you want for the trip?</h3>

        <select value={quantity} onChange={(e) => { setQuantity(e.target.value); }}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>

        <input type="text" placeholder='items...' value={description} onChange={(e) => { setDescription(e.target.value); }}></input>

        <button>Add</button>
      </form>

    </div>
  )
}

export default Form;  