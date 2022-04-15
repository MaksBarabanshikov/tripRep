import {useEffect, useState} from "react";
import axios from "axios";

export const useTourData = () => {
    const [tourData, setTourData] = useState(null)

    useEffect(() => {
        const getTour = async () => {
            try {
                await axios.get('/api/card', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        setTourData(response.data)
                    })
            } catch (e) {
                console.log(e)
            }
        }
        getTour()
    }, [])

    return {tourData}
}

