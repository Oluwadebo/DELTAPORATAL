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

    const logout = () => {
        navigate("/")
    }

    return (
        <>
            <div className="">
                <div className="container-fluid fixed-top">
                    <div className="row">
                        <div className="col-md-2 col-3 side-bar">
                            <center>
                                <img src={PROf} alt="PROf" height="60px" className='img my-2' /><hr />
                            </center>
                            <Link to="/Dashboards" className='cart'>
                                <p className='btn1'><i className="fa fa-home px-3"></i>Dashboard</p>
                            </Link><hr />
                            <Link to="/Quiz" className='cart'>
                                <p className='btn1 active'><i className="fa fa-building px-3"></i>Department</p>
                            </Link><hr />
                            <Link to="/Dashboards" className='cart'>
                                <p className='btn1'><i className="fa-solid fa-volume-low px-3"></i>News & Event</p>
                            </Link><hr />
                            <Link to="/Dashboards" className='cart'>
                                <p className='btn1'><i className="fa-solid fa-clock-rotate-left px-3"></i>ERP</p>
                            </Link><hr />
                            <Link to="/Dashboards" className='cart'>
                                <p className='btn1'><i className="fa-solid fa-list-check px-3"></i>Task</p>
                            </Link><hr />
                            <Link to="/Dashboards" className='cart'>
                                <p className='btn1'><i className="fa-solid fa-code-pull-request px-3"></i>Requests</p>
                            </Link>
                        </div>
                        <div className="col-md-10 col-9 p-0 m-0">
                            <div className="rightside-bartop pt-2">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <p className='text-light'>{`${day}, ${month} ${currentDate.getDate()}, ${year}. ${formattedTime} `} <br /> Good {period}, Ogunwe debo</p>
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarText"
                                            aria-controls="navbarText"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarText">
                                            <div className="col-12 text-md-end">
                                                <span className='cart btn1 fs-5' onClick={logout}>
                                                    <i className="fa fa-sign-out ms-0 px-1"></i>Log Out
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className='quise'>
                                <div className="net">
                                    <div className="col-8 mt-2 mx-auto px-2 card">
                                        <h1>Simple Quiz</h1><hr />
                                        <div className="quiz">
                                            <h2 id='question'>Question goes here</h2>
                                            <div id="ansewr-buttons">
                                                <button className='btn'>Answer 1</button>
                                                <button className='btn'>Answer 2</button>
                                                <button className='btn'>Answer 3</button>
                                                <button className='btn'>Answer 4</button>
                                            </div>
                                            <button id='next-btn'>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quise