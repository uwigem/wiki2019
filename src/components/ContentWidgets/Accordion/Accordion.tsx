import React from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';

/**
 * Accordion is a collapsible list
 * 
 * Last Modified
 * Jennifer Tao
 * July 18, 2019
 */
export const Accordion: React.FC<ContentSingularData> = ({
    accordion_content
}) => {
    if (!accordion_content) {
        return <></>
    }

    return <>
        {accordion_content.map((section, index) => {
            return <div className={section.isActive? "active" : ""}>
                <button className="accordion-title">{section.title}</button>
                <div className="accordion-panel">{section.panel}</div>
            </div>
        })}
    </>
}