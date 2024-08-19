import SupermarketManagerDashboard from "@/pages/SupermarketManager/Dashboard";
import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";
import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";
import SupermarketManagerScan from "@/pages/SupermarketManager/QR/ScanQR";
import SupermarketManagerProfile from "@/pages/SupermarketManager/Profile/Profile";

const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "products", element: <SupermarketManagerProducts /> },
      { path: "dashboard", element: <SupermarketManagerDashboard /> },
      {path : "scan", element: <SupermarketManagerScan />},
      {path : "hi", element: <SupermarketManagerScan />},
      {path : "profile-settings", element: <SupermarketManagerProfile />}
    ],
  },
];

export default AdminRoutes;
