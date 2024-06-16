import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      {/* <Login /> */}
      < PaymentSuccessful />

      <Footer />
    </>
  );
}

export default App;
