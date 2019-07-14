export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
    exampleImage_percentageSize?: number
    imagesInRow_items?: [
        {
            imgLink: string
            imgCaption: string
            extLink: string
        }
    ]
    [idx: string]: any
}
