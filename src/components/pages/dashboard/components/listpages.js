import Home from "./Home";
import Charts from "./Charts";
import Deposits from "./Deposits";
import Orders from "./Orders";

export const listPages = [
    {
        route: "/dashboard/",
        component: <Home />,
    },
    {
        route: "/dashboard/charts",
        component: <Charts />,
    },
    {
        route: "/dashboard/deposits",
        component: <Deposits />,
    },
    {
        route: "/dashboard/orders",
        component: <Orders />,
    }
]