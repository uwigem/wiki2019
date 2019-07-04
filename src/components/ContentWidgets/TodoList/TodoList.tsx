import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * TodoList displays a list of items to be completed
 * 
 * Last Modified
 * Nitesh Chetry
 * July 3, 2019
 */
export const TodoList: React.FC<ContentSingularData> = ({ todoList_items }) => {

    if (!todoList_items) {
        return <></>
    }
    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {todoList_items.map(item => <li key={item}> {item} </li>)}
            </ul>
        </div>
    );
}