const Consultations = () => {
  return (
    <div className="bg-secondary p-4 sm:p-8 md:p-12 lg:p-28">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-16">
        What sets Ayurvedic consultations apart?
      </h2>

      {/* consultation container */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 py-12 px-8  bg-white border-t-2 border-primary rounded-xl">
          <h4 className="text-2xl  font-normal text-primary mb-4">
            स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।&quot;
          </h4>
          <p className="text-sm text-primary font-normal">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a
            healthy person and to cure the disease of a diseased person. ]
          </p>
        </div>

        <figure className="col-span-12 md:col-span-6 lg:col-span-4">
          <img
            src="/public/assets/consultation/consultation1.png"
            alt="consultation1"
            className="object-cover w-full h-auto"
          />
        </figure>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 py-6 px-4 bg-white border-t-2 border-primary rounded-xl">
          <h4 className="text-2xl font-normal text-primary mb-4">
            precise diagnosis
          </h4>
          <p className="text-sm text-[#414141] font-normal">
            Ayurveda&apos;s core principles revolve around Vata, Pitta, and
            Kapha doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 py-6 px-4 bg-white border-t-2 border-primary rounded-xl">
          <h4 className="text-2xl font-normal text-primary mb-4">
            Zero side-effects
          </h4>
          <p className="text-sm text-[#414141] font-normal">
            Ayurvedic treatments are devoid of chemicals, and are based
            completely on natural herbs
          </p>
        </div>

        <figure className="col-span-12 md:col-span-6 lg:col-span-3">
          <img
            src="/public/assets/consultation/consultation2.png"
            alt="consultation2"
            className="object-cover w-full h-auto"
          />
        </figure>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 py-6 px-4 bg-white border-t-2 border-primary rounded-xl">
          <h4 className="text-2xl font-normal text-primary mb-4">
            Individual Treatment
          </h4>
          <p className="text-sm text-[#414141] font-normal">
          all Treatments are personalized based on a person&apos;s unique constitution and health concerns.
          </p>
        </div>

        <figure className="col-span-12 lg:col-span-3">
          <img
            src="/public/assets/consultation/consultation3.png"
            alt="consultation3"
            className="object-cover w-full h-auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default Consultations;
