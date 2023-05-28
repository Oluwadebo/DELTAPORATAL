import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import PROf from './asset/prof.PNG'

const Dashboards = () => {
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
    const period = currentTime.getHours() < 12 ? "morning" : "evening";

    var counter = 1;
    const generateStaffID = () => {
        var currentYear = new Date().getFullYear();
        var currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
        var staffID = currentYear.toString() + currentMonth + counter.toString().padStart(4, '0');
        counter++;
    }

    const logout = () => {
        navigate("/")
    }

    return (
        <>
            <div className="">
                <div className="container-fluid fixed-top">
                    <div className="row">
                        <div className="col-md-1 col-3 side-bar">
                            <center>
                                <img src={PROf} alt="PROf" height="60px" className='img my-2' /><hr />
                                <Link to="/" className='cart'>
                                    <p className='btn1 active'><i className="fa fs-5 fa-dashboard ms-0 px-1"></i>Home</p>
                                </Link>
                                <Link to="/" className='cart'>
                                    <p className='btn1'><i className="fa fa-user-circle ms-0 px-1"></i>Profile</p>
                                </Link>
                                <Link to="/" className='cart'>
                                    <p className='btn1'><i className="fa fa-inbox ms-0 px-1"></i>Message</p>
                                </Link>
                            </center>
                        </div>
                        <div className="col-md-11 col-9 p-0 m-0">
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
                            <div className="scrollSpy px-2">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum enim laudantium reprehenderit veniam voluptate ipsum delectus error? Neque esse sapiente iure dignissimos! Ex molestiae non deleniti, sapiente quo earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique numquam iure optio delectus ea saepe culpa sequi quisquam iusto molestias commodi illum expedita tempore esse, cumque vel omnis placeat! Dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum enim laudantium reprehenderit veniam voluptate ipsum delectus error? Neque esse sapiente iure dignissimos! Ex molestiae non deleniti, sapiente quo earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique numquam iure optio delectus ea saepe culpa sequi quisquam iusto molestias commodi illum expedita tempore esse, cumque vel omnis placeat! Dolore.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum enim laudantium reprehenderit veniam voluptate ipsum delectus error? Neque esse sapiente iure dignissimos! Ex molestiae non deleniti, sapiente quo earum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique numquam iure optio delectus ea saepe culpa sequi quisquam iusto molestias commodi illum expedita tempore esse, cumque vel omnis placeat! Dolore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboards