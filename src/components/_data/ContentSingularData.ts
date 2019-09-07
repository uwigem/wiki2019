import { RawDraftContentState } from "draft-js";

export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
    exampleImage_percentageSize?: number
    wysiwyg_state?: string　
    [idx: string]: any
}