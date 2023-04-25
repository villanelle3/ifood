// import Header from './components/Navbar-site';
import './styles/App.scss';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/main';
import Restaurant from './pages/restaurant';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
        {/* <Header/> */}
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/restaurant' element={<Restaurant/>} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
// https://my-json-server.typicode.com/villanelle3/fake-api/character
