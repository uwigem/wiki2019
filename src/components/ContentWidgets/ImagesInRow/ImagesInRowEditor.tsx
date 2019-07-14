import React, { useState } from "react";
import { WidgetEditorProps } from "../../ContentMapping/ContentMapping";
import "./ImagesInRow.css";
import { Button, TextField } from "@material-ui/core";

/**
 * Diplays an editor to create/edit an ImageInRow widget
 *
 * Last Modified
 * Nitesh
 * July 13, 2019
 */
export const ImagesInRowEditor: React.FC<WidgetEditorProps> = ({
	editedContent,
	setEditedContentOnChange
}) => {
	interface linkCaptionPair {
		imgLink: string;
		imgCaption: string;
	}
	let pictureCaptionPairs: linkCaptionPair[] =
		editedContent.imagesInRow_linkCaptionPairs || [];
	const [imgLinkText, changeImgLinkText] = useState("");
	const [imgCaptionText, changeCaptionText] = useState("");
	if (!pictureCaptionPairs) {
		return <></>;
	}
	return (
		<>
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
			<Button
				variant="outlined"
				color="primary"
				onClick={e => {
					pictureCaptionPairs.push({
						imgLink: imgLinkText,
						imgCaption: imgCaptionText
					});
					setEditedContentOnChange(
						"imagesInRow_linkCaptionPairs",
						pictureCaptionPairs
					);
					changeImgLinkText("");
					changeCaptionText("");
				}}
			>
				Add Image
			</Button>
			<h3> Preview </h3>
			<p> click on image to remove</p>
			<div className="img-row">
				{pictureCaptionPairs.map((pair: linkCaptionPair, index: number) => (
					<div
						className="img-row-item"
						onClick={() => {
							pictureCaptionPairs.splice(index, 1);
							setEditedContentOnChange(
								"imagesInRow_linkCaptionPairs",
								pictureCaptionPairs
							);
						}}
					>
						<figure>
							<img src={pair.imgLink} alt={"image" + index} />
							<figcaption> {pair.imgCaption} </figcaption>
						</figure>
					</div>
				))}
			</div>
		</>
	);
};
