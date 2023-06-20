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
    const [currentQuestionindex, setcurrentQuestionindex] = useState(0)
    const [score, setscore] = useState(0)
    const [currentQuestion, setcurrentQuestion] = useState("")
    const [answers, setanswers] = useState([])
    const [selectedButton, setSelectedButton] = useState(null);
    const [button, setbutton] = useState(false)
    const [checkAnswer, setcheckAnswer] = useState()
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);

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

    const questions = [
        {
            question: "Which is the largest animal in the world",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        {
            question: "Which is the larget desert in the world",
            answers: [
                { text: "kalahari", correct: false },
                { text: "Gobi", correct: false },
                { text: "Sahara", correct: false },
                { text: "Antarctica", correct: true },
            ]
        },
        {
            question: "Which is the smallest continent in the world",
            answers: [
                { text: "Asia", correct: false },
                { text: "Australia", correct: true },
                { text: "Arctic", correct: false },
                { text: "Africa", correct: false },
            ]
        },
        {
            question: "Which is the smallest country in the world",
            answers: [
                { text: "Vatican city", correct: true },
                { text: "Bhutan", correct: false },
                { text: "Nepal", correct: false },
                { text: "Shri lanka", correct: false },
            ]
        }
    ];

    useEffect(() => {
        showQuestion()
    }, [currentQuestionindex])

    const showQuestion = () => {
        let questionNo = currentQuestionindex + 1;
        setcurrentQuestion(questionNo + ". " + questions[currentQuestionindex].question)
        setanswers(questions[currentQuestionindex].answers)
    }

    const select = (Answerindex, val) => {
        if (val) {
            setbutton(prev => true)
            setSelectedButton(Answerindex);
            setTotalAnswered(totalAnswered + 1);
            if (val.correct == true) {
                setcheckAnswer(true)
                setscore(score + 1);
            } else {
                setcheckAnswer(false)
            }
        }
    }

    const Nest = () => {
        setbutton(prev => false)
        setSelectedButton(null);
        let cindex = currentQuestionindex + 1
        if (cindex < questions.length) {
            setcurrentQuestionindex(cindex)
        } else {
            setcurrentQuestionindex(0)
        }
    }
    const getPercentageCorrect = () => {
        if (totalAnswered > 0) {
            return ((score / totalAnswered) * 100).toFixed(2);
        } else {
            return 0;
        }
    };

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
                                    <div className="col-md-10 col-11 mt-2 mx-auto px-2 card">
                                        <h1>Simple Quiz</h1>
                                        <div>Total Score: {score}</div>
                                        <div>Total Answered: {totalAnswered}</div>
                                        <div>Percentage Correct: {getPercentageCorrect()}%</div><hr />
                                        <div className="quiz">
                                            <h2>{currentQuestion}?</h2>
                                            {answers.map((item, index) => (
                                                <div id="answer-buttons">
                                                    <button className={selectedButton == index ? checkAnswer == true ? 'correct-answer selected-button' : 'incorrect-answer selected-button' : 'btn'} disabled={selectedButton != null && selectedButton != index} onClick={() => select(index, item)}>{item.text}</button>
                                                </div>
                                            ))}
                                            <center>
                                                {button && (
                                                    <div className="">
                                                        <button id='next-btn' onClick={Nest}>Next</button>
                                                    </div>
                                                )}
                                            </center>
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