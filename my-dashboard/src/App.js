import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Header from './pages/Dashboard/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
           <Route path='/' exact={true} element = {<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
