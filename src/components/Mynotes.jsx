import { useContext } from "react";
import homeBanner from "../assets/homeBanner.svg";
import Navbar from "./Navbar";
import { NotesContext } from "../context/NoteContext";
import "./components.css";

function Mynotes() {
  const { notesData, selectedNoteIndex } = useContext(NotesContext);
  console.log(notesData[selectedNoteIndex]?.title);
  return (
    <div>
      {/* <Navbar /> */}
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
            {[...Array(5)].map((_, i) => (
              <div className="show-data">
                <p className="notes">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  cum sunt quas quae animi incidunt accusamus tempora corporis
                  officia doloribus quam repudiandae suscipit alias earum
                  upiditate iure libero dolorum quae! blanditiis reprehenderit
                  quia, eum nemo itaque excepturi vero enim nesciunt sint
                  maxime! Enim dolores animi voluptatem labore praesentium ipsa,
                  saepe cupiditate iure libero dolorum quae!
                </p>
                <p className="date-and-time">
                  <span>9 Mar 2025</span>
                  <span className="dot">•</span>
                  <span>10:36 PM</span>
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Mynotes;
