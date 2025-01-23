import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);

// l'operatore ! è il non-null assertion operator che calca la mano
// tranquillizzando TS che l'elemento indicato esiste e non è un
// valore falsy
