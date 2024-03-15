import FeaturesSection from "../../components/_landingPage/Features/Features";
import Footer from "../../components/_landingPage/Footer/Footer";
import Herobanner from "../../components/_landingPage/Herobanner/Herobanner";
import Navbar from "../../components/_landingPage/Navbar/Navbar";

const LandingPage: React.FC = () => {
  return (
    <section>
      <Navbar />
      <Herobanner />
      {/* <BentoGrid /> */}
      <FeaturesSection />
      <Footer />
    </section>
  );
};

export default LandingPage;
