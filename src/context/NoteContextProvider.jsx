import { NotesContext } from "./NoteContext";

const NoteContextProvider = ({children}) => {
  
  return (
    //need setup discussion and state management - This is dummy data. 
    <NotesContext.Provider
    value = {{isAddClicked, setAddClick, details, setDetails}}
    >
      {children}
    </NotesContext.Provider>
  )
} 

export default NoteContextProvider;