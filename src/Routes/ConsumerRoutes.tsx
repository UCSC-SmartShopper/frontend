import loadable from "@loadable/component";

const ConsumerCartDetails = loadable(
  () => import("@/pages/Consumer/CartDetails")
);
const ConsumerProfile = loadable(
  () => import("@/pages/Consumer/ConsumerProfile")
);
const ProductReview = loadable(() => import("@/pages/Consumer/Reviews"));
const ConsumerViewOrders = loadable(
  () => import("@/pages/Consumer/Order/CustomerViewOrder")
);
const ConsumerPaymentSuccessful = loadable(
  () => import("@/pages/Consumer/PaymentSuccessful")
);
const ConsumerLayout = loadable(() => import("./Layouts/ConsumerLayout"));
const ConsumerCheckout = loadable(() => import("@/pages/Consumer/Checkout"));
const CartComparison = loadable(
  () => import("@/pages/Consumer/CartComparison/CartComparison")
);
const ViewProduct = loadable(() => import("@/pages/Consumer/ViewProduct"));
const AboutUs = loadable(() => import("@/pages/Consumer/AboutUs"));
import AboutUs from "@/pages/Consumer/AboutUs";
import CartComparison from "@/pages/Consumer/CartComparison/CartComparison";
import ConsumerCartDetails from "@/pages/Consumer/CartDetails";
import ConsumerCheckout from "@/pages/Consumer/Checkout";
import ConsumerProfile from "@/pages/Consumer/ConsumerProfile";
import ConsumerPaymentSuccessful from "@/pages/Consumer/PaymentSuccessful";
import ConsumerReviews from "@/pages/Consumer/Reviews";
import ViewProduct from "@/pages/Consumer/ViewProduct";
import SupermarketLogo from "../assets/Reviews/superMarketLogo.png";
import ConsumerLayout from "./Layouts/ConsumerLayout";
const reviewData = {
  date: "June 17, 2024",
  title: "Delightful Crispiness in Every Bite",
  reviewer: "Kaveesha Hettige",
  reviewText:
    "I recently had the pleasure of trying Cream Cracker Biscuits, and they have quickly become a staple in my pantry. Here's a detailed review of my experience: The packaging is simple yet effective, keeping the biscuits fresh and crispy. The resealable pack is a thoughtful touch.",
  rating: 5,
};

const productName = "Munchee Cream Cracker";

const reviews = [
  { stars: 5, count: 5 },
  { stars: 4, count: 3 },
  { stars: 3, count: 1 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const ConsumerRoutes = [
  {
    element: <ConsumerLayout />,
    children: [
      { path: "products/:id", element: <ViewProduct /> },
      { path: "profile", element: <ConsumerProfile /> },
      { path: "view-orders/:id", element: <ConsumerViewOrders /> },
      { path: "cart", element: <ConsumerCartDetails /> },
      { path: "payment-success/:id", element: <ConsumerPaymentSuccessful /> },
      { path: "checkout", element: <ConsumerCheckout /> },
      { path: "cart-comparison", element: <CartComparison /> },
      { path: "about", element: <AboutUs /> },
      {
        path: "reviews/supermarket_item/:id",
        element: <ProductReview />,
      },
    ],
  },
];

export default ConsumerRoutes;
