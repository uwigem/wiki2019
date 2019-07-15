import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './ImagesInRow.css';
import { Button, TextField } from '@material-ui/core';

type imgRowItem = {
    imgLink: string;
    imgCaption: string;
    extLink: string;
}

/**
 * Diplays an editor to create/edit an ImageInRow widget
 *
 * Last Modified
 * Nitesh Chetry
 * July 14, 2019
 */
export const ImagesInRowEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const [imgLinkText, changeImgLinkText] = useState("");
    const [imgCaptionText, changeCaptionText] = useState("");
    const [extLinkText, changeExtLinkText] = useState("");
    let pictureCaptionPairs: imgRowItem[] = editedContent.imagesInRow_items || [];
    if (!pictureCaptionPairs) {
        return <></>;
    }
    return <>
        <h3> Add New Image </h3>
        <TextField
            fullWidth
            label="Image Link"
            className="text-field"
            value={imgLinkText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeImgLinkText(e.target.value);
            }}
            variant="outlined"
            margin="dense"
        />
        <TextField
            fullWidth
            label="Caption"
            className="text-field"
            value={imgCaptionText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeCaptionText(e.target.value);
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        <TextField
            fullWidth
            label="External Link"
            helperText="defaults to image link"
            className="text-field"
            value={extLinkText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeExtLinkText(e.target.value);
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        <Button
            variant="outlined"
            color="primary"
            onClick={e => {
                pictureCaptionPairs.push({
                    imgLink: imgLinkText,
                    imgCaption: imgCaptionText,
                    extLink: extLinkText
                });
                setEditedContentOnChange(
                    "imagesInRow_items",
                    pictureCaptionPairs
                );
                changeImgLinkText("");
                changeCaptionText("");
                changeExtLinkText("");
            }}
        >
            Add Image
        </Button>
        <h3> Preview </h3>
        <div className="img-row" style={{ width: "75%" }}>
            {pictureCaptionPairs.map((pair: imgRowItem, index: number) => (
                <div className="img-row-item">
                    <a href={pair.extLink ? pair.extLink : pair.imgLink}>
                        <img src={pair.imgLink} alt={"image" + index} />
                    </a>
                    <p>{pair.imgCaption}</p>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            pictureCaptionPairs.splice(index, 1);
                            setEditedContentOnChange(
                                "imagesInRow_items",
                                pictureCaptionPairs
                            );
                        }}
                    >
                        Delete
                    </Button>
                </div>
            ))}
        </div>
    </>
};
