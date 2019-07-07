import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './TodoStyle.css';


export type TodoItem = {
	name: string
	complete: boolean
}

/**
 * Return a unordered list of todos
 *
 * Last Modified
 * Max Zhou
 * July 6, 2019
 * */
export const TodoList: React.FC<ContentSingularData> = ({ todoList_items }) => {
  if (!todoList_items) {
    return <></>;
	}
	let elems = todoList_items.map((item: TodoItem, index: number) =>
		<li className={item.complete ? "complete" : "incomplete"} key={index}>
			{item.name}
		</li>);
  return (
		<ul>
			{elems}
		</ul>
	);
}