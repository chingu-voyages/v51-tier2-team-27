import LandingTop from "./LandingTop";
import LandingMiddle from "./LandingMiddle";
import LandingBottom from "./LandingBottom";
import LandingLogo from "./LandingLogo";
import Footer from "../Footer";

export default function LandingPage() {
  return (
    <div>
      <LandingLogo />
      <LandingTop />
      <LandingMiddle />
      <LandingBottom />
      <Footer />
    </div>
  );
}
