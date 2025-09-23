declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': {
      url?: string;
      'loading-anim-type'?: string;
      background?: string;
      loading?: string;
      style?: React.CSSProperties;
      className?: string;
      children?: React.ReactNode;
    };
  }
}

declare module '@splinetool/viewer' {
  export interface SplineViewerProps {
    url: string;
    'loading-anim-type'?: string;
    background?: string;
    loading?: string;
    style?: React.CSSProperties;
    className?: string;
  }
}