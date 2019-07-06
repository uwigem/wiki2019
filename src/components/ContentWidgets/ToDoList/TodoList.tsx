
import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TodoStyle.css';


export type TodoItem = {
	name: string
	check: string // checked | unchecked
}

// Return a unordered list of todos 
//
// Last Modified
// Max Zhou
// July 5, 2019
//
export const TodoList: React.FC<ContentSingularData> = ({ todoList_items }) => {
  if (!todoList_items) {
    return <></>
	};
	let elems = todoList_items.map((item: TodoItem, index: number) => <li className={item.check} key={index}>{item.name}</li>);
  return (
		<ul>
			{elems}
		</ul>
	);
}