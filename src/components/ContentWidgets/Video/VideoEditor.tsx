import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import './Video.css';

/**
 * Let the user create an embedded video by specifying the link and a percentage width. 
 * Height will be automatic based on the aspect ratio.
 *
 * Last Modified
 * Max Zhou
 * July 15, 2019
 */

export const VideoEditor: React.FC<WidgetEditorProps> = ({
    originalContent,
    editedContent,
    setEditedContentOnChange
}) => {
    let videoLink: string = editedContent.video_videoLink || "";
    let videoWidth: number = editedContent.video_videoWidthPercentage || 0;

    return <>
        <video
            className="video-player-auto-height"
            width={videoWidth + "%"}
            controls>
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <br />
        <h3>Video Link (only supports mp4)</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("video_videoLink", e.target.value)} />
        <h3>Video Width Percentage</h3>
        <input type="text" onChange={(e) => setEditedContentOnChange("video_videoWidthPercentage", Math.min(100, Number(e.target.value)))} />
    </>;
}