import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './ImagesInRow.css';

type linkCaptionPair = {
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
    imagesInRow_linkCaptionPairs
}) => {
    if (!imagesInRow_linkCaptionPairs) {
        return <></>;
    }
    return <>
        <div className="img-row">
            {imagesInRow_linkCaptionPairs.map((pair: linkCaptionPair, index: number) => (
                <div className="img-row-item">
                    <figure>
                        <a href={pair.extLink ? pair.extLink : pair.imgLink}>
                            <img src={pair.imgLink} alt={"image" + index} />
                        </a>
                        <figcaption> {pair.imgCaption} </figcaption>
                    </figure>
                </div>
            )
            )}
        </div>
    </>
};
