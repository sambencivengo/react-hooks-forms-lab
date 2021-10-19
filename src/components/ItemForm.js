import React from 'react';
import { useState } from 'react/cjs/react.development';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
	const [newItem, setNewItem] = useState({
		id: uuid(), // the `uuid` library can be used to generate a unique id
		name: '',
		category: 'Produce',
	});

	const handleNewItemForm = (e) => {
		setNewItem({ ...newItem, [e.target.name]: e.target.value });
	};

	const handleAddItem = (e) => {
		e.preventDefault();
		onItemFormSubmit(newItem);
	};

	return (
		<form
			onSubmit={handleAddItem}
			onChange={handleNewItemForm}
			className="NewItem"
		>
			<label>
				Name:
				<input type="text" name="name" />
			</label>

			<label>
				Category:
				<select onChange={handleNewItemForm} name="category">
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
