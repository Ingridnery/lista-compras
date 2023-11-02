import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import List from "./pages/list/List";

function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/list" element={<List />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;