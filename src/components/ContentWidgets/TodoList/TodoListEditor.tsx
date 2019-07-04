import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

/**
 * TodoListEditor creates an editable widget to change what is displayed in the TodoList
 * 
 * Last Modified
 * Nitesh Chetry
 * July 3, 2019
 */

export const TodoListEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const list = editedContent.todoList_items || [];
    let newList = [...list]
    const [textItem, changeTextItem] = useState("");
    return <>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (textItem) {
                newList.push(textItem);
                setEditedContentOnChange("todoList_items", newList)
                changeTextItem("");
            }
        }} >
            <input placeholder="New Todo Item" value={textItem} onChange={(e) => { changeTextItem(e.target.value) }} />
            <input type="submit" value="Add" />
        </form>

        {/* creates list with removeable list items */}
        <ul>
            {list.map((listItem, index) => <li key={listItem}
                onClick={() => {
                    newList.splice(index, 1)
                    setEditedContentOnChange("todoList_items", newList)
                }}>
                {listItem} </li>)}
        </ul>

    </>
}