import React from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import * as yup from "yup";
import { baseUrl } from "./endpoint";
import download from "./asset/download-.png"

const Home = () => {
  const navigate = useNavigate();
  const [Error, setError] = useState("");
  const [first, setfirst] = useState(true)
  const [loader, setloader] = useState(false)
  let day = new Date().toLocaleDateString();

  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);

  const signin = useFormik({
    initialValues: {
      Name: "",
      password: "",
    },
    onSubmit: (values) => {
      setloader(prev => true)
      // axios.post(`${baseUrl}customersignin`, values).then((credentials) => {
      //   if (credentials) {
      //     let Err = credentials.data.message;
      //     if (Err == "Email not found") {
      //       setloader(prev => false)
      //       setError("Email not found");
      //     } else if (Err == "Invaild password") {
      //       setloader(prev => false)
      //       setError("Invaild password");
      //     } else {
      //       if (Err == "Token generated") {
      //         localStorage.customer = credentials.data.token
      //         setloader(prev => false)
      //         navigate("/")
      //       }
      //     }
      //   }
      // })
    },
    validationSchema: yup.object({
      Name: yup
        .string()
        .required("This field is required")
        .min(3, "Must Be Your Name"),
      password: yup
        .string()
        .required("This field is required")
        .min(5, "password is weak, must be greater than 5 charaters"),
    }),
  });
  const toggle = useRef();
  const i = useRef();
  const password = useRef();

  const showHide = () => {
    if (password.current.type === "password") {
      password.current.setAttribute("type", "text");
      toggle.current.classList.add("hide");
      i.current.classList = "fa fa-eye-slash";
    } else {
      password.current.setAttribute("type", "password");
      i.current.classList = "fa fa-eye";
      toggle.current.classList.remove("hide");
    }
  };
  return (
    <>
      <div className="container">
        <div className="header mx-2 px-1">
          <div className="row bg-light">
            <img src={download} className="logo" alt="" />
            <div className="col-12 stack">
              <center>
                <span><b><i>STAFF PORTAL</i></b></span>
              </center>
            </div>
          </div>
        </div>
        <div className="menu">
          <h4 className='sf-menu'>Home</h4>
        </div>
        <div className="row">
          <div className="col-md-7 pe-0 d-md-inline d-sm-none">
            <div className="head">
              <h1>
                <span>Important Information...</span>
              </h1>
            </div>
            <div className="content">
              <p class="box-blue">You are to log in with your ID and NAME. Once you are logged in, pay close attention to any information appearing in a green box.<br /><Link to="/" title="Create A Portal Account for New Staff" className='ai'><i>Click here</i></Link> to create a portal account if you are a New Staff. However, if you are not a New Staff, and you do not have a portal account, visit the HR Office first for profiling and then <strong><Link to="/" title="Create A Portal Account" className='ai'><i>Click here</i></Link></strong>.
              </p>
              <p className='box-green'>
                <span className='curr'>Monday :</span><span className='sess'> 8:00am to 3:30pm</span> <br />
                <span className='curr'>Tuesday :</span><span className='sess'> 8:00am to 3:30pm</span> <br />
                <span className='curr'>Wednesday :</span><span className='sess'> 8:00am to 3:30pm</span> <br />
                <span className='curr'>Thursday :</span><span className='sess'> 8:00am to 3:30pm</span> <br />
                <span className='curr'>Friday :</span><span className='sess'> 8:00am to 3:30pm</span> <br />
                <span className='curr'>Current Day ({day})</span>
              </p>
            </div>
          </div>
          <div className="col-md-5 col-12 ps-md-0">
            <div className="half_sidebar">
              <div className="body">
                <div className="top">
                  <h1 className="hea mb-4"><span>Welcome, please login...</span></h1>
                  <form action="" onSubmit={signin.handleSubmit}>
                    <div className="my-1">
                      <label>Name:</label>
                      <input type="text" placeholder="Employee Name" className={signin.errors.Name && signin.touched.Name ? "form-control fstyle is-invalid" : "form-control fstyle"} onChange={signin.handleChange} style={{ backgroundColor: "#F5F7FA" }} name="Name" onBlur={signin.handleBlur} />
                      {signin.touched.Name && (
                        <div style={{ color: "red" }} className="my-1">
                          {signin.errors.Name}
                        </div>
                      )}
                    </div>
                    <div className="my-1">
                      <label>Password:</label>
                      <input type="password" placeholder="Employee Id" className={signin.errors.password && signin.touched.password ? "form-control fstyle is-invalid" : "form-control fstyle"} ref={password} maxLength={10} onChange={signin.handleChange} style={{ backgroundColor: "#F5F7FA" }} name="password" onBlur={signin.handleBlur} />
                      <div id="toggle" ref={toggle} onClick={showHide} className="gose pe-4" >
                        <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                      </div>
                      {signin.touched.password && (
                        <div style={{ color: "red" }} className="my-1">
                          {signin.errors.password}
                        </div>
                      )}
                      <button type="submit" className="btn btn-primary py-2 mt-3">
                        <b>Login</b>
                        {loader && (
                          <div className="spin">
                            <div className="loader"></div>
                          </div>
                        )}
                      </button>
                    </div>
                  </form>
                  <div className="hea mt-5"><span>To secure your account, always log out once you are done!</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <p className="copy">Copyright © 2023 <a href="#">stack-delta dev</a>. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Home