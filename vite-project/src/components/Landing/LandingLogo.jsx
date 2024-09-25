import Logo from "../../assets/logoTrans.png";

export default function LandingLogo() {
  return (
    <div className="flex mt-10">
      <img src={Logo} alt="FairShare Logo" className="w-32 h-14" />
    </div>
  );
}