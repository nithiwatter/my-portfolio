import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { AnimatedOnEnter } from '../components/animation';

import dukeLogo from '../public/images/duke.png';
import reactLogo from '../public/images/react.png';
import pythonLogo from '../public/images/python.png';
import myteapal from '../public/images/myteapal.png';

const shortExperiences = [
  {
    title: 'Started College',
    date: 'Aug 2018',
    content:
      'Entered college wanting to be an economist. No idea what to do with life. No extracurricular activities. No passion.',
    src: dukeLogo,
    href: 'https://duke.edu/',
  },
  {
    title: 'First CS Class',
    date: 'Jan 2019',
    content:
      'Learned coding for the first time. First language Python. Always finished assignments in 2 hours after releases. Felt a spark - surprisingly intuitive and fun.',
    src: pythonLogo,
    href: 'https://www.python.org/',
  },
  {
    title: 'Second Summer',
    date: 'Mar 2020',
    content:
      'Back to Thailand due to Covid outbreak. Could not find any internship, so spent time learning full-stack development online everyday. Coded hideous spaghetti projects. Learned a lot.',
    src: reactLogo,
    href: 'https://github.com/nithiwatter/color-app',
  },
];

type ShortExperiencePaneProps = {
  title: string;
  date: string;
  content: string;
  src: StaticImageData;
  href: string;
};

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

function ShortExperiencePane({
  title,
  date,
  content,
  src,
  href,
}: ShortExperiencePaneProps) {
  return (
    <div className="flex justify-center text-white">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="color-text w-full rounded-md bg-blue-500 p-4 transition-colors hover:bg-blue-400 focus:bg-blue-400 focus:ring-2 focus:ring-offset-2 xl:w-1/2"
      >
        <div className="flex items-center">
          <div>
            <div className="mr-4 h-12 w-12 overflow-hidden rounded-md bg-gray-200 p-1">
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center center"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="grow">
            <div className="mb-2 flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <h3 className="color-text mb-1 sm:mb-0">{title}</h3>
              <div className="rounded-md bg-gray-200 py-1 px-2 text-blue-600">
                <span>{date}</span>
              </div>
            </div>
            <p className="color-text">{content}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function ExperiencePane() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="order-1 mb-8 w-full grow md:order-none md:w-1/3">
        <a
          href="#"
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-3  focus:ring-2 focus:ring-offset-2"
        >
          <Image
            src={myteapal}
            alt="myteapal"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
          />
        </a>
      </div>

      <div className="mx-4 mb-4 flex flex-col items-center md:mb-0">
        <span className="timeline h-10 border-r-2 md:hidden" />
        <span className="timeline h-2 w-2 rounded-full border-2" />
        <span className="timeline hidden grow border-r-2 md:block" />
      </div>

      <div className="mb-8 w-full grow self-center text-center md:mb-0 md:w-1/2 md:self-auto md:text-left">
        <h2>Software Engineer for MyTeaPal</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          asds five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          asdas including versions of Lorem Ipsum.
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
      <AnimatedOnEnter>
        <div className="flex justify-center">
          <div className="w-3/4 space-y-8">
            <div className="space-y-4">
              {shortExperiences.map(({ title, date, content, src, href }) => (
                <ShortExperiencePane
                  key={title}
                  title={title}
                  date={date}
                  content={content}
                  src={src}
                  href={href}
                />
              ))}
            </div>
            <ExperiencePane />
            <ExperiencePane />
          </div>
        </div>
      </AnimatedOnEnter>
    </div>
  );
}

export default Work;
