'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const RestaurantMapIslamabad = dynamic(
  () => import('@/components/RestaurantMapIslamabad/RestaurantMapIslamabad'),
  { ssr: false, loading: () => <div className="h-[500px] w-full rounded-xl bg-gray-100" /> }
);

const PreviewPage = () => {
  return (
    <div className="preview-page">
      <h1>Skeleton Screen Preview</h1>
      <RestaurantMapIslamabad/>
    </div>
  );
};

export default PreviewPage;
