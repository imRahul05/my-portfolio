import React from 'react';

type SectionLoaderProps = {
  message?: string;
};

const SectionLoader: React.FC<SectionLoaderProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="section-loader">
      {message}
    </div>
  );
};

export default SectionLoader;
