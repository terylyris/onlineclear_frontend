import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Login from "./pages/Login";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;