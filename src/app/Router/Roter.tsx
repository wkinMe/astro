import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home/ui/Home';
import Apod from '@pages/apod/ui/Apod';
import Epic from '@pages/epic/ui/Epic';
import Mars from '@pages/mars/ui/Mars';
import { URLS } from '@shared/config/urls';
import { Layout } from '@app/Layout';

const routes = [
    { path: URLS.HOME, element: <Home />, index: true },
    { path: URLS.APOD, element: <Apod /> },
    { path: URLS.EPIC, element: <Epic /> },
    { path: URLS.MARS, element: <Mars /> },
];

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map((route) => {
                        return route.index ? (
                            <Route index key={route.path} path={route.path} />
                        ) : (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        );
                    })}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
