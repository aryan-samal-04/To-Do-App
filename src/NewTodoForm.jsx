import React, { useState } from "react";
import './styles.css';

function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        if (newItem.trim() === "") {
            return;
        }
        props.onSubmit(newItem);
        setNewItem("");
    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={(e) => {setNewItem(e.target.value)}} type="text" id="item"/>
            </div>
            <button className="btn" type="submit">Add Item</button>
      </form>
    );
}

export default NewTodoForm;