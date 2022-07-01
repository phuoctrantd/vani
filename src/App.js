import './assets/style.css';
import Vani from './components/Vani';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Lotteria/:voucher_id" element={<Vani />} />
      <Route path="*" element={<NotFound />} />
        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
