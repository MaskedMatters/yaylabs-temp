import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/app/Layout';
import Home from './pages/Home';
// Placeholders for now - will create files next
import Biology from './pages/Biology';
import Chemistry from './pages/Chemistry';
import Physics from './pages/Physics';
import CS from './pages/CS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="biology" element={<Biology />} />
          <Route path="chemistry" element={<Chemistry />} />
          <Route path="physics" element={<Physics />} />
          <Route path="cs" element={<CS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
