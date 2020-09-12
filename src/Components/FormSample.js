import React, { Component } from 'react';
import List from './List';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			currentItem: {
				text: '',
				key: '',
			},
		};
	}

	handleInput = (e) => {
		this.setState({
			currentItem: {
				text: e.target.value,
				key: Date.now(),
			},
		});
	};

	addItem = (e) => {
		e.preventDefault();
		const newItem = this.state.currentItem;
		if (newItem.text !== '') {
			const newItems = [...this.state.items, newItem]; //The spread operator will bring all the vlaues and take one by one as newItem
			this.setState({
				items: newItems,
				currentItem: {
					text: '',
					key: '',
				},
			});
		}
		console.log(`add function ${this.items}`);
	};

	deleteItem = (key) => {
		const filteredItem = this.state.items.filter((item) => item.key !== key);
		this.setState({
			items: filteredItem,
		});
		console.log(`delete function ${this.items}`);
	};

	setUpdate = (text, key) => {
		const items = this.state.items; // bringing all the items as items previously declared cannotncall inside this function

		items.map((item) => {
			if (item.key === key) {
				item.text = text;
			}
		});
		this.setState({ items: items });
		console.log(`update function ${items}`);
	};

	render() {
		return (
			<div className="App">
				<header>
					<form id="todo-form" onSubmit={this.addItem}>
						<input
							type="text"
							placeholder="enter yout text"
							value={this.state.currentItem.text}
							onChange={this.handleInput}
						/>

						<button type="submit"> Add</button>
					</form>
				</header>
				<List
					items={this.state.items}
					deleteItem={this.deleteItem}
					setUpdate={this.setUpdate}
				></List>
			</div>
		);
	}
}

export default Form;
