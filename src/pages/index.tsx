import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Stores from './Stores/Stores';
import Store from './Store/Store';
import Cart from './Cart/Cart';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/category/:categoryId',
          element: <Stores />,
        },
        {
          path: '/store/:storeId',
          element: <Store />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
