import {MainHead} from "../MainHead";
import {MainFooter} from "../MainFooter";
import {useState} from "react";
import MainTourInfo from "./MainTourInfo";

const MainTourContent = ({tour}) => {
    const [tourData, setTourData] = useState({...tour})
    console.log(tour)

        return(
            <>
                <MainHead/>
                <MainTourInfo content={tourData}/>
                <MainFooter/>
            </>
        )

}

export default MainTourContent