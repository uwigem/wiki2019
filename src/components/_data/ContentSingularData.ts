<<<<<<< HEAD
import { accordionPageProps } from '../ContentWidgets/Accordion/Accordion';

export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
    exampleImage_percentageSize?: number
    [idx: string]: any
    accordion_content?: accordionPageProps[]
=======

import { Tab } from '../ContentWidgets/TabView/TabView';
import { ImgRowItem } from '../ContentWidgets/ImagesInRow/ImagesInRow';

export type ContentSingularData = {
	[idx: string]: any
	plainText_content?: string
	exampleImage_imageLink?: string
	exampleImage_percentageSize?: number
	pdfViewer_pdfLink?: string
	pdfViewer_pdfWidthPercentage?: number
	pdfViewer_pdfHeightPixel?: number
	video_videoLink?: string
	video_videoWidthPercentage?: number
	imagesInRow_items?: ImgRowItem[]
	separator_width?: number
	separator_color?: { r: number; g: number; b: number }
	tabView_content?: Tab[]
>>>>>>> 27180c449f5ce9dc2449de735288bac30e584f55
}