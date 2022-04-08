import {MainHead} from "../MainHead";
import {MainFooter} from "../MainFooter";
import bgimage from "../../img/backgrounds/tourCard1.jpg"

const MainTourContent = ({tour}) => {
    console.log(tour)
    return(
        <>
            <MainHead/>
            {
                <div>{tour.name}</div>
            }
            <MainFooter/>
        </>
    )
}

export default MainTourContent