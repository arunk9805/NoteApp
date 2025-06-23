import { useContext, useState } from "react";
import { NotesContext } from "../context/NoteContext";

function PopUp() {
  const colorOptions = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [errorColor, setErrorColor] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);

  const {
    notesData,
    setNotesData,
    setShowPopup,
    color,
    setColor,
    groupName,
    setGroupName,
    setSelectedNoteIndex
  } = useContext(NotesContext);

  const handleClosePopUp = () => {
    setShowPopup(false);
  };

  const handleCreatGroup = () => {
    if (color === "") {
      setErrorColor(true);
      return;
    }

    if(groupName.trim() === "") {
      setErrorTitle(true);
      return;
    }

    const newData = {
      notesId: notesData.length + 1,
      title: groupName,
      bgColor: color,
      noteData: [],
    };

    const updatedNotesData = [...notesData, newData];

    
    setNotesData(updatedNotesData);
    setShowPopup(false);
    setGroupName("");
    setColor("");
    setSelectedNoteIndex(notesData.length);
  };
  
  return (
    <div className="popup-overlay" onClick={handleClosePopUp}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <p className="creat-grp-name">Creat New Group</p>
        <div className="errorMsg">{errorTitle && <p>Give a proper Group Title!</p>}</div>
        <div className="add-margin">
          <label htmlFor="">Group Name</label>
          <input
            type="text"
            placeholder="Enter group name"
            name=""
            id=""
            onChange={(e) => {setGroupName(e.target.value); if(errorTitle === true) setErrorTitle(false)}}
          />
        </div>

        <div className="errorMsg">{errorColor && <p>Select Background Image!</p>}</div>

        <div className="color-options-container">
          <p>Choose color</p>
          {colorOptions.map((selectedColor, index) => (
            <div
              key={index}
              className={`color-options ${(selectedColor===color) ? "selectedColor" : ""}`} 
              style={{ backgroundColor: selectedColor }}
              onClick={() => {
                setColor(selectedColor);
                if(errorColor === true) setErrorColor(false);
              }}
            >
              {/* <span value={color} className="colorCircle "></span> */}
            </div>
          ))}
        </div>
        <div className="creat-btn">
          <button className="" onClick={handleCreatGroup}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
