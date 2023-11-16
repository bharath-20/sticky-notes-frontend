import { useState } from "react";
import Switch from "react-switch";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [title, setTitle] = useState("");
  const characterLimit = 200;
  const titleCharacterLimit = 15;
  const [isChecked, setIsChecked] = useState(false);

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

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      const visibility = isChecked ? "1" : "0";
      handleAddNote({ title, visibility, content: noteText });
      setNoteText("");
      setTitle("");
    }
  };

  const handleSwitch = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div className="note new">
      <div className="note-header">
        <div className="add-note-title">
          <input
            type="text"
            className="add-note-title"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Add Title"
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

export default AddNote;
