import Faqs from "./components/Faqs";
import Features from "./components/Features";
import Header from "./components/Header";
import Download from "./components/Download";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <Features />
      <Faqs />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
