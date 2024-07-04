
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import CartDetails from "./pages/CartDetails";

import ProductDetail from "./pages/ProductDetail";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import Footer from "./components/Footer";import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import Reviews from "./pages/Reviews";
import Request from "./pages/CourierCompanyManager/Request";
import Deliveries from "./pages/CourierCompanyManager/Deliveries";



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
        <Route path="/paymentSuccessful" element={<PaymentSuccessful />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/request" element={<Request/>} />
        <Route path="/deliveries" element={<Deliveries/>} />
      </Routes>
      
    </Router>
      


    </>
  );
}

export default App;
  