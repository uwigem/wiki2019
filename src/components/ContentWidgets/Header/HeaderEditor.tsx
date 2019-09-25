import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Color, EMPTY_HEADER } from './HeaderConstants';
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
                <p>Header Name </p>
                <input type="text" 
                    value={headerContent.header_text}
                    onChange={(e)=>{
                        headerContent.header_text = e.target.value;
                        setEditedContentOnChange("header_content", headerContent)}}>
                </input>
            </div>
            <div>
                <p>Text Size </p>
                <input 
                    type="number"
                    min="0"
                    value={headerContent.text_size}
                    onChange={(e)=>{
                        headerContent.text_size = Number(e.target.value);
                        setEditedContentOnChange("header_content", headerContent)}}
                ></input>
            </div>

            <div className="header-radio-div">
                <p>Text Color </p>
                <label>
                    <input
                        type="radio"
                        value={Color.WHITE}
                        checked={headerContent.text_color===Color.WHITE}
                        onChange={(e)=>{
                            headerContent.text_color = e.target.value;
                            setEditedContentOnChange("header_content", headerContent)
                        }}
                    />
                    White
                    </label>
                <label>
                    <input
                        type="radio"
                        name="react-tips"
                        value={Color.BLACK}
                        checked={headerContent.text_color===Color.BLACK}
                        onChange={(e)=>{
                            headerContent.text_color = e.target.value;
                            setEditedContentOnChange("header_content", headerContent)
                        }}
                    />
                    Black
                </label>
            </div>

            <div className="header-slider-y">
                <p style={{display: "block"}}>Top-left Y: {headerContent.image_top_y}%</p>
                <input type="range" min="0" max="100" 
                    defaultValue={""+headerContent.image_top_y}
                    onChange={(e)=>{headerContent.image_top_y = Number(e.target.value)}}
                    onMouseUp={()=>{setEditedContentOnChange("header_content", headerContent)}}>
                </input>
            </div>

            <div className="header-slider-x">
                <p>Top-left X {headerContent.image_top_x}%</p>
                <div>
                    <input type="range" min="0" max="100" 
                        defaultValue={""+headerContent.image_top_x}
                        onChange={(e)=>{headerContent.image_top_x = Number(e.target.value)}}
                        onMouseUp={()=>{setEditedContentOnChange("header_content", headerContent)}}></input> 
                        
                </div>
                <div>
                    <p>Image Link </p>
                    <input type="text" 
                        value={headerContent.image_link}
                        onChange={(e)=>{
                            headerContent.image_link = e.target.value;
                            setEditedContentOnChange("header_content", headerContent)}}>
                    </input>
                </div>
                    <p>Image Blur </p>
                    <input 
                        type="number"
                        min="0"
                        value={headerContent.image_blur}
                        onChange={(e)=>{
                            headerContent.image_blur = Number(e.target.value);
                            setEditedContentOnChange("header_content", headerContent)}}>
                    </input>
                <div>
                    <p>Image Zoom </p> 
                    <input 
                        type="number"
                        value={headerContent.image_zoom}
                        onChange={(e)=>{
                            headerContent.image_zoom = Number(e.target.value);
                            setEditedContentOnChange("header_content", headerContent)}}>
                    </input>
                    <p>%</p>
                </div>
            </div>  
        </div>
        <div className="header-preview">
            <Header header_content={headerContent}></Header>
        </div>
    </>
}