/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { FaInstagram,FaLinkedin,FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
import "../assets/css/styles.css"
import Fade from "react-reveal/Fade";
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ReactDOM from 'react-dom/client';
import Form from "elements/Form";
import Button from "elements/Button";
import instagram from "assets/images/instagram-icon.png";
import linkedin from "assets/images/linkedin-icon.png";
import facebook from "assets/images/facebook-icon.png";
import twitter from "assets/images/twitter-icon.png";
import location from "assets/images/location-icon.png";
import Drop from "./Drop";

export default function DiscussForm(props) {
  const { data, resetForm } = props;
  const [subject, setSubject] = useState("")

  const submitEmail = () => {
    const { name, company, email, phone, projectIdea, subject } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email}- ${subject} )`,
      to_name: "Racxstudio",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      subject !==""&&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_h4gtndg",
          "template_a9tvs7a",
          templateParams,
          "user_csqIxzN5mKsl1yw4ffJzV"
        )
        .then(
          () => {
            toast.success("Success! we'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error);
          }
        );
    } else {
      toast.error("Please fill out the blank form.");
    }
  };

  return (
    <section className="flex flex-col container mx-auto  justify-center ">
      <Fade bottom>
        <div className="discuss_container">
          <div className="left">
            <div className="side-nav-bar">
              <div className="nav-upper">
                <div className="nav-heading">
                  <div className="nav-brand" style={{paddingTop:"7%"}}>
                    <h1 className="text-xl text-theme-blue text-center pt-6 color">Get in touch </h1>
                    <ul>
                    <li className="font-light text-lg text-gray-500 text-center m-12">
                      <a href="mailto:info@salemgrp.com">info@salemgrp.com</a></li>


                    <li className="font-light text-lg text-gray-500 text-center m-12">
                    <p className="discuss_form_a">
                    <span className="sidebar"><FaPhoneAlt  size="3x"/></span>  
                    <span className="ml-7"> (961) 71 243 618 </span>
                    </p>
                    </li>


                    <li className="font-light text-lg text-gray-500 text-center m-12">
                      <a href="https://www.google.com/maps/place/Salem+Group/@33.8956728,35.4867213,17z/data=!4m5!3m4!1s0x151f17afb9efd533:0x1aa5f682dd3f1b45!8m2!3d33.8956745!4d35.4909154" className="discuss_form_a responsive-links">
                      <span className="sidebar"><FaMapMarkerAlt size="3x"/></span>  
                     <span className="ml-7">  Location </span>
                      </a>
                      </li>


                   {/*  <li className="font-light text-lg text-gray-500 text-center m-12" >
                    <a href="https://www.instagram.com/salemmgroup/" className="discuss_form_a">
                    
                    <span className="sidebar"><FaInstagram size="3x"/></span>                   
                    <span className="ml-7">  Instagram </span>
                     </a>
  </li> */}
                    
                   <li className="font-light text-lg text-gray-500 text-center m-12">
                   <a href="https://www.linkedin.com/company/salemgroup/" className="discuss_form_a responsive-links">
                      <span className="sidebar"><FaLinkedin size="3x"/></span>
                      <span className="ml-7">  Linkedin </span>
                      </a>
                   </li>
                    
                    </ul>
                    {/*<div className="flex">
                      <img
                        className="sidebar"
                        src={facebook}
                        alt="Build Website"
                      />
                      <a href="https://www.linkedin.com/company/salemgroup/">
                        Facebook
                      </a>
                    </div>
                    <div className="flex">
                      <img
                        className="sidebar"
                        src={twitter}
                        alt="Build Website"
                      />
                      <a href="https://www.linkedin.com/company/salemgroup/">
                        Twitter
                      </a>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right" style={{marginLeft:"6%",paddingTop:"4%"}}>
            <h1 className="text-5xl text-theme-blue text-center font-bold color">
              Contact Us
            </h1>

            <p className="font-light text-lg text-gray-400 text-center mb-12">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Please fill out the form below to discuss your project and we'll
              get back to you in 24 hours.
            </p>

            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row mx-auto ">
                <Form
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  placeholder="Your name"
                  className=""
                  onChange={props.onChange}
                />
                <Form
                  id="company"
                  name="company"
                  type="text"
                  value={data.company}
                  placeholder="Your company"
                  className=""
                  onChange={props.onChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row mx-auto" >
                <Form
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  placeholder="Your email address"
                  className=""
                  onChange={props.onChange}
                />
                <Form
                  id="phone"
                  name="phone"
                  type="tel"
                  value={data.phone}
                  placeholder="Your contact number"
                  className=""
                  onChange={props.onChange}
                />
              </div>
              <div className="contact-us">
                <div className="drop">
  
                  <Drop subject={subject} setSubject={setSubject}/>
                </div>
                {/* desktop view */}
                {subject === "Other" && <div className="text-area desktop-drop">
                <Form
                  id="company"
                  name="subject"
                  type="text"
                  value={data.subject}
                  placeholder="Your Subject"
                  className=" p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:#367588 responsive-mobileDiscussForm"
                  onChange={props.onChange}
                />
                </div>}
                {/*  */}
              </div>
              {/* mobile view */}
              {subject === "Other" && <div className="text-area">
                <Form
                  id="company"
                  name="subject"
                  type="text"
                  value={data.subject}
                  placeholder="Your Subject"
                  className="mobile-drop p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:#367588 responsive-mobileDiscussForm"
                  onChange={props.onChange}
                />
                </div>}
                {/*  */}
              <div className="mx-auto">
                <Form
                  id="projectIdea"
                  name="projectIdea"
                  type="textarea"
                  value={data.projectIdea}
                  placeholder="Explain about your project idea"
                  className=""
                  onChange={props.onChange}
                />
              </div>
              <Button
                className="text-xl mx-auto px-12 py-3 mt-5  text-white rounded-full border-2 border-theme-purple  border-purple-800 transition duration-200 focus:outline-none box "
                type="button"
                onClick={submitEmail}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
}
