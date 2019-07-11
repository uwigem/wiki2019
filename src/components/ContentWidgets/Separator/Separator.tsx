import React from "react";
import { ContentSingularData } from "../../_data/ContentSingularData";
import "./Separator.css";

/**
 * A separator widget with the given width and color
 * separator_width  percentage width
 * separator_color  RGB values
 *
 * Last Modified
 * Jennifer Tao
 * July 10, 2019
 */
export const Separator: React.FC<ContentSingularData> = ({
  separator_width,
  separator_color
}) => {
  if (!separator_width || !separator_color) {
    return <></>;
  }
  const color =
    "rgb(" +
    separator_color.r +
    "," +
    separator_color.g +
    "," +
    separator_color.b +
    ")";
  return (
    <div
      className="separator"
      style={{
        width: separator_width + "%",
        backgroundColor: color
      }}
    />
  );
};
