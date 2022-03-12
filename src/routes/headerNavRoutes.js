import HeaderNav from '../Components/HeaderNav';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';

const defaultRoutes = [
  {
    path: '/',
    element: <HeaderNav />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
    ],
  },
];

export default defaultRoutes;
