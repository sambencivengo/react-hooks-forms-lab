import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [filterSearch, setFilterSearch] = useState('');
	const [itemsList, setItemsLIst] = useState(items);
	console.log(itemsList);

	function handleFilterSearch(e) {
		setFilterSearch(e.target.value);
	}

	function handleCategoryChange(e) {
		setSelectedCategory(e.target.value);
	}

	function handleAddItem(item) {
		console.log(item);
		setItemsLIst([item, ...itemsList]);
	}

	const itemsToDisplay = itemsList.filter((item) => {
		if (selectedCategory === 'All') {
			return true;
		} else {
			return item.category === selectedCategory;
		}
	});
	console.log('first category filter: ', itemsToDisplay);
	const filteredItemsToDisplay = itemsToDisplay.filter((item) => {
		if (filterSearch === '') {
			return true;
		} else {
			return item.name.toLowerCase() === filterSearch.toLowerCase();
		}
	});

	return (
		<div className="ShoppingList">
			<ItemForm onItemFormSubmit={handleAddItem} />
			<Filter
				onSearchChange={handleCategoryChange}
				search={handleFilterSearch}
			/>
			<ul className="Items">
				{filteredItemsToDisplay.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
