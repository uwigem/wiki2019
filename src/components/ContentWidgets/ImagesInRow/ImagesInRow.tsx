import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './ImagesInRow.css';

type imgRowItem = {
    imgLink: string
    imgCaption: string
    extLink: string
}

/**
 * Displays a row of images and corresponding captions
 *
 * Last Modified
 * Nitesh Chetry
 * July 14, 2019
 */
export const ImagesInRow: React.FC<ContentSingularData> = ({
    imagesInRow_items
}) => {
    if (!imagesInRow_items) {
        return <></>;
    }
    return <>
        <div className="img-row">
            {imagesInRow_items.map((pair: imgRowItem, index: number) => (
                <div className="img-row-item">
                    <figure>
                        <a href={pair.extLink ? pair.extLink : pair.imgLink}>
                            <img src={pair.imgLink} alt={"image" + index} />
                        </a>
                        <figcaption>{pair.imgCaption}</figcaption>
                    </figure>
                </div>
            ))}
        </div>
    </>
};
