import './assets/style.css';
import Vani from './components/Vani';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';
import Home from './components/Home';
import Coin from './components/Coin';
import Setting from './components/Setting';

function App() {
  return (
    <BrowserRouter>
    
    <Switch>
      <Route path="/Lotteria/:voucher_id" element={<Vani />} />
      <Route path="/Home/:voucher_id" element={<Home />} />
      <Route path="/Coin/:voucher_id" element={<Coin />} />
      <Route path="/Setting/:voucher_id" element={<Setting />} />
      <Route path="*" element={<NotFound />} />
      </Switch>
      
  </BrowserRouter>
  );
}

export default App;
