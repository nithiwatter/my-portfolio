import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import {
  AnimatedText,
  AnimatedTexts,
  AnimatedCard,
} from '../components/animation';
import profilePic from '../public/images/hayasaka-profile.jpg';
import haikyuu from '../public/images/haikyuu.jpg';
import gintama from '../public/images/gintama.jpg';
import steinsGate from '../public/images/steins;gate.jpg';
import aSilentVoice from '../public/images/a silent voice.jpg';

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

function HomeHeroSection() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute bottom-8 w-full space-y-8">
        <div className="flex items-center justify-center ">
          <div className="rounded-md bg-gray-700/10 p-4 backdrop-blur dark:bg-gray-100/10">
            <AnimatedText>
              <p>
                {
                  "Hello, I am a Duke CS/ECON '22 and an incoming software engineer at Cohere!"
                }
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6">
          <div className="space-y-2">
            <AnimatedTexts>
              <h1 className="text-center">Nithiwat Seesillapachai (Ter)</h1>
              <h3 className="text-center">Software Engineer / Weeb</h3>
            </AnimatedTexts>
          </div>

          <div className="relative h-40 w-40 overflow-hidden rounded-full">
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
    </div>
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
      <h2 className="underline underline-offset-4">
        Animes, Mangas, and Light Novels
      </h2>

      <div>
        <h3>Favorite Animes:</h3>
        <div className="grid grid-cols-4 gap-2">
          {animes.map((el, index) => (
            <a
              key={index}
              href={el.href}
              className="rounded-md focus:ring-2 focus:ring-offset-2"
            >
              <Card src={el.src} />
              <p className="text-center">{el.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3>Favorite Mangas:</h3>
        <div className="grid grid-cols-4 gap-2">
          {animes.map((el, index) => (
            <a
              key={index}
              href={el.href}
              className="rounded-md focus:ring-2 focus:ring-offset-2"
            >
              <Card src={el.src} />
              <p className="text-center">{el.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  src: StaticImageData;
};

function Card({ src }: CardProps) {
  return (
    <AnimatedCard>
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md">
        <Image
          alt="haikyuu-anime"
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          placeholder="blur"
        />
      </div>
    </AnimatedCard>
  );
}

function Home() {
  return (
    <div className="space-y-8">
      <HomeHeroSection />
      <div className="flex justify-center">
        <div className="w-1/2 space-y-8">
          <AboutSection />
          <LanguagesSection />
          <AnimeSection />
        </div>
      </div>
      <div>Footer</div>
    </div>
  );
}

export default Home;
