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
    let teamPage_personToEdit = editedContent.teamPage_personToEdit || 
        {firstName: "", lastName: "", bio: "", github: "", linkedin: ""
        } as Person;

    let person = {} as Person;

    const updateFirstName = (e: string) => {
        let val = e == undefined ? "" : e;
        person.firstName = val;
    }

    const updateLastName = (e: string) => {
        var val = e == undefined ? "" : e;
        person.lastName = e;
    }

    const updateBio = (e: string) => {
        var val = e == undefined ? "" : e;
        person.bio = e;
    }

    const updateGithub = (e: string) => {
        var val = e == undefined ? "" : e;
        person.github = e;
    }

    const updateLinkedIn = (e: string) => {
        var val = e == undefined ? "" : e;
        person.linkedin = e;
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
        console.log(teamPage_content);
        let personToEdit = teamPage_content.find(function(person) {
            if (person.firstName === fName && person.lastName === lName) {
                return person;
            }
        })
        if (personToEdit == undefined) {
            return {firstName: "", lastName: "", bio: "", github: "", linkedin: ""} as Person;
        }
        updateFirstName(personToEdit.firstName);
        updateLastName(personToEdit.lastName);
        updateBio(personToEdit.bio);
        updateGithub(personToEdit.github);
        updateLinkedIn(personToEdit.linkedin);
        setEditedContentOnChange("teamPage_personToEdit", personToEdit);
    }

    return <>
        <h3>Person to Edit</h3>
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
            <input type="text" value={teamPage_personToEdit.firstName} onChange={(e) => updateFirstName(e.target.value)} />
            <h3>Last Name</h3>
            <input type="text" value={teamPage_personToEdit.lastName} onChange={(e) => updateLastName(e.target.value)} />
            <h3>Bio</h3>
            <input type="text" value={teamPage_personToEdit.bio} onChange={(e) => updateBio(e.target.value)} />
            <h3>Github Link</h3>
            <input type="text" value={teamPage_personToEdit.github} onChange={(e) => updateGithub(e.target.value)} />
            <h3>LinkedIn Link</h3>
            <input type="text" value={teamPage_personToEdit.linkedin} onChange={(e) => updateLinkedIn(e.target.value)} />
            <button onClick={addPerson}>Do Something</button>
        </div>
    </>
}