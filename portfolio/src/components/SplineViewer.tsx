import React from 'react';

interface SplineViewerProps {
  url: string;
  'loading-anim-type'?: string;
  background?: string;
  loading?: string;
  style?: React.CSSProperties;
  className?: string;
}

const SplineViewer: React.FC<SplineViewerProps> = (props) => {
  return (
    <spline-viewer
      url={props.url}
      loading-anim-type={props['loading-anim-type'] || 'spinner-small-dark'}
      background={props.background || 'transparent'}
      loading={props.loading || 'lazy'}
      style={props.style}
      className={props.className}
    />
  );
};

export default SplineViewer;