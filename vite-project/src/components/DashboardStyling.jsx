import DashboardTop from "../assets/dashboard-top.png";

const DashboardStyling = () => {
  return (
    <div className="relative">
      <img
        src={DashboardTop}
        alt="Teal wave image at top of dashboard."
        className="w-full"
      />
      <h2 className="absolute top-8 right-48 text-white text-heading font-bold">
        Freddy
      </h2>
    </div>
  );
};

export default DashboardStyling;
