import React from 'react';

const SkeletonScreen = () => {
  return (
    <div className="skeleton-screen">
      <div className="skeleton-header"></div>
      <div className="skeleton-content">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
      </div>
      <div className="skeleton-footer"></div>
    </div>
  );
};

export default SkeletonScreen;