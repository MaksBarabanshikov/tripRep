import {MainFooter} from "../MainFooter"
import MainTourInfo from "./MainTourInfo"
import NewHeader from "../New/NewHeader"
import Banner from "./Banner";

const MainTourContent = ({tour}) => {
        console.log("tourContent:", tour)
        return(
            <>
                <NewHeader/>
                <Banner src={tour.src}/>
                <MainTourInfo content={tour}/>
                <MainFooter/>
            </>
        )

}

export default MainTourContent