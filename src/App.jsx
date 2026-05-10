import { Routes, Route } from "react-router-dom";
import Footer from "~containers/Footer";
import Navbar from "~containers/Navbar";
import Sidebar from "~containers/Sidebar";
import HomePage from "~pages/HomePage";
import Store from "~pages/Store";
import ContactUs from "~pages/ContactUs";
import NoPage from "~pages/NoPage";
import ProductDetails from "~pages/ProductDetails";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
