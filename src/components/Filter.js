import React from 'react';

function Filter({ onSearchChange, search }) {
	return (
		<div className="Filter">
			<input
				onChange={search}
				type="text"
				name="search"
				placeholder="Search..."
			/>
			<select name="filter" onChange={onSearchChange}>
				<option value="All">Filter by category</option>
				<option value="Produce">Produce</option>
				<option value="Dairy">Dairy</option>
				<option value="Dessert">Dessert</option>
			</select>
		</div>
	);
}

export default Filter;
