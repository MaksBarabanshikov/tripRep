import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";
import axios from "axios";
import Loader from "../components/common/Loader";
import MainTourContent from "../components/TourPage/MainTourContent";

const TourPage = () => {
    const [tour, setTour] = useState(null)
    const [loading, setLoading] = useState(false)
    const {id} = useParams();


    useEffect(() => {
        const getTour = async () => {
            setLoading(true)
            try {
                await axios.get(`/api/tour/${id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        setTour(response.data)
                        setLoading(false)
                    })
            } catch (e) {
                setLoading(false)
                console.log(e)
            }
        }
        getTour()
    }, [id])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <MainTourContent tour={tour}/>}
        </>
    )
}

export default TourPage