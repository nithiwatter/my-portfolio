import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { AnimatedOnEnter } from '../components/animation';

import dukeLogo from '../public/images/duke.png';
import reactLogo from '../public/images/react.png';
import pythonLogo from '../public/images/python.png';
import innovationStudioLogo from '../public/images/innovation-studio.png';
import tencentLogo from '../public/images/tencent.png';
import cohereLogo from '../public/images/cohere.jpg';
import myteapal from '../public/images/myteapal.png';
import hours from '../public/images/hours.webp';

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

const secondShortExperiences = [
  {
    title: 'Duke Innovation Studio',
    date: 'Nov 2020',
    content:
      'Worked as a startup engineer at Duke Innovation Studio, an incubator. Had fun experimenting more with Firebase and React and working with data scientists and designers.',
    src: innovationStudioLogo,
    href: 'https://www.dukeinnovationstudio.com/',
    tags: ['Firebase', 'Python', 'React', 'Redux'],
  },
  {
    title: 'Machine Learning Engineer Intern',
    date: 'Jun 2021',
    content:
      'Interned at Tencent. Self studied NLP to develop deep networks recommeding news and songs. Built pipelines to automate web crawling news and songs data and train transformers and deep convolutional networks across multiple GPUs. Adopted as internal prototypes for new features.',
    src: tencentLogo,
    href: 'https://www.tencent.co.th/en/',
    tags: ['Python', 'Pytorch', 'Scrapy', 'Selenium'],
  },
];

const experiencePanes = [
  {
    title: 'Software Engineer for MyTeaPal',
    date: 'Oct 2020',
    starter: 'First time building something for actual users! ',
    content:
      'Cold emailed asking the founder to help work on the app. Learned Firebase and Flutter and shipped the first major update within the first week. Shipped over 7 major updates, increasing the user base from 500 to 5,000 within 5 months. Built new social network features and a pipeline for localization and caching.',
    src: myteapal,
    href: 'https://myteapal.com/',
    tags: ['Firebase', 'Flutter'],
    showFirstTag: true,
  },
];

const secondExperiencePanes = [
  {
    title: 'Software Engineer for Hours By Fiveable',
    date: 'July 2021',
    starter: undefined,
    content:
      'Worked for Hours by Fiveable, a virtual studying platform. Spearheaded refactoring efforts for both frontend and backend codebases, lowering the socket server load by over 90% and bundle size by over 30%. Improved Lighthouse overall metrics by over 20 points.',
    src: hours,
    href: 'https://fiveable.me/',
    tags: ['Express', 'Node.js', 'React', 'Redux', 'Socket.IO'],
    showFirstTag: true,
  },
];

type ShortExperiencePaneProps = {
  title: string;
  date: string;
  content: string;
  src: StaticImageData;
  href: string;
  tags?: string[];
};

type ExperiencePaneProps = {
  title: string;
  date: string;
  starter?: string;
  content: string;
  src: StaticImageData;
  href: string;
  tags?: string[];
  showFirstTag?: boolean;
};

function WorksHeroSection() {
  return (
    <div className="pointer-events-none relative z-10 h-[100vh]">
      <div className="pointer-events-auto absolute left-0 bottom-0 h-2/5 w-full md:hidden" />
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
  tags,
}: ShortExperiencePaneProps) {
  return (
    <div className="flex justify-center text-white">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="color-text w-full rounded-md bg-blue-500 p-4 shadow-md transition-colors hover:bg-blue-400 focus:bg-blue-400 focus:ring-2 focus:ring-offset-2 xl:w-1/2"
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

          <div className="grow space-y-2">
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <h2 className="color-text mb-1 text-lg sm:mb-0">{title}</h2>
              <div className="rounded-md bg-gray-200 py-1 px-2 text-blue-600">
                <span>{date}</span>
              </div>
            </div>
            <p className="color-text">{content}</p>

            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="inline-block rounded-md bg-gray-200 py-1 px-2 text-blue-600"
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

function ExperiencePane({
  title,
  date,
  starter,
  content,
  src,
  href,
  tags,
  showFirstTag,
}: ExperiencePaneProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="order-1 w-full grow md:order-none md:mb-8 md:w-1/3">
        <a
          href={href}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-3 focus:ring-2 focus:ring-offset-2"
        >
          <Image
            src={src}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
          />
        </a>
      </div>

      <div className="mx-4 mb-4 flex flex-col items-center md:mb-0">
        <span className="timeline h-12 border-r-2 md:hidden" />
        <span className="timeline h-2 w-2 rounded-full border-2" />
        <span className="timeline hidden grow border-r-2 md:block" />
      </div>

      <div className="mb-8 w-full grow space-y-2 self-center text-center md:w-1/2 md:self-auto md:text-left">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-0">
          <h2 className="mr-2">{title}</h2>
          <div className="rounded-md bg-gray-200 py-1 px-2 text-center text-blue-600">
            <span>{date}</span>
          </div>
        </div>

        <p>
          {starter && <span className="font-bold">{starter}</span>}
          {content}
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {showFirstTag && (
            <div className="inline-block rounded-md bg-gray-200 py-1 px-2 text-blue-600">
              <FontAwesomeIcon
                icon={faArrowDown}
                size="lg"
                className="mr-2 md:hidden"
              />
              <FontAwesomeIcon
                icon={faArrowLeft}
                size="lg"
                className="mr-2 hidden md:inline-block"
              />
              <span>Check it out!</span>
            </div>
          )}

          {tags?.map((tag) => (
            <div
              key={tag}
              className="inline-block rounded-md bg-gray-200 py-1 px-2 text-blue-600"
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoherePane() {
  return (
    <div className="flex justify-center text-white">
      <a
        href="https://cohere.io/"
        target="_blank"
        rel="noreferrer"
        className="color-text w-full rounded-md bg-emerald-500 p-4 shadow-md transition-colors hover:bg-emerald-400 focus:bg-emerald-400 focus:ring-2 focus:ring-offset-2 xl:w-1/2"
      >
        <div className="flex items-center">
          <div>
            <div className="mr-4 h-12 w-12 overflow-hidden rounded-md bg-gray-200 p-1">
              <div className="relative h-full w-full">
                <Image
                  src={cohereLogo}
                  alt="Cohere"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center center"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          <div className="grow space-y-2">
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <h2 className="color-text mb-1 text-lg sm:mb-0">
                Incoming Software Engineer
              </h2>
              <div className="rounded-md bg-gray-200 py-1 px-2 text-emerald-600">
                <span>Jun 2022</span>
              </div>
            </div>
            <p className="color-text">Excited to start on a new journey!</p>
          </div>
        </div>
      </a>
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

            <div>
              {experiencePanes.map(
                ({
                  title,
                  date,
                  starter,
                  content,
                  src,
                  href,
                  tags,
                  showFirstTag,
                }) => (
                  <ExperiencePane
                    key={title}
                    title={title}
                    date={date}
                    starter={starter}
                    content={content}
                    src={src}
                    href={href}
                    tags={tags}
                    showFirstTag={showFirstTag}
                  />
                )
              )}
            </div>

            <div className="space-y-4">
              {secondShortExperiences.map(
                ({ title, date, content, src, href, tags }) => (
                  <ShortExperiencePane
                    key={title}
                    title={title}
                    date={date}
                    content={content}
                    src={src}
                    href={href}
                    tags={tags}
                  />
                )
              )}
            </div>

            <div>
              {secondExperiencePanes.map(
                ({
                  title,
                  date,
                  starter,
                  content,
                  src,
                  href,
                  tags,
                  showFirstTag,
                }) => (
                  <ExperiencePane
                    key={title}
                    title={title}
                    date={date}
                    starter={starter}
                    content={content}
                    src={src}
                    href={href}
                    tags={tags}
                    showFirstTag={showFirstTag}
                  />
                )
              )}
            </div>
            <CoherePane />
          </div>
        </div>
      </AnimatedOnEnter>
    </div>
  );
}

export default Work;
