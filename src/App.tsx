import React, { Fragment } from 'react';
import './App.css';
import './styles/sb-admin-2.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import AccountRoute from './Components/AccountRoute';
import Login from './pages/Account/Login';
import Admin from './pages/Admin/Admin';
function App() {
  return (
    <div className="App" id='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<PrivateRoute><Login /></PrivateRoute>}></Route>
          <Route path='/login' element={<AccountRoute><Login /></AccountRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
