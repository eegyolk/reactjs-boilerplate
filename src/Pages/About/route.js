import { lazy, Suspense } from 'react';

const About = lazy(() => import('./index'));

const route = {
  path: '/about',
  element: (
    <Suspense fallback={<>...</>}>
      <About />
    </Suspense>
  ),
};

export default route;
