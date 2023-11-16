import { useState, useEffect } from "react";
import NotesList from "./Note/NotesList";
import Header from "./Note/Header";
import { deleteNote, getNotes, postNote } from "../services/noteService";
import "../styles/notes.css";
import { useNavigate } from 'react-router'
import NavBar from "./NavBar";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNotes();
        console.log("here at fetch data");
        setNotes(response.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchData();
  }, [setNotes]);

  const addNote = async ({title, content, visibility}) => {
    const newNote = {
      title: title,
      content: content,
      visibility: visibility,
    };

    try {
      const addedNote = await postNote(newNote);
      console.log("i am at add Note", addedNote); 
      navigate(0);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const deleteNotes = async (id) => {
    try {
      console.log("delete Id",id);
      await deleteNote(id); 
      navigate(0);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NavBar /> 
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNotes}
        />
      </div>
    </div>
  );
};

export default Home;
