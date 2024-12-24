const HeroFooter = () => {
  return (
    <div className="w-full py-5 bg-secondary mb-32 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


        <div className="flex items-center gap-2 border-b pb-5 md:pb-0 md:border-b-0 md:border-l md:pl-5">
          <div>
            <figure className="w-16 h-16 flex justify-center items-center bg-white rounded-full border-2 border-primary">
              <img
                src="/public/assets/icon/speech-bubble.svg"
                alt="speech bubble"
                loading="lazy"
                className="w-10 h-10"
              />
            </figure>
          </div>

          <h3 className="text-lg text-primary font-bold">
            convenient online & In-clinic consultations
          </h3>
        </div>

        <div className="flex items-center gap-2 border-b pb-5 md:pb-0 md:border-b-0 md:border-l md:pl-5">
          <div>
            <figure className="w-16 h-16 flex justify-center items-center bg-white rounded-full border-2 border-primary">
              <img
                src="/public/assets/icon/shield.png"
                alt="speech bubble"
                loading="lazy"
                className="w-10 h-10"
              />
            </figure>
          </div>

          <h3 className="text-lg text-primary font-bold">
            Safe and effective treatment
          </h3>
        </div>

        <div className="flex items-center gap-2 border-b-2 pb-5 md:pb-0 md:border-b-0 md:border-l md:pl-5">
          <div>
            <figure className="w-16 h-16 flex justify-center items-center bg-white rounded-full border-2 border-primary">
              <img
                src="/public/assets/icon/doctor.png"
                alt="speech bubble"
                loading="lazy"
                className="w-10 h-10"
              />
            </figure>
          </div>

          <h3 className="text-lg text-primary font-bold">
            Experienced Ayurvedic Practitioners
          </h3>
        </div>

        <div className="flex items-center gap-2 border-b pb-5 md:pb-0 md:border-b-0 md:border-l md:pl-5">
          <div>
            <figure className="w-16 h-16 flex justify-center items-center bg-white rounded-full border-2 border-primary">
              <img
                src="/public/assets/icon/prescription.svg"
                alt="speech bubble"
                loading="lazy"
                className="w-10 h-10"
              />
            </figure>
          </div>

          <h3 className="text-lg text-primary font-bold">
            personalized Treatment Plans & Guidance
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
