
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Navigation from "./components/Navigation";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-white to-slate-50 dark:from-[#04060a] dark:to-[#071018] transition-colors duration-500 text-slate-900 dark:text-slate-100">
      <Navigation/>
        <Home />
        <Services />
        <Testimonial/>
        <About />
        <Footer/>   
    </div>
  );
}
