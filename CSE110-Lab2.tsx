import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { nanoid } from 'nanoid';
import ToggleTheme, { ClickCounter } from "./hooksExercise";
import { title } from 'process';
import { StickyNotes } from './stickyNotes';
import { ThemeContext } from './themeContext';

function App() {
  
  return (
    <StickyNotes />  
  );
}

export default App;
