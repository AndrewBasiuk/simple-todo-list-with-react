import React, { Component } from 'react';
// import {InputTodo} from './InputTodo';



export class TaskList extends Component {
	doneListItem(e) {
		let curentElement = e.target;

		function toggle(icon, text, item) {
			icon.classList.toggle('toggle-todo-done');
			text.classList.toggle('toggle-todo-text');
			item.classList.toggle('toggle-todo-item');
		}

		if(curentElement.classList.contains('todo-list__item')) {
			let doneIcon = curentElement.children[0],
				todoText = curentElement.children[1];

			toggle(doneIcon, todoText, curentElement);

		} else if(curentElement.classList.contains('todo-list__text')) {
			let doneIcon = curentElement.previousElementSibling,
				listItem = curentElement.parentElement;

			toggle(doneIcon, curentElement, listItem);
		}
	}

	removeListItem(e) {
		let curentElement = e.target,
			todoItem = curentElement.parentElement;
			console.log(curentElement);

		todoItem.classList.add('hide');
	}

	render() {              
		return(
			<ul className="todo-list">
				{this.props.items.map((item, i) => 
					<li key={i} className="todo-list__item" onClick={this.doneListItem}>
						<img className="todo-list__done" src="../img/done.png" alt="done"/>
						<p className="todo-list__text">{item}</p>
						<img className="todo-list__remove" alt="remove" onClick={this.removeListItem} src="../img/close.png" />
					</li>)}
			</ul>
		);
	}
}


