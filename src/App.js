import React from "react";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home  from "./components/Home";
import Feed from "./components/Feed";
import EditNotes from "./components/Note/EditNotes";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/edit" element={<EditNotes />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>

  );
}

export default App;
