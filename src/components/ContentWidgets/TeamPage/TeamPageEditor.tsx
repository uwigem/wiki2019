import React from 'react';
import { WidgetEditorProps } from '../../ContentMapping/ContentMapping';
import { Person } from './TeamPage'
import { Select, MenuItem } from '@material-ui/core';

export const TeamPageEditor: React.FC<WidgetEditorProps> = ({
    originalContent,
    editedContent,
    setEditedContentOnChange
}) => {
    let teamPage_content = editedContent.teamPage_content || [];
    let teamPage_personToEdit = editedContent.teamPage_personToEdit || {} as Person;

    let person = {} as Person;

    const updateFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.firstName = e.target.value;
    }

    const updateLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.lastName = e.target.value;
    }

    const updateBio = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.bio = e.target.value;
    }

    const updateGithub = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.github = e.target.value;
    }

    const updateLinkedIn = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.linkedin = e.target.value;
    }

    const addPerson = () => {
        teamPage_content.push(person);
        setEditedContentOnChange("teamPage_content", teamPage_content);
    }

    const setPersonToEdit = (e: string) => {
        console.log(e);
        let name = e.split(" ");
        let fName = name[0];
        let lName = name[1];
        let personToEdit = Array.prototype.find(teamPage_content => 
            teamPage_content.firstName === fName && 
            teamPage_content.lastName === lName)
        setEditedContentOnChange("teamPage_personToEdit", personToEdit);
    }

    return <>
        <div>
            <Select 
                value={teamPage_personToEdit.firstName + " " + teamPage_personToEdit.lastName} 
                onChange={(e) => {
                    setPersonToEdit(e.target.value as string);
                }}>
                {teamPage_content.map(people => {
                    let fullName = people.firstName + " " + people.lastName;
                    return <MenuItem key={fullName} value={fullName}>{fullName}</MenuItem>
                })}
            </Select>
            <h3>First Name</h3>
            <input type="text" value={teamPage_personToEdit.firstName || ""} onChange={(e) => updateFirstName(e)} />
            <h3>Last Name</h3>
            <input type="text" value={teamPage_personToEdit.lastName || ""} onChange={(e) => updateLastName(e)} />
            <h3>Bio</h3>
            <input type="text" value={teamPage_personToEdit.bio || ""} onChange={(e) => updateBio(e)} />
            <h3>Github Link</h3>
            <input type="text" value={teamPage_personToEdit.github || ""} onChange={(e) => updateGithub(e)} />
            <h3>LinkedIn Link</h3>
            <input type="text" value={teamPage_personToEdit.linkedin || ""} onChange={(e) => updateLinkedIn(e)} />
            <button onClick={addPerson}>Do Something</button>
        </div>
    </>
}