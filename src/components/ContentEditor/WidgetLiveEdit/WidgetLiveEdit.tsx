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

  useEffect(() => {
    console.log("running effects");

    // update server timestamp at certain interval (if in the editing stage)
    if (editing) {
      const updateOnce = () => {
        console.log("updating timestamp: " + firebase.database.ServerValue.TIMESTAMP.toString()
          + ", user: " + (user != null && user.toString()));
        widgetRef.update({
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          editor: (user && user.email) || "Unknown user",
          saved: false
        });
      };

      updateOnce();

      // update database every 45s, consider less than 60s editing
      const interval = setInterval(() => {
        updateOnce();
      }, 45000);

      return () => clearInterval(interval);
    }
  });

  // check firebase for recent edit timestamp
  widgetRef.once('value', function(snapshot) {
    if (snapshot.val()) {
      console.log("snapshot returned: " + snapshot.val().timestamp + " " + snapshot.val().editor);

      let diff: number = (Date.now() - snapshot.val().timestamp) / 1000;
      let saved: boolean = snapshot.val().saved;

      if (!saved && diff < 60) {
        let editorName = snapshot.val().editor;

        setMessage("currently being edited by " + (editorName == (user && user.email) ? "you" : editorName));
        console.log("message updated");
      }
    } else {
      console.log("live edit snapshot is null");
    }
  });

  let bar = <div
    className={(message == "safe to edit") ?
                "widget-live-edit-bar-safe" : "widget-live-edit-bar-unsafe"}>
    {message}
  </div>;


  return <div className="widget-live-edit-chip">
    {bar}
  </div>
 }