import { useState } from "react";
import { NotesContext } from "./NoteContext";
import Notes from "../assets/data";

const NoteContextProvider = ({children}) => {
  
    const [notesData, setNotesData] = useState(Notes);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [color, setColor] = useState("");
    const [groupName, setGroupName] = useState("");

  return (
    <NotesContext.Provider
      value = {{notesData, setNotesData, selectedNoteIndex, setSelectedNoteIndex, showPopup, setShowPopup, color, setColor, groupName, setGroupName}}
    >
      {children}
    </NotesContext.Provider>
  )
} 

export default NoteContextProvider;