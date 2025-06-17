import { useState } from "react";
import { NotesContext } from "./NoteContext";
import Notes from "../assets/data";

const NoteContextProvider = ({children}) => {
  
    const [notesData, setNotesData] = useState(Notes);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  return (
    <NotesContext.Provider
      value = {{notesData, setNotesData, selectedNoteIndex, setSelectedNoteIndex}}
    >
      {children}
    </NotesContext.Provider>
  )
} 

export default NoteContextProvider;