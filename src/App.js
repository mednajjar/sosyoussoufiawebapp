import React from 'react';
import { Home, About, NotFound, Contact, Privacy, Login, TopBar, Dashboard } from './components/pages';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="privacy_policy" element={<Privacy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="/dashboard/" exact element={<Dashboard />} />
          <Route path="/dashboard/:page" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

