const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className='absolute inset-0 bg-[url("/src/assets/HeroImg5.png")] bg-no-repeat bg-cover bg-center'></div>
      <div className="absolute inset-0 bg-gray-950/30"></div>

      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-full">
        <div className="bg-primary/60 flex flex-col items-start justify-center gap-4 py-10 px-5 rounded-2xl">
          {/* <p className="text-secondary px-3.5 py-1 rounded-full">
         For Creators & Collectors
        </p> */}

          <h1 className="font-sora text-2xl md:text-5xl md:text-[56px] md:leading-16 font-bold md:font-bold max-w-3xl">
            Connecting art, creators, and commissions in one creative space.
          </h1>

          <p className="max-w-180 text-[20px] md:text-base leading-7">
            The original artwork from talented creators or commission custom
            pieces tailored to your vision. From concept to completion, track
            every step of your creative journey in one place.
          </p>
          <div className="flex gap-5">
            <button className="px-8 py-2.5 rounded bg-black cursor-pointer text-white font-bold">
              Commison Art
            </button>
            {/* <button className="px-8 py-2.5 rounded bg-black text-white  cursor-pointer font-bold">
              Explore Art
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
