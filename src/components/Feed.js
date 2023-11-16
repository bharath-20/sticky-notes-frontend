import { useState, useEffect } from "react";
import { getPublicFeed } from "../services/feedService";
import FeedList from "./FeedComponents/FeedList";
import Header from "./Note/Header";
import NavBar from "./NavBar";

const Feed = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPublicFeed();
        console.log("here at fetch data");
        setNotes(response.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NavBar />
        <FeedList notes={notes} />
      </div>
    </div>
  );
};

export default Feed;
