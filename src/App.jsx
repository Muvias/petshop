import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { Main } from './pages/Main';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/produtos' />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
