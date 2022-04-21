import React from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';
import { useHover } from '@use-gesture/react';

type AnimatedTextProps = {
  children: React.ReactNode;
};

type AnimatedTextsProps = {
  children: React.ReactNode;
};

type AnimatedCardProps = {
  children: React.ReactNode;
};

type ColorTextProps = {
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
      {trail.map((styles, index) => {
        return (
          <animated.div key={index} style={styles}>
            {items[index]}
          </animated.div>
        );
      })}
    </>
  );
}

function AnimatedCard({ children }: AnimatedCardProps) {
  const [styles, api] = useSpring(() => ({
    config: config.gentle,
    scale: 1,
  }));
  const bind = useHover(({ hovering, dragging }) => {
    if (hovering) {
      api.start({ scale: 1.1 });
    } else {
      api.start({ scale: 1 });
    }
  });

  return (
    <animated.div {...bind()} style={styles}>
      {children}
    </animated.div>
  );
}

function ColorText({ children }: ColorTextProps) {
  const styles = useSpring({
    loop: true,
    to: [{ color: '#f9a8d4' }, { color: '#9333ea' }],
    from: { color: '#ef4444' },
  });

  return <animated.div style={styles}>{children}</animated.div>;
}

export { AnimatedText, AnimatedTexts, AnimatedCard, ColorText };
