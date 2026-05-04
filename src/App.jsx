import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const UiUx = lazy(() => import("./pages/UIUX"));
const PitchDeck = lazy(() => import("./pages/PitchDeck"));
const Branding = lazy(() => import("./pages/Branding"));
const MobileApp = lazy(() => import("./pages/MobileApp"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden">
    {/* Animated background gradient */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="flex flex-col items-center gap-6 relative z-10">
      {/* Logo with animation */}
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
          <div className="w-16 h-16 rounded-full bg-gray-950 flex items-center justify-center overflow-hidden">
            <img
              src="/flogo.jpg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>
      </div>

      {/* Loading text with gradient */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
          GrowHM
        </h3>
        <p className="text-gray-400 text-sm">Loading experience...</p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="cases" element={<Services />} />
            <Route path="services/ui-ux" element={<UiUx />} />
            <Route path="services/pitch-deck" element={<PitchDeck />} />
            <Route path="services/branding" element={<Branding />} />
            <Route path="services/mobile-app" element={<MobileApp />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
