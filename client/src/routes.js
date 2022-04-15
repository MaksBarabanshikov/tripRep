import {Routes, Route, Navigate} from 'react-router-dom'
import {LandingPage} from "./pages/LandingPage";
import {AuthPage} from "./pages/AuthPage";
import TourPage from "./pages/TourPage";
import OrderingPage from "./pages/OrderingPage";
import ScrollController from "./components/ScrollController/ScrollController";


export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/tour" element={<TourPage/>}>
                    <Route path=":id" element={<TourPage/>}/>
                </Route>
                <Route path="/ordering" element={<OrderingPage/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="*" element={<Navigate replace to="/auth"/>}/>
        </Routes>
    )
}