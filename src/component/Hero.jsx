const Hero = () => {
  return (
    <div className="relative w-full h-[550px] mobile-banner lg:desktop__banner">
      <div className="lg:hidden absolute inset-0 bg-custom-gradient -z-50"></div>
      <div className="hidden lg:flex absolute inset-0 bg-desk-gradient -z-50"></div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-28 py-20 lg:py-28 z-50 w-full lg:w-[90%]">
        <span className="text-base sm:text-lg md:text-2xl text-[#FFF7E2] font-normal">
          Namaste, Welcome to Amrutam{" "}
        </span>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal text-white mt-2 mb-4">
          Step into Holistic Healing with{" "}
          <span className="text-[#FFF7E2] underline">Ayurveda</span> Book
          Consultation with certified Experts.{" "}
        </h1>
        <p className="text-sm md:text-xl text-[#C9C9C9] mb-12">Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>

      <button className="py-6 px-10 bg-primary text-xl text-white font-normal rounded-lg">Book an Appointment</button>

      </div>
    </div>
  );
};

export default Hero;
