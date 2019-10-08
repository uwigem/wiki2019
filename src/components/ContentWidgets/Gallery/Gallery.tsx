import React, { useState } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Gallery.css';

type galleryImagesProps = {
    images: string[];
}

const GalleryImages: React.FC<galleryImagesProps> = ({
    images
}) => {
    const COLUMN_NUMBER = 3;
    var [currentIndex, setCurrentIndex] = useState(0);
    var [displayState, setDisplayState] = useState(false);
    const n = Math.ceil(images.length / COLUMN_NUMBER);

    const columnContent = [];
    for(let col = 0; col < COLUMN_NUMBER; col++) {
        let rowContent = [];
        for (let index = n*col; index < n*(col+1); index++) {
            rowContent.push(<img 
                className="gallery-image" 
                src={images[index]}
                onClick={() => {
                    setCurrentIndex(index);
                    setDisplayState(true);
                }}/>)
        }
        columnContent.push(<div className="gallery-col">{rowContent}</div>);
    }
    return <div className="gallery-display">
        {columnContent}
        
        <div 
            className="gallery-lightbox" 
            style={{display: displayState? "block" : "none"}}>
            <span   
                className="gallery-lightbox-prev" 
                style={{visibility: (currentIndex > 0)? "visible" : "hidden"}}
                onClick={() => {
                    console.log(currentIndex);
                setCurrentIndex(currentIndex-1);}}
            >&#10094;</span>
            <div className="gallery-lightbox-content">
            <span 
                className="gallery-lightbox-close"
                onClick={() => setDisplayState(false)}
                >&times;</span>
                <img src={images[currentIndex]}></img>
            </div>
            <span 
                className="gallery-lightbox-next"
                style={{visibility: (currentIndex < (images.length-1))? "visible" : "hidden"}}
                onClick={() => {
                    console.log(currentIndex);
                    setCurrentIndex(currentIndex+1);
                    console.log(currentIndex);
                }}
                >&#10095;</span>
        </div>
    </div>
}

/**
 * Gallery shows images in random order
 * 
 * Last Modified
 * Jennifer Tao
 * September 27, 2019
 */
export const Gallery: React.FC<ContentSingularData> = ({
    gallery_content
}) => {
    
    if (!gallery_content) {
        return <></>
    }
    /** shuffle code using the Fisher-Yates algorithm by Jeff on stackoverflow  
     *  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    */
    const shuffle = (a: string[]) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    return <GalleryImages images={shuffle(gallery_content)}></GalleryImages>
}