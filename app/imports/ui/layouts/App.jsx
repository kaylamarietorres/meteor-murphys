import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import Murphys from '../pages/Murphys';
import TopMenu from '../components/TopMenu';
import BottomMenu from '../components/BottomMenu';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <Routes>
        <Route exact path="/" element={<Murphys />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomMenu />
    </div>
  </Router>
);

export default App;
