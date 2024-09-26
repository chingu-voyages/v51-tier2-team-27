import LandingTop from "./LandingTop";
import LandingMiddle from "./LandingMiddle";
import LandingBottom from "./LandingBottom";
import LandingLogo from "./LandingLogo";
import Footer from "../Footer";

function LandingPage({ handleGetStarted }) {
  return (
    <div>
      <LandingLogo />
      <LandingTop handleGetStarted={handleGetStarted} />
      <LandingMiddle />
      <LandingBottom handleGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
}

export default LandingPage;
