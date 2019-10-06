import React, { useState, useEffect, useContext } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import Button from '@material-ui/core/Button';
import { HistoryTypes } from '../../_debug/EditorHistory';
import firebase from 'firebase';
import './WidgetLiveEdit.css';

// if last edit is older than this (in seconds) regard it as not being edited
let firebaseTimeout = 60;
// how frequenty the client should update firebase with a new timestamp
var refreshInterval = 45;

type WidgetLiveEditProps = {
  contentHash: string,
  currYear: number,
  pageToEdit: string,
  user: firebase.User | null
  editing: boolean
  setEditing: any,
  editedContent: ContentSingularData
};

/**
 * WidgetLiveEdit manages the edit/save button, communicate with firebase to
 * figure out the state of the widget and display whether a widget is currently
 * being edited somewhere else.
 */

 export const WidgetLiveEdit: React.FC<WidgetLiveEditProps> = ({
   contentHash, currYear, pageToEdit, user, editing, setEditing, editedContent
 }) => {

  enum EditingState {
    Safe,
    CurrentUser,
    Unsafe
  }

  let [editingState, setEditingState] = useState<EditingState>(EditingState.Safe);
  let [message, setMessage] = useState<string>("safe to edit");

  let widgetRef: firebase.database.Reference = firebase.database().ref(`${currYear}/LiveEditHistory/${pageToEdit}/${contentHash}`);


  // update firebase with the current timestamp
  const updateOnce = () => {
    widgetRef.update({
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      editor: (user && user.email) || "Unknown user",
      saved: false
    });
  };

  useEffect(() => {
    if (editing) {
      // update database on a set interval if we're editing.
      // if browser is closed unexpectedly, the last time we're still online
      // will be recorded.
      const updateInterval = setInterval(() => {
        updateOnce();
      }, refreshInterval * 1000);
      return () => clearInterval(updateInterval);
    }
  });

  useEffect(() => {
    // set up listener to firebase, re-render when updated
    widgetRef.on('value', function(snapshot) {
      if (snapshot.val()) {
        console.log("listener heard a change");
        let diff: number = (Date.now() - snapshot.val().timestamp) / 1000;
        let saved: boolean = snapshot.val().saved;
        console.log("time diff: " + diff);

        if (!saved && diff < firebaseTimeout) {
          // not saved and not yet timed out
          let editorName = snapshot.val().editor;
          if (user && editorName == user.email) {
            setEditingState(EditingState.CurrentUser);
            setMessage("currently edited by you");
          } else {
            setEditingState(EditingState.Unsafe);
            setMessage("currently edited by " + editorName);
          }
        } else {
          // otherwise safe
          setEditingState(EditingState.Safe);
          setMessage("safe to edit");
        }
      }
    });
  });

  // determine banner style
  let banner = <div
    className={editingState == EditingState.Unsafe ?
      "widget-live-edit-bar-unsafe" : "widget-live-edit-bar-safe"} >
    {message}
  </div>;

  // determine which buttons to show
  let button = editing ?
    <Button variant="contained" color="primary"
        onClick={async () => {
            await firebase.database().ref(`${currYear}/ContentData/${pageToEdit}/content/${contentHash}`).set(editedContent);
            await firebase.database().ref(`${currYear}/EditHistory/${pageToEdit}/${contentHash}`).push({
                type: HistoryTypes.UPDATE,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                creator: (user && user.email) || "Unknown user",
                content: editedContent
            });
            await widgetRef.update({
                saved: true
            });
            setEditing(false);
        }}>
        Save
    </Button> :
    (editingState == EditingState.Unsafe ?
    <><Button variant="contained" color="primary"
      onClick={() => {
        setEditing(true);
        updateOnce();
      }} disabled>
      Edit
    </Button>
    <Button variant="contained" color="primary"
      onClick={() => {
        setEditing(true);
        updateOnce();
      }}>
      Edit Anyway
    </Button></> :
    <Button variant="contained" color="primary"
      onClick={() => {
        setEditing(true);
        updateOnce();
      }} >
      Edit
    </Button>
    );

  return <div>
    {button}
    {banner}
  </div>
 }