import React from "react";
import { ContentSingularData } from "../../_data/ContentSingularData";
import "./ToDoList.css";
/**
 * To do list shows a list of checked or unchecked items
 *
 * Last Modified
 * Jennifer Tao
 * July 6, 2019
 */
export const _ = "";
export const ToDoList: React.FC<ContentSingularData> = ({
  toDoList_content
}) => {
  if (!toDoList_content) {
    return <></>;
  }

  return (
    <ul className="to-do-list">
      {toDoList_content.map(item => {
        let itemStyle = {
          textDecoration: item.isChecked ? "line-through" : ""
        };
        return <li style={itemStyle}>{item.text}</li>;
      })}
    </ul>
  );
};
