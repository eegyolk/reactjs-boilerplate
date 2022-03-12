import HeaderNav from '../Components/HeaderNav';

import homeRoute from '../Pages/Home/route';
import aboutRoute from '../Pages/About/route';
import portfolioRoute from '../Pages/Portfolio/route';

const headerNavRoutes = [
  {
    path: '/',
    element: <HeaderNav />,
    children: [homeRoute, aboutRoute, portfolioRoute],
  },
];

export default headerNavRoutes;
