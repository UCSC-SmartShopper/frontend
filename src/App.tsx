import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartDetails from "./pages/CartDetails";

import ProductDetail from "./pages/ProductDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import Reviews from "./pages/Reviews";
import AdminOverview from "./pages/Admin/AdminOverview";
import AdminCustomers from "./pages/Admin/AdminCustomers";
import AdminSuperMarkets from "./pages/Admin/AdminSuperMarkets";
import AdminCourierServices from "./pages/Admin/AdminCourierServices";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminTransactions from "./pages/Admin/AdminTransactions";
import AdminAdvertisements from "./pages/Admin/AdminAdvertisements";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminMain from "./pages/Admin/AdminMain";

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
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/" element={<Landing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/admin-Overview" element={<AdminOverview />} />
          <Route path="/admin-Customers" element={<AdminCustomers />} />
          <Route path="/admin-SuperMarkets" element={<AdminSuperMarkets />} />
          <Route
            path="/admin-CourierServices"
            element={<AdminCourierServices />}
          />
          <Route path="/admin-Orders" element={<AdminOrders />} />
          <Route path="/admin-Transactions" element={<AdminTransactions />} />
          <Route
            path="/admin-Advertisements"
            element={<AdminAdvertisements />}
          />
          <Route path="/admin-Settings" element={<AdminSettings />} />
          <Route path="/admin" element={<AdminMain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
