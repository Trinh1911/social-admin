import React, { Fragment } from 'react';
import './App.css';
import './styles/sb-admin-2.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './pages/Account/Login';
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <div className="App" id='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<PrivateRoute><Admin /></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
