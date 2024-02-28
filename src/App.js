import logo from './logo.svg';
import './App.css';
import Purecomponents from './components/classComponents/purecomponents/parent';
import Child from './components/classComponents/purecomponents/child';
// import Unmounting from './components/classComponents/lifecyclemethods/unmounting';






function App() {
  return (
   <div>
    <h1>Hello</h1>
{/* <Unmounting/> */}
<Purecomponents/>q
<Child/>
   </div>
  );
}

export default App;
