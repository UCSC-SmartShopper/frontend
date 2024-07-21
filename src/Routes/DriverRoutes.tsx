import Home from "@/pages/DriverApp/Dashboard/Home";
import Opportunities from "@/pages/DriverApp/Dashboard/Opportunities";
import RequestDetails from "@/pages/DriverApp/Dashboard/RequestDetails";
import DriverLayout from "./Layouts/DriverLayout";
import Account from "@/pages/DriverApp/Dashboard/Account";
import EditAccount from "@/pages/DriverApp/Dashboard/EditAccount";

const DriverRoutes = [
  {
    element: <DriverLayout />,
    children: [
      { path: "driver", element: <Home /> },
      { path: "driver/opportunities", element: <Opportunities /> },
      { path: "driver/opportunities/:id", element: <RequestDetails /> },
      { path: "driver/account", element: <Account /> },
      { path: "driver/account/edit", element: <EditAccount /> },
    ],
  },
];

export default DriverRoutes;
