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
      <Route path="/lotteria/" exact><Vani></Vani> </Route>
      <Route path="/lotteria/home/" exact ><Home /></Route>
      <Route path="/lotteria/coin/" exact ><Coin /></Route>
      <Route path="/lotteria/setting/" exact > <Setting /></Route>
      <Route path="*" exact > <NotFound /></Route>
      </Switch>
      
  </BrowserRouter>
  );
}

export default App;
