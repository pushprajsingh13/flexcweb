// Type definitions for react-animated-css
declare module 'react-animated-css' {
  import { Component, ReactNode } from 'react';

  export interface AnimatedProps {
    animationIn?: string;
    animationOut?: string;
    animationInDuration?: number;
    animationOutDuration?: number;
    animationInDelay?: number;
    animationOutDelay?: number;
    animationInTiming?: string;
    animationOutTiming?: string;
    isVisible?: boolean;
    style?: React.CSSProperties;
    className?: string;
    innerRef?: React.RefObject<HTMLElement>;
    children?: ReactNode;
  }

  export class Animated extends Component<AnimatedProps> {}
}
