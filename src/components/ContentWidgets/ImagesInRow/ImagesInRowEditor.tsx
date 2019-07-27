import React, { useState } from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './ImagesInRow.css';
import { Button, TextField } from '@material-ui/core';

type ImgRowItem = {
    imgLink: string;
    imgCaption: string;
    imgAltTag: string;
    externalLink: string;
}

/**
 * Diplays an editor to create/edit an ImageInRow widget
 *
 * Last Modified
 * Nitesh Chetry
 * July 26, 2019
 */
export const ImagesInRowEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const [imgLinkText, changeImgLinkText] = useState("");
    const [imgCaptionText, changeCaptionText] = useState("");
    const [imgAltTagText, changeImgAltTagText] = useState("");
    const [externalLink, changeExternalLink] = useState("");
    const [emptyImgLinkSubmitted, switchEmptyImgLinkSubmitted] = useState(false);
    const [emptyCaptionAndAltTagSubmitted, switchEmptyCaptionAndAltTagSubmitted] = useState(false);
    let pictureCaptionPairs: ImgRowItem[] = editedContent.imagesInRow_items || [];

    const addImage = (imgLinkText: string, imgCaptionText: string, imgAltTagText: string,
        externalLink: string) => {
        if (imgLinkText !== "" && (imgCaptionText !== "" || imgAltTagText !== "")) {
            pictureCaptionPairs.push({
                imgLink: imgLinkText,
                imgCaption: imgCaptionText,
                imgAltTag: imgAltTagText,
                externalLink: externalLink
            });
            setEditedContentOnChange("imagesInRow_items", pictureCaptionPairs);
            changeImgLinkText("");
            changeCaptionText("");
            changeImgAltTagText("");
            changeExternalLink("");
        }
    }

    if (!pictureCaptionPairs) {
        return <></>;
    }
    return <>
        <h3> Add New Image </h3>
        {emptyImgLinkSubmitted ?
            <>
                <h4 className="error-message"> Image Link must not be empty</h4>
                <TextField /** image link text field with reminder for user to add image link */
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
            </> :
            <TextField /** default image link text field */
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
        }
        {emptyCaptionAndAltTagSubmitted ?
            <>
                <h4 className="error-message">
                    Either Caption or Alternative Text must not be empty
                </h4>
                <TextField /** caption text field with reminder for user to add caption */
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
                <TextField /** alt text field with reminder for user to add alt text */
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
            </> :
            <>
                <TextField /** default caption text field */
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
                <TextField /** default alt text field */
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
            </>
        }
        <TextField /** text field for user to add external link when image or caption is clicked */
            fullWidth
            label="External Link"
            helperText="defaults to image link"
            className="text-field"
            value={externalLink}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                changeExternalLink(e.target.value);
            }}
            variant="outlined"
            margin="dense"
            multiline
        />
        <Button
            variant="outlined"
            color="primary"
            onClick={e => {
                switchEmptyImgLinkSubmitted(imgLinkText === "");
                switchEmptyCaptionAndAltTagSubmitted(imgCaptionText === "" && imgAltTagText === "");
                addImage(imgLinkText, imgCaptionText, imgAltTagText, externalLink);
            }}
        >
            Add Image
        </Button>
        <h3> Preview </h3>
        <div className="img-row">
            {pictureCaptionPairs.map((pair: ImgRowItem, index: number) => (
                <div className="img-row-item">
                    <figure>
                        <a href={pair.externalLink ? pair.externalLink : pair.imgLink} >
                            <img src={pair.imgLink} alt={pair.imgAltTag ? pair.imgAltTag :
                                pair.imgCaption}
                            />
                            <figcaption className="img-row-caption">{pair.imgCaption}</figcaption>
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
