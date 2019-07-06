
import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';


export type TodoItem = {
	name: string
	check: string // check | uncheck
}

// Return a unordered list of todos 
//
// Last Modified
// Max Zhou
// July 5, 2019
//
export const TodoList: React.FC<ContentSingularData> = ({ todoList_items }) => {
  // if the props are undefined (error checking, because we said they were optional inside the ContentSingularData typedef
  // then just return an empty react object.
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