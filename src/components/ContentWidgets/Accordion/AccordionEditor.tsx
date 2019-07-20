import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';

export const AccordionEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const addAccordionSection = (index: number) => {

    };

    const updateTitle = (s: string, index: number) => {

    };

    const updatePanel = (s: string, index: number) => {

    };

    if (!editedContent.accordion_content) {
        return <div className="accorsion-section">
            <button 
                className="accordion-add-new-button"
                onClick={() => addAccordionSection(0)}
            >+</button>
        </div>
    }
    const accordiondContent = editedContent.accordion_content;
    return <> 
        {accordiondContent.map((section, index) => {
            return <div className="accorsion-section">
                <button 
                    className="accordion-add-new-button"
                    onClick={() => addAccordionSection(index)}
                >+</button>
                <input 
                    type="text"
                    className="accordion-title-input"
                    value={section.title? section.title : ""}
                    onChange={(e) => updateTitle(e.target.value, index)}
                ></input>
                <input
                    type="text"
                    className="accordion-panel-input"
                    value={section.panel? section.panel : ""}
                    onChange={(e) => updatePanel(e.target.value, index)}
                ></input>
            </div>
        })}
        <div className="accordion-section">
            <button 
                className="accordion-add-new-button"
                onClick={() => addAccordionSection(accordiondContent.length)}
            >+</button>
        </div>
    </>

}