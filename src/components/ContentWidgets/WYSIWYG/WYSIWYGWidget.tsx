import React from 'react';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from "draft-js";
import { ContentSingularData } from '../../_data/ContentSingularData';

export const WYSIWYGWidget: React.FC<ContentSingularData> = ({ wysiwyg_state }) => {
    if(!wysiwyg_state || wysiwyg_state !== null) {
        return <></>
    } else {
        return <div dangerouslySetInnerHTML={{ __html: stateToHTML(convertFromRaw(wysiwyg_state)) }} />
    }
}
