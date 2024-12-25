import { approuch } from "../data/data";

const Approuch = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-28">
      {/* Approuch header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Our ayurvedic approach
        </h2>
        <p className="text-sm md:text-xl font-normal text-[#666] w-full md:w-[671px] mx-auto mb-10">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>

      {/* approuch container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {approuch.map(({ id, title, desc }) => (
          <div key={id} className="text-center p-5 pb-3 bg-secondary border-t-2 border-primary rounded-xl">
            <div className="w-20 h-20 mx-auto mb-5 flex justify-center items-center rounded-full bg-primary/65"><span className="text-5xl font-bold text-white  rounded-full">{id}</span></div>
            <h4 className="text-2xl font-normal text-primary mb-4">{title}</h4>
            <p className="text-xl font-normal text-[#2e2e2e]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approuch;
