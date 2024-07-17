import AdminMain from "@/pages/Admin/AdminMain";
import HomeLayout from "./HomeLayout";

const HomeRoutes = [
  {
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <AdminMain />,
      },
    ],
  },
];

export default HomeRoutes;
