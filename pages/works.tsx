function WorksHeroSection() {
  return (
    <div className="pointer-events-none relative z-10 h-[100vh]">
      <div className="pointer-events-auto absolute bottom-8 left-0 right-0 ml-auto mr-auto w-3/4 space-y-4 sm:w-full sm:space-y-8">
        <div className="flex justify-center">
          <div className="pb-4">
            <h1 className="relative text-center text-5xl before:absolute before:z-0 before:content-['Work'] sm:text-7xl md:text-8xl lg:text-9xl">
              <span className="relative z-[1] animate-fading bg-gradient-to-r from-sky-500 to-cyan-300 bg-clip-text text-transparent opacity-0">
                Work
              </span>
            </h1>
            <h1 className="relative text-center text-5xl before:absolute before:z-0 before:content-['Experience'] sm:text-7xl md:text-8xl lg:text-9xl">
              <span
                className="relative z-[1] animate-fading bg-gradient-to-r from-teal-500 to-green-300 bg-clip-text text-transparent opacity-0"
                style={{
                  animationDelay: '4000ms',
                }}
              >
                Experience
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="space-y-8">
      <WorksHeroSection />
    </div>
  );
}

export default Work;
