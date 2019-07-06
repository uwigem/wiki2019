import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { TodoItem } from './TodoList';

export const TodoListEditor: React.FC<WidgetEditorProps> = ({
  // originalContent is the content that is saved on firebase. It is the version of content that is live before
  // any changes are made
  originalContent,

  // editedContent is the content that is being edited and stored within the WidgetEditor's state. If you go to
  // src/components/ContentEditor/WidgetEditor/WidgetEditor.tsx, you will see where the edited content is set.
  editedContent,

  // setEditedContentOnChange is a function that is defined within WidgetEditor which will update the widget property
  // within the editedContent. You can only modify one key value pair at a time. It takes in a keyToChange (string)
  // and a valueToChange (any). Think of this like the handleChange in all those React tutorials.
  setEditedContentOnChange
}) => {
	// get the list
	let currentList = editedContent.todoList_items || [];
	let list_html = currentList.map((item: TodoItem, index: number) => <li className={item.check} key={index}>{item.name}</li>);

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