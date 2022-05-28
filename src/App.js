import './main.scss';
import { Header } from './layout/Header/index'
import { Home } from './views/home/index'
import { About } from './views/about/index'
import { Error404 } from './views/Error404/index'
import { Property } from './views/Property/index.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

export function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/property/:propertyId" element={<Property/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
