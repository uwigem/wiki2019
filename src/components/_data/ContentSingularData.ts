export type ContentSingularData = {
  plainText_content?: string;
  exampleImage_imageLink?: string;
  exampleImage_percentageSize?: number;
  toDoList_content?: [{ text?: string; isChecked?: boolean }];
  [idx: string]: any;
};
