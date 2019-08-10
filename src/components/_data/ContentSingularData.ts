import { WidgetTypes } from '../ContentMapping/ContentMapping';
import { ImgRowItem } from '../ContentWidgets/ImagesInRow/ImagesInRow';

export type ContentSingularData = {
    plainText_content?: string
    exampleImage_imageLink?: string
    exampleImage_percentageSize?: number
    imagesInRow_items?: ImgRowItem[]
    [idx: string]: any
}
