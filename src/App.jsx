
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App
