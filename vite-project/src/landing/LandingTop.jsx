import Coins from "../assets/hero-image.png";

export default function LandingTop() {
  return (
    <div className="relative flex flex-col items-start justify-center text-left pb-40">
      <div className="flex justify-end items-center w-full h-full">
        <img src={Coins} alt="Coins" className="object-cover" />
      </div>
      <div
        className="relative max-w-xl"
        style={{ marginLeft: "10%", marginTop: "-70vh" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-black">
          Manage your expenses
          <br />
          easily with <span className="text-[#68AEA7]">FairShare</span>!
        </h1>
        <p className="mb-6 text-black">
          Seamlessly manage and split
          <br />
          shared expenses among groups.
        </p>
        <button className="bg-[#E3315D] text-white py-2 px-4 rounded-lg text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}
