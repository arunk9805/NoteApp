import "./App.css";
import Home from "./components/Home";
import NoteContextProvider from "./context/NoteContextProvider";

function App() {
  return (
    <>
      <NoteContextProvider>
        <div className="main-container">
          <Home />
        </div>
      </NoteContextProvider>
    </>
  );
}

export default App;
