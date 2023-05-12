// import Header from './components/Navbar-site' 
import './styles/App.scss' 
import './styles/index.css' 
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Main from './pages/main' 
import Restaurant from './pages/restaurant' 
import Footer from './components/Footer' 
import { store } from './store'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          {/* <Header/> */}
            <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/restaurant/:id' element={<Restaurant/>} />
            </Routes>
          <Footer/>
      </BrowserRouter>
    </Provider>
  ) 
}

export default App 
