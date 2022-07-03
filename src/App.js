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
      <Route path="/Lotteria/:voucher_id" exact><Vani></Vani> </Route>
      <Route path="/Home/:voucher_id" exact ><Home /></Route>
      <Route path="/Coin/:voucher_id" exact ><Coin /></Route>
      <Route path="/Setting/:voucher_id" exact > <Setting /></Route>
      <Route path="*" exact > <NotFound /></Route>
      </Switch>
      
  </BrowserRouter>
  );
}

export default App;
