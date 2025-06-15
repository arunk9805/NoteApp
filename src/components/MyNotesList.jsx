import "./components.css";
import Notes from "../assets/data";

function MyNotesList() {

  const handleNote = (index) => {
    
  };

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
    <div className="notes-list">
      <p className="heading">Pocket Notes</p>
      <div className="all-notes">
        {Notes.map((noteData, index) => (
          <div className="note" key={index} onClick={handleNote(index)}>
            <div className="icon">
              <p className="icon-image">{getInitials(noteData.title)}</p>
            </div>
            <div className="note-title">{noteData.title}</div>
          </div>
        ))}
      </div>
      <button className="add-notes-btn"> + </button>
    </div>
  );
}

export default MyNotesList;
