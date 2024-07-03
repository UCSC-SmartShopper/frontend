import "./App.css";
import Navbar from "./components/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartDetails from "./pages/CartDetails";

import { Show } from "@chakra-ui/react";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import ConsumerProfile from "./pages/ConsumerProfile";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import ProductDetail from "./pages/ProductDetail";
import Reviews from "./pages/Reviews";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import LoginRegister from "./pages/DriverApp/LoginRegister/LoginRegister";
import DriverLogin from "./pages/DriverApp/LoginRegister/Login/DriverLogin";
import Orders from "./pages/ConsumerOrders";

export interface ProductQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  return (
    <>
      <Router>
        <Show above="md">
          <Navbar />
        </Show>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<ConsumerProfile />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/test" element={<Test />} />

          <Route path="/driver/login_register" element={<LoginRegister />} />
          <Route path="/driver/login" element={<DriverLogin />} />
          <Route path="/orders" element={<Orders />} />

        </Routes>

        <Show below="md">
          <BottomNav />
        </Show>
      </Router>
    </>
  );
}

export default App;
