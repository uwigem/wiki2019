import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './Video.css';

export const VideoEditor: React.FC<WidgetEditorProps> = ({
    originalContent,
    editedContent,
    setEditedContentOnChange
}) => {
    let videoLink: string = editedContent.video_videoLink || "";
    let videoWidth: number = editedContent.video_videoWidthPercentage || 0;

    return <>
        <video 
            width={videoWidth + "%"}
            controls>
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <br />
        <h3>Video Link (only supports mp4)</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("video_videoLink", e.target.value)} />
        <h3>Video Width Percentage</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("video_videoWidth", Number(e.target.value))} />
    </>;
}