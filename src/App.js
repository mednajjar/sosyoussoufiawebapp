import React from 'react';
import {
  Home,
  About,
  NotFound,
  Contact,
  Privacy,
  Login,
  TopBar,
  Dashboard
} from './components/pages';
import {
  // BrowserRouter,
  // Routes,
  // Route,
  useRoutes
  // Navigate
} from "react-router-dom";
import Register from './components/pages/Register';
// import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute, ConectedRoute } from './PrivateRoute';
import { useAuth } from './contexts/AuthContext';
import PharmacyList from './components/pages/dashboard/components/PharmacyList';
import AddPharmacy from './components/pages/dashboard/components/AddPharmacy';
import EditPharmacy from './components/pages/dashboard/components/EditPharmacy';
// import { useAuth } from './contexts/AuthContext';

function App() {
  const currentUser = useAuth()
  let element = useRoutes([
    {
      path: '/',
      element: <Home />

    },
    {
      path: "/dashboard/",
      element: <PrivateRoute user={currentUser}><Dashboard /></PrivateRoute>,
      children: [
        {
          path: "pharmacy_list",
          element: <PharmacyList />,
        },
        {
          path: "add_pharmacy",
          element: <AddPharmacy />
        },
        {
          path: "edit_pharmacy/:id",
          element: <EditPharmacy />
        },

      ],
    },
    { path: "about", element: <About /> },
    { path: "privacy_policy", element: <Privacy /> },
    { path: "contact", element: <Contact /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <ConectedRoute user={currentUser}><Login /></ConectedRoute> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      <TopBar />
      {/* <AuthProvider> */}
      {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="privacy_policy" element={<Privacy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<ConectedRoute user={currentUser}><Login /></ConectedRoute>} />
          <Route path="register" element={<Register />} />
          
            <Route path="/dashboard/"  element={<PrivateRoute user={currentUser}><Dashboard /></PrivateRoute>}/>
         
          <Route path="/dashboard/:page" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes> */}
      {(element)}


    </React.Fragment>
  );
}


export default App;

