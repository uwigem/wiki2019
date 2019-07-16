import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './ImagesInRow.css';
import { Button, TextField } from '@material-ui/core';

type imgRowItem = {
    imgLink: string;
    imgCaption: string;
    imgAltTag: string;
    externalLink_OnImageClick: string;
}

/**
 * Diplays an editor to create/edit an ImageInRow widget
 *
 * Last Modified
 * Nitesh Chetry
 * July 15, 2019
 */
export const ImagesInRowEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const [imgLinkText, changeImgLinkText] = useState("");
    const [imgCaptionText, changeCaptionText] = useState("");
    const [imgAltTagText, changeImgAltTagText] = useState("");
    const [externalLink_OnImageClickText, changeExternalLink_OnImageClickText] = useState("");
    const [emptyImgLinkSubmitted, switchEmptyImgLinkSubmitted] = useState(false);
    const [emptyCaptionAndAltTagSubmitted, switchEmptyCaptionAndAltTagSubmitted] = useState(false);
    let pictureCaptionPairs: imgRowItem[] = editedContent.imagesInRow_items || [];
    if (!pictureCaptionPairs) {
        return <></>;
    }
    return <>
        <h3> Add New Image </h3>
        {emptyImgLinkSubmitted ? (
            <React.Fragment>
                <h4 className="error-message"> Image Link must not be empty</h4>
                <TextField
                    error
                    required
                    fullWidth
                    label="Image Link"
                    className="text-field"
                    value={imgLinkText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeImgLinkText(e.target.value);
                    }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            </React.Fragment>
        ) : (
                <TextField
                    fullWidth
                    required
                    label="Image Link"
                    className="text-field"
                    value={imgLinkText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeImgLinkText(e.target.value);
                    }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            )
        }
        {emptyCaptionAndAltTagSubmitted ? (
            <React.Fragment>
                <h4 className="error-message">
                    Either Caption or Alternative Text must not be empty
                </h4>
                <TextField
                    error
                    fullWidth
                    label="Caption"
                    className="text-field"
                    value={imgCaptionText}
                    onChange={
                        (e: React.ChangeEvent<HTMLInputElement>) => {
                            changeCaptionText(e.target.value);
                        }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
                <TextField
                    error
                    fullWidth
                    label="Alternative Text"
                    helperText="Describes image for vision-impaired users (defaults to caption)"
                    className="text-field"
                    value={imgAltTagText}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        changeImgAltTagText(e.target.value);
                    }}
                    variant="outlined"
                    margin="dense"
                    multiline
                />
            </React.Fragment>
        ) : (
                <React.Fragment>
                    <TextField
                        fullWidth
                        label="Caption"
                        className="text-field"
                        value={imgCaptionText}
                        onChange={
                            (e: React.ChangeEvent<HTMLInputElement>) => {
                                changeCaptionText(e.target.value);
                            }}
                        variant="outlined"
                        margin="dense"
                        multiline
                    />
                    <TextField
                        fullWidth
                        label="Alternative Text"
                        helperText="Describes image for vision-impaired users (defaults to caption)"
                        className="text-field"
                        value={imgAltTagText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            changeImgAltTagText(e.target.value);
                        }}
                        variant="outlined"
                        margin="dense"
                        multiline
                    />
                </React.Fragment>
            )
        }

        <TextField
            fullWidth
            label="External Link"
            helperText="defaults to image link"
            className="text-field"
            value={externalLink_OnImageClickText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeExternalLink_OnImageClickText(e.target.value);
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        <Button
            variant="outlined"
            color="primary"
            onClick={e => {
                if (imgLinkText === "") {
                    switchEmptyImgLinkSubmitted(true);
                } else {
                    switchEmptyImgLinkSubmitted(false);
                }
                if (imgCaptionText === "" && imgAltTagText === "") {
                    switchEmptyCaptionAndAltTagSubmitted(true);
                } else {
                    switchEmptyCaptionAndAltTagSubmitted(false);
                }
                if (imgLinkText !== "" && (imgCaptionText !== "" || imgAltTagText !== "")) {
                    pictureCaptionPairs.push({
                        imgLink: imgLinkText,
                        imgCaption: imgCaptionText,
                        imgAltTag: imgAltTagText,
                        externalLink_OnImageClick: externalLink_OnImageClickText
                    });
                    setEditedContentOnChange(
                        "imagesInRow_items",
                        pictureCaptionPairs
                    );
                    changeImgLinkText("");
                    changeCaptionText("");
                    changeImgAltTagText("");
                    changeExternalLink_OnImageClickText("");
                }
            }}
        >
            Add Image
        </Button>
        <h3> Preview </h3>
        <div className="img-row">
            {pictureCaptionPairs.map((pair: imgRowItem, index: number) => (
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
