import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teacher from "./components/Teacher";
import Method from "./components/Method";
import CourseProcess from "./components/CourseProcess";
import WhyMethod from "./components/WhyMethod";
import Goals from "./components/Goals";
import ParentSection from "./components/ParentSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="font-body">
        <Navbar />
        <main>
          <Hero />
          <Teacher />
          <Method />
          <CourseProcess />
          <WhyMethod />
          <Goals />
          <ParentSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
