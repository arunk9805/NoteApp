import { useContext } from "react";
import homeBanner from "../assets/homeBanner.svg";
import Navbar from "./Navbar";
import { NotesContext } from "../context/NoteContext";
import "./components.css";
import InputBox from "./InputBox";

function Mynotes() {
  const { notesData, selectedNoteIndex } = useContext(NotesContext);

  const formattedDate = (timeStemp) => {
    const date = new Date(timeStemp); 

    const day = date.getDate();
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`; 
  }

  const formattedTime = (timeStemp) =>  {

    const date = new Date(timeStemp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = (hours>=12) ? "PM" : "AM";
    const formattedHours = hours%12 || 12;

   return `${formattedHours}:${minutes} ${ampm}`;
  }
 
  return (
    <div>
      {selectedNoteIndex == null && (
        <div className="mynote-main-container">
          <img src={homeBanner} alt="Home Banner" />
          <h1>Pocket Notes</h1>
          <p>Send and receive messages without keeping your phone online.</p>
          <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>
      )}

      {selectedNoteIndex != null && (
        <>
          <Navbar />
          <div className="mynote-main-container-2">
            {notesData[selectedNoteIndex]?.noteData.map((item, index) => (
              <div className="show-data" key={index}>
                <p className="notes">{item.message}</p>
                <p className="date-and-time">
                  <span>{formattedDate(item.timeStemps)}</span>
                  <span className="dot">•</span>
                  <span>{formattedTime(item.timeStemps)}</span>
                </p>
              </div>
            ))}
          </div>
          <InputBox />
        </>
      )}
    </div>
  );
}

export default Mynotes;
