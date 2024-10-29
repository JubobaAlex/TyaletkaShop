import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Footer from './Footer'
import Order from './Order'
function App() {
  return (
    <div>
<header>
     <div className="topnav" id="topnav">
        <a className="home" href="/">TyaletkaShop</a>
      </div>
</header>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/order' element={<Order />} />
</Routes>
</BrowserRouter>

<footer>
  <Footer />
</footer>
    </div>
  )
}

export default App
