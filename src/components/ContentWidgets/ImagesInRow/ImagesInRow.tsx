import React from "react";
import { ContentSingularData } from "../../_data/ContentSingularData";
import "./ImagesInRow.css";

/**
 * Displays a row of images and corresponding captions
 *
 * Last Modified
 * Nitesh
 * July 13, 2019
 */
export const ImagesInRow: React.FC<ContentSingularData> = ({
    imagesInRow_linkCaptionPairs
}) => {
    if (!imagesInRow_linkCaptionPairs) {
        return <></>;
    }
    interface linkCaptionPair {
        imgLink: string;
        imgCaption: string;
    }
    return (
        <>
            <div className="img-row">
                {imagesInRow_linkCaptionPairs.map(
                    (pair: linkCaptionPair, index: number) => (
                        <div className="img-row-item">
                            <figure>
                                <img src={pair.imgLink} alt={"image" + index} />
                                <figcaption> {pair.imgCaption} </figcaption>
                            </figure>
                        </div>
                    )
                )}
            </div>
        </>
    );
};
