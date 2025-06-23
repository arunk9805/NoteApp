import { useContext } from "react";
import { NotesContext } from "../context/NoteContext";

function Navbar() {

  const {notesData, selectedNoteIndex} = useContext(NotesContext);

  const getInitials = (title) => {
    const words = title.trim().split(/\s+/);
    if(words.length === 1) {
      return words[0][0].toUpperCase();
    }
    else {
      return words[0][0].toUpperCase() + words[1][0].toUpperCase();
    }
  }

  return (
    <div className="navbar">
      <div className="icon">
        <p className="icon-image" style={{background: notesData[selectedNoteIndex].bgColor}}>{getInitials(notesData[selectedNoteIndex]?.title)}</p>
      </div>
      <div className="note-title">
        <p>{notesData[selectedNoteIndex]?.title}</p>
      </div>
    </div>
  );
}

export default Navbar;
