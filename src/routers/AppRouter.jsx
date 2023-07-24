import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TerminosCondicionesPage from '../pages/TerminosCondicionesPage';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/terminos-condiciones" element={<TerminosCondicionesPage />} />
            </Routes>
        </>
    );
}