import Scene from "./Scene";
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.js'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Scene />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/home" component={Home} /> */}
    </Routes>
  )
}

export default App;
