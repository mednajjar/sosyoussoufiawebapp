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
import { useRoutes } from "react-router-dom";
import Register from './components/pages/Register';
import { PrivateRoute, ConectedRoute } from './PrivateRoute';
import PharmacyList from './components/pages/dashboard/components/PharmacyList';
import AddPharmacy from './components/pages/dashboard/components/AddPharmacy';
import EditPharmacy from './components/pages/dashboard/components/EditPharmacy';


function App() {

  let element = useRoutes([
    {
      path: '/',
      element: <Home />

    },
    {
      path: "/dashboard/",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
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
    { path: "login", element: <ConectedRoute><Login /></ConectedRoute> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <React.Fragment>
      <TopBar />
      {(element)}
    </React.Fragment>
  );
}


export default App;

