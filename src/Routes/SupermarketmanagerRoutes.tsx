import SupermarketManagerDashboard from "@/pages/SupermarketManager/Dashboard";
import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";
import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";
import SupermarketManagerScan from "@/pages/SupermarketManager/ScanQR";
import path from "path";

const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "products", element: <SupermarketManagerProducts /> },
      { path: "dashboard", element: <SupermarketManagerDashboard /> },
      {path : "scan", element: <SupermarketManagerScan />},
    ],
  },
];

export default AdminRoutes;
