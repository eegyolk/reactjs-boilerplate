import { lazy, Suspense } from 'react';

const Portfolio = lazy(() => import('./index'));

const route = {
  path: '/portfolio',
  element: (
    <Suspense fallback={<>...</>}>
      <Portfolio />
    </Suspense>
  ),
};

export default route;
