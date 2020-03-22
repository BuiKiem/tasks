import React from 'react';
import {CssBaseline, Typography} from "@material-ui/core";
import {NoteAdd as NoteAddIcon} from "@material-ui/icons";

function App() {
  return (
      <>
        <CssBaseline />
        <Typography component="h1" variant="h1">Tasks</Typography>
        <NoteAddIcon />
        </>
  );
}

export default App;
