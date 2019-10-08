import { BannerContent } from '../ContentWidgets/Banner/Banner';
import { Tab } from '../ContentWidgets/TabView/TabView';
import { ImgRowItem } from '../ContentWidgets/ImagesInRow/ImagesInRow';

export type ContentSingularData = {
    [idx: string]: any
    banner_content?: BannerContent
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
}