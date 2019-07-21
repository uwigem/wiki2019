import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentSingularData } from '../../_data/ContentSingularData';
import './Accordion.css';

/**
 * Accordion is a collapsible list
 * 
 * Last Modified
 * Jennifer Tao
 * July 21, 2019
 */
export const Accordion: React.FC<ContentSingularData> = ({
    accordion_content
}) => {
    if (!accordion_content) {
        return <></>
    }

    const collapsePanel = (e: any) => {
        const par = e.target.parentNode;
        if (par.className === "active-accordion") {
            par.className = "";
        } else {
            par.className = "active-accordion";
        }
    }

    return <>
        {accordion_content.map((section, index) => {
            return <div>
                <button 
                    className="accordion-title"
                    onClick={(e) => collapsePanel(e)}
                >{section.title}</button>
                <div className="accordion-panel">
                    <ReactMarkdown source={section.panel} />
                </div>
            </div>
        })}
    </>
}