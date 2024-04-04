import { useSelector } from "react-redux";
import FeaturesSection from "../../components/_landingPage/Features/Features";
import Footer from "../../components/_landingPage/Footer/Footer";
import GetStarted from "../../components/_landingPage/GetStarted/GetStarted";
import HeroBanner from "../../components/_landingPage/HeroBanner/HeroBanner";
import Navbar from "../../components/_landingPage/Navbar/Navbar";
import { UserCredentials } from "../../types/user.types";

const LandingPage: React.FC = () => {
  const userDetails = useSelector(
    (state: { userDetails: { userDetails: UserCredentials } }) =>
      state.userDetails.userDetails
  );
  console.log(userDetails);
  const isLoggedIn = useSelector(
    (state: { loginStatus: { isLoggedIn: boolean } }) =>
      state.loginStatus.isLoggedIn
  );
  console.log(isLoggedIn);

  return (
    <section>
      <Navbar isLoggedIn={isLoggedIn} userDetails={userDetails} />
      <HeroBanner />
      <FeaturesSection />
      <GetStarted />
      <Footer />
    </section>
  );
};

export default LandingPage;
