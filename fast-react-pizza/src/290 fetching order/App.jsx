import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuloader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order, { loader as orderloader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuloader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder /> },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderloader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      // future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      // is to prevent this warning: React Router Future Flag Warning:
      // React Router will begin wrapping state updates  in
      // `React.startTransition` in v7. You can use the `v7_startTransition`
      // future flag to opt-in early.
    />
  );
}

export default App;
