import React, { useState, useEffect, useContext } from 'react';
import { ContentSingularData } from '../../_data/ContentSingularData';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { WidgetTypes, ContentMapping } from '../../ContentMapping/ContentMapping';
import { HistoryTypes } from '../../_debug/EditorHistory';
import equal from 'deep-equal';
import { EnvironmentContext } from '../../../contexts/EnvironmentContext/EnvironmentContext';
import firebase from 'firebase';
import { createMuiTheme } from '@material-ui/core';

import './WidgetLiveEdit.css';

type WidgetLiveEditProps = {
  contentHash: string,
  currYear: number,
  pageToEdit: string,
  user: firebase.User | null
  editing: boolean
};

/**
 * WidgetLiveEdit communicate with firebase and display whether a widget is
 * currently being edited somewhere else.
 */

 export const WidgetLiveEdit: React.FC<WidgetLiveEditProps> = ({
   contentHash, currYear, pageToEdit, user, editing
 }) => {
  let [message, setMessage] = useState<string>("safe to edit");

  let widgetRef: firebase.database.Reference = firebase.database().ref(`${currYear}/LiveEditHistory/${pageToEdit}/${contentHash}`);

  const updateOnce = () => {
    widgetRef.update({
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      editor: (user && user.email) || "Unknown user",
      saved: false
    });
  };

  const readTimestampOnce = () => {
    widgetRef.once('value', function(snapshot) {
      if (snapshot.val()) {
        let diff: number = (Date.now() - snapshot.val().timestamp) / 1000;
        let saved: boolean = snapshot.val().saved;

        if (!saved && diff < 60) {
          let editorName = snapshot.val().editor;

          setMessage("currently being edited by " + (editorName == (user && user.email) ? "you" : editorName));
        }
      }
    });
  }

  useEffect(() => {
    if (editing) {
      // update database every 45s, consider edits as recent as 60s as still editing
      updateOnce();
      const updateInterval = setInterval(() => {
        updateOnce();
      }, 45000);
      return () => clearInterval(updateInterval);
    }
  });

  /*
  useEffect(() => {
    // recheck firebase and update banner every 10s
    readTimestampOnce();
    const recheckInterval = setInterval(() => {
      console.log("rechecked timestamp");
      readTimestampOnce();
    }, 10000);
    return () => clearInterval(recheckInterval);
  });
  */

  readTimestampOnce();

  let bar = <div
    className={(message == "safe to edit" ||
                message == "currently being edited by you") ?
                "widget-live-edit-bar-safe" : "widget-live-edit-bar-unsafe"}>
    {message}
  </div>;


  return <div className="widget-live-edit-chip">
    {bar}
  </div>
 }