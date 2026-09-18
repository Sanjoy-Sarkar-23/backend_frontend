import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>

      {/* Login */}
      {/* <Route
        path="/login"
        element={
          isLoggedIn ? <Navigate to="/dashboard" /> : <Login />
        }
      /> */}
      <Route
        path="/login"
        element={
          <Login />
        }
      />

      {/* Dashboard */}
      {/* <Route
        path="/dashboard"
        element={
          isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
        }
      /> */}
       <Route
        path="/dashboard"
        element={
          <Dashboard /> 
        }
      />


      {/* Default route */}
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />

    </Routes>
  );
}

export default App;