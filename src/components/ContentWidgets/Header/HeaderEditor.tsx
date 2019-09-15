import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { EMPTY_HEADER } from './HeaderConstants';
import { Header } from './Header';
import './Header.css';

export const HeaderEditor: React.FC<WidgetEditorProps> = ({
  editedContent,
  setEditedContentOnChange
}) => {
    const headerContent = editedContent.header_content || EMPTY_HEADER;

    return <> 
        <div className="header-editor">
            <div>
                Header Name: <input type="text" 
                            value={headerContent.header_text}
                            onChange={(e)=>{
                                headerContent.header_text = e.target.value;
                                setEditedContentOnChange("header_content", headerContent)}}></input>
                Text Size: <input 
                            type="number"
                            min="0"
                            value={headerContent.text_size}
                            onChange={(e)=>{
                                headerContent.text_size = Number(e.target.value);
                                setEditedContentOnChange("header_content", headerContent)}}
                        ></input>
            </div>
            <div>
                Image Link: <input type="text" 
                            value={headerContent.image_link}
                            onChange={(e)=>{
                                headerContent.image_link = e.target.value;
                                setEditedContentOnChange("header_content", headerContent)}}></input>
                Image Blur: <input 
                            type="number"
                            min="0"
                            value={headerContent.image_blur}
                            onChange={(e)=>{
                                headerContent.image_blur = Number(e.target.value);
                                setEditedContentOnChange("header_content", headerContent)}}
                            ></input>
            </div>
            <div className="header-editor-slider">
                Top-left X: <input type="range" min="-50" max="50" 
                            defaultValue={""+headerContent.image_top_x}
                            onChange={(e)=>{headerContent.image_top_x = Number(e.target.value)}}
                            onMouseUp={()=>{setEditedContentOnChange("header_content", headerContent)}}></input>  
                Top-left Y: <input type="range" min="-50" max="50" 
                            defaultValue={""+headerContent.image_top_y}
                            onChange={(e)=>{headerContent.image_top_y = Number(e.target.value)}}
                            onMouseUp={()=>{setEditedContentOnChange("header_content", headerContent)}}></input>
            </div>
            Image Zoom: <input 
                        type="number"
                        value={headerContent.image_zoom}
                        onChange={(e)=>{
                            headerContent.image_zoom = Number(e.target.value);
                            setEditedContentOnChange("header_content", headerContent)}}
                        ></input>%
        </div>
        <p>Preview</p>
        <Header header_content={headerContent}></Header>
    </>
}