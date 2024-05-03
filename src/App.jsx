import { nanoid } from "nanoid";
import "./App.css";
import AllNotes from "./components/AllNotes";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note",
      date: "04/05/2024",
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "05/05/2024",
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "08/05/2024",
    },
  ]);

  const [searchText,setSearchText] = useState("")
  const [darkMode,setDarkMode] = useState(false)

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  };

  const handeleNote = id => {
    const newNotes = notes.filter(note=>note.id!=id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'bg-black'} h-screen`}>
      <div className="max-w-7xl mx-auto p-4 lg:p-0">
        <Header setDarkMode={setDarkMode} darkMode={darkMode}></Header>
        <SearchBar setSearchText={setSearchText}></SearchBar>
        <AllNotes
          handleAddNote={handleAddNote}
          handeleNote={handeleNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        ></AllNotes>
      </div>
    </div>
  );
}

export default App;
