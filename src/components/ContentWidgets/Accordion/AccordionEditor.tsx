import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Accordion } from './Accordion';

export const AccordionEditor: React.FC<WidgetEditorProps> = ({
    editedContent,
    setEditedContentOnChange
}) => {
    const emptySection = {
        title: "",
        panel: ""
    }
    const accordionContent = editedContent.accordion_content || [emptySection];
    
    const addAccordionSection = (index: number) => {
        let newAccordion = accordionContent.slice(0, index);
        newAccordion.push(emptySection);
        newAccordion = newAccordion.concat(accordionContent.slice(index));
        setEditedContentOnChange("accordion_content", newAccordion);
    };

    const deleteAccordionSection = (index: number) => {
        let newAccordion = accordionContent.slice(0);
        newAccordion.splice(index, 1);
        setEditedContentOnChange("accordion_content", newAccordion);
    }

    const updateTitle = (s: string, index: number) => {
        let newAccordion = accordionContent.slice(0);;
        newAccordion[index].title = s;
        setEditedContentOnChange("accordion_content", newAccordion);
    };

    const updatePanel = (s: string, index: number) => {
        let newAccordion = accordionContent.slice(0);;
        newAccordion[index].panel = s;
        setEditedContentOnChange("accordion_content", newAccordion);
    };

    return <> 
        <Accordion accordion_content={accordionContent}></Accordion>
        {accordionContent.map((section, index) => {
            return <div className="accordion-editor">
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
                <button 
                    className="accordion-delete-button"
                    onClick={() => deleteAccordionSection(index)}
                >-</button>
                <textarea
                    className="accordion-panel-input"
                    rows={20}
                    value={section.panel? section.panel : ""}
                    onChange={(e) => updatePanel(e.target.value, index)}
                ></textarea>
            </div>
        })}
        <div className="accordion-editor">
            <button 
                className="accordion-add-new-button"
                onClick={() => addAccordionSection(accordionContent.length)}
            >+</button>
        </div>
    </>

}