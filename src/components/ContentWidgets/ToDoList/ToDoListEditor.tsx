import React from "react";
import { WidgetEditorProps } from "../../ContentMapping/ContentMapping";
import { ToDoList } from "./ToDoList";

/**
 * To do list editor allows making changes to a list of checked or unchecked items
 *
 * Last Modified
 * Jennifer Tao
 * July 6, 2019
 */
export const ToDoListEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
  let toDoList_content = editedContent.toDoList_content || [{}];

  let handleText = (e: any, index: number) => {
    const newToDoList = toDoList_content.slice();
    newToDoList[index].text = e.target.value;
    setEditedContentOnChange("toDoList_content", newToDoList);
  };

  let handleCheck = (index: number) => {
    const newToDoList = toDoList_content.slice();
    newToDoList[index].isChecked = !toDoList_content[index].isChecked;
    setEditedContentOnChange("toDoList_content", newToDoList);
  };

  let handleAdd = () => {
    setEditedContentOnChange(
      "toDoList_content",
      toDoList_content.slice().push({ text: "", isChecked: false })
    );
  };

  let handleDelete = (index: number) => {
    setEditedContentOnChange(
      "toDoList_content",
      toDoList_content.slice().splice(index, 1)
    );
  };

  let listEditor = toDoList_content.map((item, index) => {
    return (
      <>
        <h3>#{index + 1} Item:</h3>
        <input
          type="text"
          value={item.text ? item.text : ""}
          onChange={e => handleText(e, index)}
        />
        <input
          type="button"
          value="Check"
          onClick={() => handleCheck(index)}
          {...(item.isChecked ? "checked" : "")}
        />{" "}
        <input
          type="button"
          value="Delete"
          onClick={() => handleDelete(index)}
        />
      </>
    );
  });

  return (
    <>
      <ToDoList toDoList_content={toDoList_content} />
      <div className="to-do-list-editor">{listEditor}</div>
      <input type="button" value="Add an item" onClick={() => handleAdd()} />
    </>
  );
};
