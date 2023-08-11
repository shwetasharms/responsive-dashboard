import logo from './logo.svg';
import './App.css';
import Login from './admin/login/Login';
import { Button } from '@mui/material';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from './module/dashboard/Dashboard';
function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  // const router = createBrowserRouter([
  //   {
  //     path: '/login',
  //     element: <Login />
  //   },
  //   {
  //     path: '/register',
  //     element: <Register />
  //   },

  //   {
  //     path: '*',
  //     element: <PageNotFound></PageNotFound>
  //   },
  //   {
  //     path: '/todo',
  //     element: <PrivateRoute><TodoComponent /></PrivateRoute>
  //   },
  // ])
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Dashboard />
            // </PrivateRoute>
          }
        />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
