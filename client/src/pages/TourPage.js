import {useParams} from "react-router-dom"
import {useContext} from "react";
import MainTourContent from "../components/TourPage/MainTourContent";
import {TourContext} from "../context/TourContext";

const TourPage = () => {
    const context = useContext(TourContext)
    const {id} = useParams();
    const tour = context.tourData.filter(item => item._id === id)

        return (
            <>
                {!!tour && <MainTourContent tour={tour[0]}/>}
            </>
        )


}

export default TourPage