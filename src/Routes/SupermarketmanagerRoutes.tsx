
import SupermarketManagerLayout from "./Layouts/SupermarketManagerLayout";
import SupermarketManagerOrders from "@/pages/SupermarketManager/OrderList";
import SupermarketManagerProducts from "@/pages/SupermarketManager/Products";


const AdminRoutes = [
  {
    element: <SupermarketManagerLayout />,
    children: [
      { path: "orderList", element: <SupermarketManagerOrders /> },
      { path: "products", element: <SupermarketManagerProducts /> },

    ],
  },
];

export default AdminRoutes;
