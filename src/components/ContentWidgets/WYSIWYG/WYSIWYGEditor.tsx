import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from "draft-js";
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './WYSIWYGEditor.css';

export const WYSIWYGEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const contentState = editedContent.wysiwyg_state ?
    JSON.parse(editedContent.wysiwyg_state) : convertToRaw(EditorState.createEmpty().getCurrentContent());

    
    return <>
        <Editor
            initialContentState={contentState}
            wrapperClassName="wysiwygWrapper"
            editorClassName="wysiwygEditor"
            // convert content to a raw JS structure, and save it as JSON string in database
            onEditorStateChange={(e) => 
                setEditedContentOnChange("wysiwyg_state", JSON.stringify(convertToRaw(e.getCurrentContent())))}
        />
    </>
}