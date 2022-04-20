import React from 'react';
import Image from 'next/image';

import { AnimatedText, AnimatedTexts } from '../components/animation';
import profilePic from '../public/images/hayasaka-profile.jpg';

function Home() {
  return (
    <div className="space-y-8">
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
  );
}

export default Home;
