import logo from './logo.svg';
import './App.css';
import FetchData from './components/classComponents/axios/fetch1';
import Data from './components/classComponents/axios/fetch';
import ProductsApi from './components/classComponents/axios/axios';




function App() {
  return (
   <div>
    <h1>Hello</h1>
<Data/>
<ProductsApi></ProductsApi>
<FetchData/>
   </div>
  );
}

export default App;
