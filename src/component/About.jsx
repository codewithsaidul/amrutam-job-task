import features from "../data/data";

const About = () => {
  return (
    <div className="mt-16 px-4 sm:px-8 md:px-12 lg:px-28">
      {/* about header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Discover Ayurveda&apos;s magic with us
        </h2>
        <p className="text-sm md:text-xl font-normal text-[#666] w-full md:w-[671px] mx-auto mb-10">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It&aposs like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </div>

      {/* ============== about container ========================= */}
      <div className="grid grid-cols-3 gap-20 mt-20">
        {/* about container left side */}
        <div className="flex flex-col gap-5">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div>
                <h4 className="text-black text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-base text-[#515151] font-normal">{feature.description}</p>
              </div>
              <figure className="py-5 px-6 bg-[#EDF5FA] rounded-full">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-16 h-16"
                />
              </figure>
            </div>
          ))}
        </div>

        {/* about container center */}
      </div>
    </div>
  );
};

export default About;
