import { useEffect, useState } from "react";
import { NotesContext } from "./NoteContext";
import Notes from "../assets/data";

const NoteContextProvider = ({children}) => {
  
    const [notesData, setNotesData] = useState(() => {
      const saved = localStorage.getItem("notesData");
      return saved ? JSON.parse(saved) : Notes;
    });

    const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [color, setColor] = useState("");
    const [groupName, setGroupName] = useState("");

    useEffect(() => {
      localStorage.setItem("notesData", JSON.stringify(notesData))
    }, [notesData])

  return (
    <NotesContext.Provider
      value = {{notesData, setNotesData, selectedNoteIndex, setSelectedNoteIndex, showPopup, setShowPopup, color, setColor, groupName, setGroupName}}
    >
      {children}
    </NotesContext.Provider>
  )
} 

export default NoteContextProvider;