import React from 'react';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './WYSIWYGEditor.css';

export const WYSIWYGWidget: React.FC<ContentSingularData> = ({ wysiwyg_state }) => {
    if(!wysiwyg_state || wysiwyg_state === null) {
        return <></>
    } else {
        return <Editor 
            initialContentState={JSON.parse(wysiwyg_state)}
            wrapperClassName="wysiwygWrapper"
            toolbarHidden={true}
            readOnly={true}
        />
    }
}
