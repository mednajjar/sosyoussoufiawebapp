import React from 'react';
import { Home, About, NotFound, Contact, Privacy, TopBar } from './components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/layouts/Footer';



function App() {
  return (

    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="privacy_policy" element={<Privacy />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
