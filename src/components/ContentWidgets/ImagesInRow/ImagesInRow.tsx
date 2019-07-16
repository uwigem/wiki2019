import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './ImagesInRow.css';

type imgRowItem = {
    imgLink: string;
    imgCaption: string;
    imgAltTag: string;
    externalLink_OnImageClick: string;
}

/**
 * Displays a row of images and corresponding captions
 *
 * Last Modified
 * Nitesh Chetry
 * July 15, 2019
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
                        <a href={pair.externalLink_OnImageClick ? pair.externalLink_OnImageClick :
                            pair.imgLink}
                        >
                            <img src={pair.imgLink} alt={pair.imgAltTag ? pair.imgAltTag :
                                pair.imgCaption}
                            />
                            <figcaption>{pair.imgCaption}</figcaption>
                        </a>
                    </figure>
                </div>
            ))}
        </div>
    </>
};
