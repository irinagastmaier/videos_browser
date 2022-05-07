//routing
import { Routes, Route } from 'react-router-dom';
//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
