import { useContext } from "react";
import MyNotesList from "./MyNotesList";
import Mynotes from "./Mynotes";
import "./components.css";
import { NotesContext } from "../context/NoteContext";
import PopUp from "./PopUp";

function Home() {

  const {showPopup} = useContext(NotesContext);

  return (
    <>
      <div className="mynoteslist">
        <MyNotesList />
      </div>

      <div className="mynotes">
        <Mynotes />
      </div>
      {showPopup && <PopUp />}

    </>
  );
}
export default Home;
