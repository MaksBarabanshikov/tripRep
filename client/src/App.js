import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {TourContext} from "./context/TourContext";
import {useTourData} from "./hooks/tourData.hook";
import ScrollController from "./components/ScrollController/ScrollController";

function App() {
    const {token, login, logout, userId} = useAuth()
    const {tourData} = useTourData()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <TourContext.Provider value={{
                tourData
            }}>
                <Router>
                    <div className="wrapper">
                        <ScrollController/>
                        {routes}
                    </div>
                </Router>
            </TourContext.Provider>
        </AuthContext.Provider>
    )
}

export default App