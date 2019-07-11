import React from "react";
import { WidgetEditorProps } from "../../ContentMapping/ContentMapping";
import { Separator } from "./Separator";

/**
 * SeparatorEditor edits the width and color of a separator widget
 *
 * Last Modified
 * Jennifer Tao
 * July 10, 2019
 */
export const SeparatorEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
  const defaultColor = { r: 66, g: 13, b: 171 };
  const width = editedContent.separator_width || 33;
  const color = editedContent.separator_color || defaultColor;

  /**
   * Updates seperator_color
   * @param e event
   * @param c color: {red, green, blue}
   */
  let changeColor = (e: any, c: string) => {
    let newColor = { ...color };
    if (c === "red") {
      newColor.r = e.target.value;
    } else if (c === "green") {
      newColor.g = e.target.value;
    } else if (c === "blue") {
      newColor.b = e.target.value;
    }

    setEditedContentOnChange("separator_color", newColor);
  };

  return (
    <>
      <Separator separator_width={width} separator_color={color} />
      <h3>Size:</h3>
      Width:
      <input
        className="slider width-range"
        type="range"
        min="0"
        max="100"
        defaultValue={width + ""}
        onChange={e =>
          setEditedContentOnChange("separator_width", Number(e.target.value))
        }
      />
      {width}% (Default 33%)
      <h3>Color:</h3>
      <input
        type="button"
        value="Default Color"
        onClick={() => {
          setEditedContentOnChange("separator_color", defaultColor);
        }}
      />
      Default: R: 66, G: 13, B: 171
      <div>
        <input
          className="slider red-range"
          type="range"
          min="0"
          max="255"
          defaultValue="66"
          value={color.r}
          onChange={e => changeColor(e, "red")}
        />
        Red:{" "}
        <input
          type="text"
          value={color.r}
          onChange={e => changeColor(e, "red")}
        />
      </div>
      <div>
        <input
          className="slider green-range"
          type="range"
          min="0"
          max="255"
          defaultValue="13"
          value={color.g}
          onChange={e => changeColor(e, "green")}
        />
        Green:{" "}
        <input
          type="text"
          value={color.g}
          onChange={e => changeColor(e, "green")}
        />
      </div>
      <div>
        <input
          className="slider blue-range"
          type="range"
          min="0"
          max="255"
          defaultValue="171"
          value={color.b}
          onChange={e => changeColor(e, "blue")}
        />
        Blue:{" "}
        <input
          type="text"
          value={color.b}
          onChange={e => changeColor(e, "blue")}
        />
      </div>
    </>
  );
};
