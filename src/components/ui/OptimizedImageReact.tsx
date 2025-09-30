import React from 'react';

interface OptimizedImageReactProps {
  src: any; // ImageMetadata from Astro
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImageReact: React.FC<OptimizedImageReactProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy'
}) => {
  return (
    <img
      src={src.src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
    />
  );
};
