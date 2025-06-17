import MyNotesList from "./MyNotesList";
import Mynotes from "./Mynotes";
import "./components.css";

function Home() {

  return (
    <>
      <div className="mynoteslist">
        <MyNotesList />
      </div>

      <div className="mynotes">
        <Mynotes />
      </div>
    </>
  );
}
export default Home;
