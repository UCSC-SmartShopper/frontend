import DriverLayout from "./Layouts/DriverLayout";

const DriverRoutes = [
  {
    element: <DriverLayout />,
    children: [
      { path: "driver", element: null },
    ],
  },
];

export default DriverRoutes;
