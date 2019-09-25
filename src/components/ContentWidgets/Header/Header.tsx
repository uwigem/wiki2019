import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

export type HeaderContent = {
    header_text: string,
    text_size: number,
    text_color: string,
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
 * September 20, 2019
 */
export const Header: React.FC<ContentSingularData> = ({ header_content }) => {
    if (!header_content) {
        return<></>
    }

    const imgStyle = {
        fontSize: (header_content.text_size+1) +'0%',
        backgroundImage: 'url("'+ header_content.image_link+'")',
        backgroundPosition: header_content.image_top_x + '% ' + header_content.image_top_y + '%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: header_content.image_zoom + '%',
        filter: 'blur(' + header_content.image_blur + 'px)'
    }

    const textStyle = {
        fontSize: header_content.text_size + 'vw',
        color: header_content.text_color
    }
      
    return <div className="header"  style={textStyle}>     
        <div className="header-text">
            <p>{header_content.header_text}</p>
        </div>
        <div className="header-background" style={imgStyle}>
            <p className="header-hidden">{header_content.header_text}</p>
        </div>
    </div>
}