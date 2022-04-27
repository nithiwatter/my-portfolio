import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import HeroWrapper from '../components/heroWrapper';

function PostsHeroSection() {
  return (
    <HeroWrapper>
      <div className="flex w-3/4 justify-center pt-60 pb-16 sm:w-full sm:pt-72">
        <div className="pointer-events-auto rounded-md bg-gray-700/10 p-4 text-4xl backdrop-blur dark:bg-gray-100/10">
          <div className="flex items-center justify-center gap-4 text-center">
            <FontAwesomeIcon icon={faWrench} className="icon" />
            <div>Coming Soon!</div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
}

function Posts() {
  return (
    <div>
      <PostsHeroSection />
    </div>
  );
}

export default Posts;
