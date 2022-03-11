import {Routes, Route, Navigate} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {LandingPage} from "./pages/LandingPage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";


export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
            <Routes>
                <Route path="/auth" element={<LinksPage/>}/>
                <Route path="/create" element={<LandingPage/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="/*" element={<Navigate replace to="/create"/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthPage/>}/>
            <Route path="/*" element={<Navigate replace to="/"/>}/>
        </Routes>
    )
}