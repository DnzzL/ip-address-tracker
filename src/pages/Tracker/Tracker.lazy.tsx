import React, { lazy, Suspense } from 'react';

const LazyTracker = lazy(() => import('./Tracker'));

const Tracker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTracker {...props} />
  </Suspense>
);

export default Tracker;
