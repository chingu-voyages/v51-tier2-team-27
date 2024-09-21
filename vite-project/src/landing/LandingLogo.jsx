import Logo from "../assets/logoTrans.png";

export default function LandingLogo() {
  return (
    <div className="flex h-44">
      <img src={Logo} alt="FairShare Logo" className="w-32 h-14 ml-4" />
    </div>
  );
}
