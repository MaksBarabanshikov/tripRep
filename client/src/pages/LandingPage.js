import {MainHead} from "../components/MainHead"
import {MainAbout} from "../components/MainAbout"
import {MainForm} from "../components/MainForm";
import {MainSocial} from "../components/MainSocial";
import {MainFooter} from "../components/MainFooter";
import {MainTour} from "../components/MainTour";
import "../style/LandingPage.scss"

export const LandingPage = () => {

    return (
        <>
            <MainHead/>
            <MainAbout/>
            <MainTour/>
            <MainForm/>
            <MainSocial/>
            <MainFooter/>
        </>

    )
}


