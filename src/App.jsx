import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,Navigate, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Login from "./pages/Login";
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </Router>
//     );
//   }
// }
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle login
  const handleLogin = () => {
    // Perform login actions (e.g., send login request)
    // Once login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // Check if user is logged in based on local storage on component mount
  useEffect(() => {
    const userId = localStorage.getItem('userid');
    setIsLoggedIn(!!userId); // Update isLoggedIn based on whether userId exists in local storage
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route for Login component */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Route for HomePage component */}
        <Route path="/home" element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />} />

        {/* Redirect from root to homepage */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

// PrivateRoute component to handle authentication
function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children // Render children (e.g., HomePage) if user is logged in
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

// export default App;

export default App;