//routing
import { Routes, Route } from 'react-router-dom';
//components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Profile from '../components/Profile';
//authentication
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../components/common/Loading';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
