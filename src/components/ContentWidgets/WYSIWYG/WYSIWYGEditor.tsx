import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { stateToHTML } from 'draft-js-export-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const WYSIWYGEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const contentState = (editedContent.wysiwyg_state && editedContent.wysiwyg_state !== null) ?
    editedContent.wysiwyg_state : convertToRaw(EditorState.createEmpty().getCurrentContent());
    
    /*return <>
    <div dangerouslySetInnerHTML={{ __html: stateToHTML(convertFromRaw(contentState)) }} />*/
    return <>
        <Editor
            editorState={EditorState.createWithContent(convertFromRaw(contentState))}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(e) => setEditedContentOnChange("wysiwyg_state", convertToRaw(e.getCurrentContent()))}
        />
    </>
}