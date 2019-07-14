export type ContentSingularData = {
	plainText_content?: string
	exampleImage_imageLink?: string
	exampleImage_percentageSize?: number
	imagesInRow_linkCaptionPairs?: [
		{
			imgLink: string
			imgCaption: string
		}
	]
	[idx: string]: any
}
