import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { store } from './state/store';
import CryptosPage from './routes/AllCryptos/CryptosPage';
import SelectedCryptoPage from './routes/SelectedCrypto/SelectedCryptoPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptosPage />} />
          <Route path="/:name" element={<SelectedCryptoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
