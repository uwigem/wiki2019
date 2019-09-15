import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

export type HeaderContent = {
    header_text: string,
    text_size: number,
    image_link: string,
    image_blur: number,
    image_zoom: number,
    image_top_x: number,
    image_top_y: number
}

/**
 * Header component shows text on top of an image
 * 
 * Last Modified
 * Jennifer Tao
 * September 14, 2019
 */
export const Header: React.FC<ContentSingularData> = ({ header_content }) => {
    if (!header_content) {
        return<></>
    }
    const imageStyle = {
        width: header_content.image_zoom + '%',
        filter: 'blur(' + header_content.image_blur + 'px)',
        left: header_content.image_top_x + '%',
        top: header_content.image_top_y + '%'
    };

    const textStyle = {
        fontSize: header_content.text_size + '%',
    }
      
    return <div className="header">
        
        <img className="header-image" style={imageStyle}  src={header_content.image_link}></img>   
        <p className="header-name" style={textStyle}>{header_content.header_text}</p>
    </div>
}