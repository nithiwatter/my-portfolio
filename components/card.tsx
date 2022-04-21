import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import { AnimatedCard } from './animation';

type AnimeCardProps = {
  src: StaticImageData;
  alt: string;
};

function AnimeCard({ src, alt }: AnimeCardProps) {
  return (
    <AnimatedCard>
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md">
        <Image
          alt={alt}
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

export { AnimeCard };
