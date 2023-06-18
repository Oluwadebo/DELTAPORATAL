import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import PROf from './asset/prof.PNG'

const Quise = () => {
    const navigate = useNavigate();
    const currentDate = new Date();
    const [day, setday] = useState("")
    const [month, setmonth] = useState("")
    const [year, setyear] = useState("")
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setday(currentDate.toLocaleString("en-US", { weekday: "long" }));
            setmonth(currentDate.toLocaleString("en-US", { month: "long" }))
            setyear(currentDate.getFullYear())
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, [])

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", });
    const period = currentTime.getHours() < 12 ? "Morning" : currentTime.getHours() < 17 ? "Afternoon" : "Evening";

    return (
        <div>Quise</div>
    )
}

export default Quise