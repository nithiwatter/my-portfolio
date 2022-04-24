import React from 'react';

import { createSimpleContext } from './providers';

enum AnimationState {
  On = 'on',
  Off = 'off',
}

type AnimationProviderProps = {
  children: React.ReactNode;
};

const {
  Context: AnimationStateContext,
  Provider: AnimationStateProvider,
  useValue: useAnimationState,
} = createSimpleContext<AnimationState>('AnimationState');
const { Provider: AnimationDispatchProvider, useValue: useAnimationDispatch } =
  createSimpleContext<() => void>('AnimationDispatch');

function AnimationProvider({ children }: AnimationProviderProps) {
  const [animationState, setAnimationState] = React.useState(AnimationState.On);

  const toggleAnimationState = React.useCallback(() => {
    const newAnimationState =
      animationState === AnimationState.On
        ? AnimationState.Off
        : AnimationState.On;
    setAnimationState(newAnimationState);
  }, [animationState]);

  return (
    <AnimationStateProvider value={animationState}>
      <AnimationDispatchProvider value={toggleAnimationState}>
        {children}
      </AnimationDispatchProvider>
    </AnimationStateProvider>
  );
}

export {
  AnimationState,
  AnimationStateContext,
  AnimationProvider,
  useAnimationState,
  useAnimationDispatch,
};
