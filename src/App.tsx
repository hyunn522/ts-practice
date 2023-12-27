import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Stores from './pages/Stores/Stores';
import Store from './pages/Store/Store';
import Cart from './pages/Cart/Cart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Stores />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
