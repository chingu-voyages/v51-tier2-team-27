import Wave from "../../assets/home-bg-wave.png";

export default function LandingBottom({ handleGetStarted }) {
  return (
    <div
      className="bg-center w-full h-96 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${Wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <h1 className="text-4xl font-bold text-black">
        What Are You Waiting For?
      </h1>
      <p className="mt-4 text-lg text-white">
        Create your first expense group!
      </p>
      <button
        className="bg-[#E3315D] text-white py-2 px-4 rounded"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
}
