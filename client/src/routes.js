import {Routes, Route, Navigate} from 'react-router-dom'
import {LandingPage} from "./pages/LandingPage";
import {AuthPage} from "./pages/AuthPage";
import TourPage from "./pages/TourPage";
import OrderingPage from "./pages/OrderingPage";
import MyCabinet from "./pages/MyCabinet";
import CabinetPersonal from "./components/MyCabinet/CabinetPersonal";
import CabinetOrder from "./components/MyCabinet/CabinetOrder";

export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/tour" element={<TourPage/>}>
                    <Route path=":id" element={<TourPage/>}/>
                </Route>
                <Route path="/ordering" element={<OrderingPage/>}/>
                <Route path="/my" element={<MyCabinet/>}/>
                <Route path="/my/personal" element={<CabinetPersonal/>}/>
                <Route path="/my/order" element={<CabinetOrder/>}/>
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