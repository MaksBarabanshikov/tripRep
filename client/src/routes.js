import {Routes, Route, Navigate} from 'react-router-dom'
import {LandingPage} from "./pages/LandingPage";
import {AuthPage} from "./pages/AuthPage";
import TourPage from "./pages/TourPage";


export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/tour/:id" element={<TourPage/>}/>}/>
                {/*<Route path="/*" element={<Navigate to="/" replace/>}/>*/}
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            {/*<Route path="/*" element={<Navigate replace to="/auth"/>}/>*/}
        </Routes>
    )
}