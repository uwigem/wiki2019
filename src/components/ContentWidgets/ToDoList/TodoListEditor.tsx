import React from 'react';
// use shortid for generating unique keys
import shortid from 'shortid';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { TodoItem, TodoList } from './TodoList';
import "./TodoStyle.css";

//
//
// Last Modified
// Max Zhou
// July 6, 2019
//

/**
 * an input box for adding new todo items or marking existing todos as complete.
 *
 * Last Modified
 * Max Zhou
 * July 6, 2019
 * */
export const TodoListEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
	let currentList: TodoItem[] = editedContent.todoList_items || [];

	// make a local copy with spread
	let localList = [...currentList];

	// complete a task or mark it incomplete
	let complete = (index: number) => {
		localList[index].complete = !localList[index].complete;
		setEditedContentOnChange("todoList_items", localList);
	}

	let listItems = currentList.map((item: TodoItem, index: number) =>
		<li className={item.complete ? "complete" : "incomplete"} key={shortid.generate()}>
			{item.name}
			<button type="button" onClick={(e) => complete(index)}>done</button>
		</li>);

	let newTodoName: string = "";

	let handleChange = (e: any) => {
		newTodoName = e.target.value;
	}

	// append new todo to the list as incomplete
	let handleSubmit = (e: any) => {
		e.preventDefault();
		localList.push({ name: newTodoName, complete: false});
		setEditedContentOnChange("todoList_items", localList);
	}

  return <>
		<ul>
			{listItems}
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