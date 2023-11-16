import { useState } from "react";
import Switch from "react-switch";
import { useNavigate , useLocation} from "react-router-dom";
import { updateNote } from "../../services/noteService";
import "../../styles/notes.css";


const EditNotes = ({ handleAddNote }) => {
  const {state} = useLocation();
  console.log("state",state);
  const [noteText, setNoteText] = useState(state.content);
  const [title, setTitle] = useState(state.title);
  const characterLimit = 200;
  const titleCharacterLimit = 15;
  const prevVisibility = state.visibility === 1;
  const id = state.id;
  const [isChecked, setIsChecked] = useState(prevVisibility);

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    if (titleCharacterLimit - event.target.value.length >= 0) {
      setTitle(event.target.value);
    }
  };
  const handleUpdateNote = async (obj) => {
    const newNote = {
      title: obj.title,
      content: obj.content,
      visibility: obj.visibility,
    };
    try {
      const response = await updateNote(obj.id ,newNote);
      console.log("Update response",response)
      navigate("/home");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const visibility = isChecked ? "1" : "0";
      handleUpdateNote({ id,title, visibility, content: noteText });
      setNoteText("");
      setTitle("");
    }
  };

  const handleSwitch = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div className="edit-note-container">
      <div className="note-header">
        <div className="add-note-title">
          <input
            type="text"
            className="add-note-title"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="note-visibility">
          <div>
            <span>{isChecked ? " Private" : " Public"}</span>
          </div>
          <div>
            <Switch onChange={handleSwitch} checked={isChecked} />
          </div>
        </div>
      </div>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>

      <div className="note-footer">
        <small>{titleCharacterLimit - title.length} Title Remaining</small>
        <small>{characterLimit - noteText.length} Content Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditNotes;
