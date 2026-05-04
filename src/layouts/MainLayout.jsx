import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <a
        href="https://wa.me/923165515075"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl flex items-center justify-center transition-colors duration-200"
      >
        <FaWhatsapp size={30} />
      </a>
      <Footer />
    </div>
  );
};

export default MainLayout;
