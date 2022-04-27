import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  AnimatedOnEnter,
  AnimatedText,
  AnimatedTexts,
  ColorText,
} from '../components/animation';
import { AnimeCard as Card } from '../components/card';
import HeroWrapper from '../components/heroWrapper';

import profilePic from '../public/images/hayasaka-profile.jpg';
import haikyuu from '../public/images/haikyuu.jpg';
import gintama from '../public/images/gintama.jpg';
import steinsGate from '../public/images/steins;gate.jpg';
import aSilentVoice from '../public/images/a silent voice.jpg';
import onePiece from '../public/images/one piece.jpg';
import slamDunk from '../public/images/slam dunk.jpg';
import kaguya from '../public/images/kaguya.jpg';
import jujutsuKaisen from '../public/images/jujutsu kaisen.jpg';

const animes = [
  {
    src: haikyuu,
    name: 'Haikyuu!!',
    href: 'https://myanimelist.net/anime/32935/Haikyuu__Karasuno_Koukou_vs_Shiratorizawa_Gakuen_Koukou',
  },
  {
    src: gintama,
    name: 'Gintama',
    href: 'https://myanimelist.net/anime/28977/Gintama%C2%B0',
  },
  {
    src: steinsGate,
    name: 'Steins;Gate',
    href: 'https://myanimelist.net/anime/9253/Steins_Gate',
  },
  {
    src: aSilentVoice,
    name: 'Koe no Katachi',
    href: 'https://myanimelist.net/anime/28851/Koe_no_Katachi',
  },
];

const mangas = [
  {
    src: onePiece,
    name: 'One Piece',
    href: 'https://myanimelist.net/manga/13/One_Piece',
  },
  {
    src: slamDunk,
    name: 'Slam Dunk',
    href: 'https://myanimelist.net/manga/51/Slam_Dunk',
  },
  {
    src: kaguya,
    name: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
    href: 'https://myanimelist.net/manga/90125/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen',
  },
  {
    src: jujutsuKaisen,
    name: 'Jujutsu Kaisen',
    href: 'https://myanimelist.net/manga/113138/Jujutsu_Kaisen',
  },
];

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/nithiwatter',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nithiwat-seesillapachai-71b82b5b/',
    icon: faLinkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/nithiwatter',
    icon: faTwitter,
  },
];

function HomeHeroSection() {
  return (
    <HeroWrapper>
      <div className="w-3/4 space-y-4 pt-60 pb-16 sm:w-full sm:space-y-8 sm:pt-72">
        <div className="pointer-events-auto flex items-center justify-center">
          <div className="rounded-md bg-gray-700/10 p-4 backdrop-blur dark:bg-gray-100/10">
            <AnimatedText>
              <p className="text-center">
                {
                  "Hello, I am a Duke CS/ECON '22 and an incoming software engineer at "
                }
                <span>
                  <a
                    href="https://cohere.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-800 decoration-2 underline-offset-2 hover:underline focus:underline dark:text-gray-200"
                  >
                    Cohere
                  </a>
                </span>
                !
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center justify-center gap-6">
          <div className="space-y-2 text-center">
            <AnimatedTexts>
              <h1 className="text-3xl sm:text-4xl">
                Nithiwat Seesillapachai (Ter)
              </h1>
              <h2 className="text-xl sm:text-2xl">Software Engineer / Weeb</h2>
            </AnimatedTexts>
          </div>

          <div className="relative hidden h-24 w-24 overflow-hidden rounded-full shadow-sm ring-2 ring-white sm:block lg:h-40 lg:w-40">
            <Image
              alt="profile"
              src={profilePic}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}

function AboutSection() {
  return (
    <div className="space-y-4">
      <h2 className="underline underline-offset-4">About Me</h2>
      <p>
        I am a Duke graduate of class 2022, double majoring in Computer Science
        and Economics. I am passionate about new technologies and am always open
        to learn new frameworks and coding languages. In my spare time, other
        than coding, I usually read mangas and light novels and watch animes.{' '}
        <span className="italic">
          Yes, I am a weeb / NEET, and I am always online.
        </span>
      </p>
    </div>
  );
}

function LanguagesSection() {
  return (
    <div className="space-y-4">
      <h2 className="underline underline-offset-4">
        Languages and Technologies
      </h2>
      <ul className="list-inside list-disc">
        <li>JavaScript / TypeScript</li>
        <li>Python</li>
        <li>HTML / CSS</li>
        <li>React / Redux / ReactQuery / CRA / Next.js</li>
        <li>Node.js / Express</li>
        <li>PyTorch / Deep Learning / Machine Learning</li>
        <li>SQL / MongoDB</li>
        <li>Docker / Git</li>
        <li>English / Thai / Japanese (beginner)</li>
      </ul>
    </div>
  );
}

function AnimeSection() {
  return (
    <div className="space-y-4">
      <h2 className="underline underline-offset-4">Hobbies</h2>

      <div>
        <h3>Favorite Animes:</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {animes.map((el) => (
            <div key={el.name}>
              <a
                href={el.href}
                target="_blank"
                rel="noreferrer"
                className="card-link rounded-md focus:ring-2 focus:ring-offset-2"
              >
                <Card src={el.src} alt={el.name} />
                <p className="text-center">{el.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>Favorite Mangas:</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {mangas.map((el) => (
            <div key={el.name}>
              <a
                href={el.href}
                target="_blank"
                rel="noreferrer"
                className="card-link rounded-md focus:ring-2 focus:ring-offset-2"
              >
                <Card src={el.src} alt={el.name} />
                <p className="text-center">{el.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <ColorText>
          <h2 className="color-text text-center">
            <a
              href="https://www.youtube.com/channel/UCR6qhsLpn62WVxCBK1dkLow"
              target="_blank"
              rel="noreferrer"
              className="inherit rounded-md focus:ring-2 focus:ring-offset-2"
            >
              {"If you can't already tell, I love Vtubers!"}
            </a>
          </h2>
        </ColorText>
      </div>
    </div>
  );
}

function OnTheWebSection() {
  return (
    <div className="space-y-4">
      <h2 className="underline underline-offset-4">On the Web</h2>
      <div className="flex h-12 items-center justify-between">
        {socials.map((ele) => (
          <div key={ele.name} className="space-x-2">
            <a
              className="underlined after:underlined-after text-lg font-semibold after:hover:scale-x-100 after:focus:scale-100"
              href={ele.href}
              target="_blank"
              rel="noreferrer"
            >
              {ele.name}
            </a>
            <FontAwesomeIcon icon={ele.icon} size="lg" className="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="space-y-8">
      <HomeHeroSection />
      <AnimatedOnEnter>
        <div className="flex justify-center">
          <div className="w-3/4 space-y-8 sm:w-1/2">
            <AboutSection />
            <LanguagesSection />
            <AnimeSection />
            <OnTheWebSection />
          </div>
        </div>
      </AnimatedOnEnter>
    </div>
  );
}

export default Home;
