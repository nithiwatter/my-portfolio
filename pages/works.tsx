import React from 'react';
import Image from 'next/image';

import myteapal from '../public/images/myteapal.png';

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

function ExperiencePane() {
  return (
    <div className="flex">
      <div className="mb-8 w-1/3 grow">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
          <Image
            src={myteapal}
            alt="myteapal"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center">
        <span className="h-2 w-2 rounded-full border-2 border-black" />
        <span className="grow border-r-2" />
      </div>

      <div className="w-1/2 shrink grow-[2]">
        <h2>Software Engineer for MyTeaPal</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

function Work() {
  // further research into the sizes prop of next/image - potential increases in performance
  return (
    <div className="space-y-8">
      <WorksHeroSection />
      <div className="flex justify-center">
        <div className="w-3/4">
          <ExperiencePane />
          <ExperiencePane />
        </div>
      </div>
    </div>
  );
}

export default Work;
