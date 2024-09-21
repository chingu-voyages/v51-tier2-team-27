import Logo from '../assets/logoTrans.png';
import Coins from '../assets/hero-image.png';
    
export default function LandingTop() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-8">
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={Coins} alt="Coins" className="object-cover" />
      </div>
      <div className="relative flex items-center mb-8">
        <img src={Logo} alt="FairShare Logo" className="w-12 h-12 mr-2" />
      </div>
      <div className="relative max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Manage your expenses easily with <span className="text-[#68AEA7]">FairShare</span>!
        </h1>
        <p className="mb-6 text-black">Seamlessly manage and split shared expenses among groups.</p>
        <button className="bg-[#E3315D] text-white py-2 px-4 rounded-lg text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
};