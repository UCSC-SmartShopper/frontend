import ConsumerLanding from "@/pages/Landing";
import ConsumerProduct from "@/pages/ProductDetail";
import ConsumerCartDetails from "@/pages/CartDetails";
import ConsumerProfile from "@/pages/ConsumerProfile";
import ConsumerReviews from "@/pages/Reviews";
import ConsumerOrders from "@/pages/ConsumerOrders";
import ConsumerViewOrders from "@/pages/ViewOrders";
import ConsumerPaymentSuccessful from "@/pages/PaymentSuccessful";
import ConsumerLayout from "./Layouts/ConsumerLayout";
import ConsumerCheckout from "@/pages/Checkout";

const ConsumerRoutes = [
  {
    element: <ConsumerLayout />,
    children: [
      { path: "", element: <ConsumerLanding /> },
      { path: "product", element: <ConsumerProduct /> },
      { path: "profile", element: <ConsumerProfile /> },
      { path: "review", element: <ConsumerReviews /> },
      { path: "orders", element: <ConsumerOrders /> },
      { path: "view-orders", element: <ConsumerViewOrders /> },
      { path: "cart", element: <ConsumerCartDetails /> },
      { path: "payment-success", element: <ConsumerPaymentSuccessful /> },
      { path: "checkout", element: <ConsumerCheckout /> },
    ],
  },
];

export default ConsumerRoutes;
