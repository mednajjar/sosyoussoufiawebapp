import Home from "./Home";
import PharmacyList from "./PharmacyList";
import AddPharmacy from "./AddPharmacy";
import EditPharmacy from "./EditPharmacy";

export const listPages = [
   
    {
        route: "/dashboard/",
        component: <Home />,
    },
    {
        route: "/dashboard/pharmacy_list",
        component: <PharmacyList />,
    },
    {
        route: "/dashboard/add_pharmacy",
        component: <AddPharmacy />,
    },
    {
        route: "/dashboard/edit_pharmacy/",
        component: <EditPharmacy />,
    }
]