import './App.css';
import Footer from './Customer/Component/Footer/Footer';
import Navbar from './Customer/Component/Navigation/Navbar';
import Product from './Customer/Component/Product/Product';
import HomePage from './Customer/Pages/HomePage';

function App() {
  return (
    <div>

    <div>
    <Navbar/>
    </div>

      <div>
      <HomePage/>
{/* <Product/> */}
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
