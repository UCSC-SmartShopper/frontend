import loadable from "@loadable/component";


const AdminAdvertisements = loadable(() => import("@/pages/Admin/AdminAdvertisements"));
const AdminCourierServices = loadable(() => import("@/pages/Admin/AdminCourierServices"));
const AdminCustomers = loadable(() => import("@/pages/Admin/AdminCustomers"));
const AdminOverview = loadable(() => import("@/pages/Admin/AdminOverview"));
const AdminSettings = loadable(() => import("@/pages/Admin/AdminSettings"));
const AdminSuperMarkets = loadable(() => import("@/pages/Admin/AdminSuperMarkets"));
const AdminTransactions = loadable(() => import("@/pages/Admin/AdminTransactions"));
const AdminSupermarketForm = loadable(() => import("@/pages/Admin/Forms/SupermarketForm"));

import AdminLayout from "./Layouts/AdminLayout";
import Supermarkets from "@/pages/Admin/Supermarkets";

const AdminRoutes = [
  {
    element: <AdminLayout />,
    children: [
      { path: "overview", element: <AdminOverview /> },
      { path: "customers", element: <AdminCustomers /> },
      { path: "supermarkets", element: <AdminSuperMarkets /> },
      { path: "courier-services", element: <AdminCourierServices /> },

      // this is a shared route
      // { path: "orders", element: <AdminOrders /> },

      { path: "transactions", element: <AdminTransactions /> },
      { path: "advertisements", element: <AdminAdvertisements /> },
      { path: "settings", element: <AdminSettings /> },
      {path: "supermarketList", element: <Supermarkets />},
      {path: "addSupermarket", element: <AdminSupermarketForm />}

    ],
  },
];

export default AdminRoutes;
