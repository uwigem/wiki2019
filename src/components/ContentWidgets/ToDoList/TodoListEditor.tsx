import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { TodoItem, TodoList } from './TodoList';
import "./TodoStyle.css";

// an input box for adding a new todo item or checking/unchecking
// existing todo items.
//
// Last Modified
// Max Zhou
// July 6, 2019
//
export const TodoListEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
	// get the list
	let currentList: TodoItem[] = editedContent.todoList_items || [];

	let list_html = currentList.map((item: TodoItem, index: number) => <li className={item.check} key={index}>{item.name}<button type="button" onClick={(e) => handleCheck(index)}>done</button></li>);

	let newTodoName: string = "";

	// update new todo waiting to be added
	let handleChange = (e: any) => {
		newTodoName = e.target.value;
	}

	// append new todo to the list as unchecked
	let handleSubmit = (e: any) => {
		e.preventDefault();
		currentList.push({ name: newTodoName, check: "unchecked"});
		setEditedContentOnChange("todoList_items", currentList);
	}

	// mark a todo as checked
	let handleCheck = (index: number) => {
		if (currentList[index].check == "checked") {
			currentList[index].check = "unchecked";
		} else {
			currentList[index].check = "checked";
		}
		setEditedContentOnChange("todoList_items", currentList);
	}

  return <>
		<ul>
			{list_html}
		</ul>
		<h3>New Todo:</h3>
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" onChange={handleChange} />
			</label>
			<input type="submit" value="Submit" />
		</form>
	</>
}