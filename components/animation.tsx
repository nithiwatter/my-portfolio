import React from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';

type AnimatedTextProps = {
  children: React.ReactNode;
};

type AnimatedTextsProps = {
  children: React.ReactNode;
};

function AnimatedText({ children }: AnimatedTextProps) {
  const style = useSpring({
    config: config.gentle,
    opacity: 1,
    from: { opacity: 0 },
  });

  return <animated.div style={style}>{children}</animated.div>;
}

function AnimatedTexts({ children }: AnimatedTextsProps) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: config.gentle,
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
  });

  return (
    <>
      {trail.map((style, index) => {
        return (
          <animated.div key={index} style={style}>
            {items[index]}
          </animated.div>
        );
      })}
    </>
  );
}

export { AnimatedText, AnimatedTexts };
