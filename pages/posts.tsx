import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

function PostsHeroSection() {
  return (
    <div className="pointer-events-none relative z-10 h-[100vh]">
      <div className="pointer-events-auto absolute left-0 bottom-0 h-2/5 w-full md:hidden" />
      <div className="pointer-events-auto absolute bottom-8 left-0 right-0 ml-auto mr-auto w-3/4 sm:w-full">
        <div className="flex justify-center gap-2 text-4xl">
          <FontAwesomeIcon icon={faWrench} className="icon" />
          Coming Soon!
        </div>
      </div>
    </div>
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
