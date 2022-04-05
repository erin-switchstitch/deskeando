import React from "react";
import { Link } from "react-router-dom";
// import { AiFillGithub } from 'react-icons/fa';
import { GithubOutlined } from "@ant-design/icons";
import Hero from "../components/Hero";
import ".././stylings/About.css";
import ".././stylings/Hero.css";

export default function AboutPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            <Hero display="none"/>
            <p>Our Team</p>
            <div className="social-container">
                <div>
                    <GithubOutlined className="GithubLogo" />
                    <a href="https://github.com/blasisi"><span>B</span>imbola</a>
                </div>
                <div>
                    <GithubOutlined className="GithubLogo" />
                    <a href="https://github.com/xtremelibasic"><span>A</span>manda</a>
                </div>
                <div>
                    <GithubOutlined  className="GithubLogo" />
                    <a href="https://github.com/Sharm-Dev"><span>S</span>harmine</a>
                </div>
                <div>
                    <GithubOutlined className="GithubLogo" />
                    <a href="https://github.com/erin-switchstitch"><span>E</span>rin</a>
                </div>
            </div>

            <div className="AboutParagraphContainer">
                <p>
                    Welcome to Deskeando the ultimate desk booking app created by BASE.
                </p>
                <br></br>
                <p>
                    Deskeando offers a hybrid exciting solution to the modern day office work force. In recent times we have all seen a shift in how we work and how we want to work. Less time is being focused on attending the office on a daily basis and more emphasis is now put on how we get our work force to collaborate when they are together but also being able to have a healthy work life balance.
                </p>
                <br></br>
                <p>
                    So with the instruction from Code Your Future on this exciting project, our team called BASE ( Bimbola, Amanda, Sharmaine and Erin) embarked on creating an app that would allow users to create a login page, and book available desks on our fantastic SVG desk booker page.
                </p>
                <br></br>
                <p>
                    With the app users can set accessibility requirements and choose desks that are suitably  matched to their own needs and requirements. Users are presented with dates they can pick from and choose if they require an AM or PM desk, and all users can see what they have booked on the confirmation page and even receive an email to remind them what they have booked.
                    </p>
                    <br></br>
                <p>
                    We look forward to having you take a look at our project.
                    </p>
            </div>
        </div>
    );
}

