import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import PortfolioRouter from './components/Router/PortfolioRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <PortfolioRouter>
        <App />
    </PortfolioRouter>
);
