import { useParams } from "react-router-dom"
import {useState, useEffect} from "react";

const TourPage = ({tour}) => {
    const {id} = useParams();
    return(
        <>
            <h4>{id}</h4>
        </>
    )
}

export default TourPage