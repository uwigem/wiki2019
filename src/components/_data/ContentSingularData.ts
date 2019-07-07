import { TodoItem } from '../ContentWidgets/TodoList/TodoList';

export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
		exampleImage_percentageSize?: number
		todoList_items?: TodoItem[]
    [idx: string]: any
}