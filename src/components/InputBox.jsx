import { useContext, useState } from "react";
import { NotesContext } from "../context/NoteContext";
import sendBtn from "../assets/sendBtn.png";

function InputBox() {

  const [noteInput, setNoteInput] = useState("");
  const { notesData, setNotesData, selectedNoteIndex } =
    useContext(NotesContext);

  const handleNoteInoutChange = (e) => {
    setNoteInput(e.target.value);
    // console.log(noteInput);
  };

  const handleAddNote = () => {
    if(noteInput.trim() === "") return;

    const newNote =  {
      message: noteInput,
      timeStemps: new Date().toLocaleString()
    }

    const updatedNotes = [...notesData];
    
    updatedNotes[selectedNoteIndex] = {
      ...updatedNotes[selectedNoteIndex],
      noteData: [...updatedNotes[selectedNoteIndex].noteData, newNote]
    }

    setNotesData(updatedNotes);

    setNoteInput("");
    console.log(notesData[selectedNoteIndex]);
  }

  return (
    <div className="input-box-container">
      <div className="input-box-inner-container">
        <textarea
          className="textarea"
          name=""
          value={noteInput}
          id=""
          placeholder=""
          onChange={handleNoteInoutChange}
        ></textarea>
        <button className="add-note-btn" onClick={handleAddNote}>
          <img src={sendBtn} alt="" className="send-icon" />
        </button>
      </div>
    </div>
  );
}

export default InputBox;
