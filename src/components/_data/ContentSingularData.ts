export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
    exampleImage_percentageSize?: number
    imagesInRow_items?: [
        {
            imgLink: string
            imgCaption: string
            imgAltTag: string
            externalLink_OnImageClick: string
        }
    ]
    [idx: string]: any
}
