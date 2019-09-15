import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './WYSIWYGEditor.css';

export const WYSIWYGWidget: React.FC<ContentSingularData> = ({ wysiwyg_state }) => {
    if(!wysiwyg_state) {
        return <></>
    } else {
        // display editor content by setting editor as read only
        return <Editor 
            initialContentState={JSON.parse(wysiwyg_state)}
            wrapperClassName="wysiwygWrapper"
            toolbarHidden={true}
            readOnly={true}
        />
    }
}
