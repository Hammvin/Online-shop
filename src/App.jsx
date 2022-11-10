import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {Details} from './components/Details'
import { Default } from './components/Default';
import { ProductList } from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
   <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' caseSensitive={false} element={<ProductList />} />
            <Route path='/details' caseSensitive={false} element={<Details />} />
            <Route path='cart' caseSensitive={false} element={<Cart />} />
            <Route path='*' element={<Default />} />
          </Routes>
      </Router>
   </>
  );
}

export default App;
