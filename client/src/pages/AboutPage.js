import React from "react";
import { Link } from "react-router-dom";
// import { AiFillGithub } from 'react-icons/fa';
import { GithubOutlined } from '@ant-design/icons';
import Hero from "../components/Hero";
import ".././stylings/About.css"

export default function AboutPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            <Hero />
            <p>Our Team</p>
            <div className="social-container">
                <div>
                    <GithubOutlined className="GithubLogo"/>
                    <a href="https://github.com/blasisi"><span>B</span>imbola</a>
                </div>
                <div>
                    <GithubOutlined className="GithubLogo"/>
                    <a href="https://github.com/xtremelibasic"><span>A</span>manda</a>
                </div>
                <div>
                    <GithubOutlined className="GithubLogo"/>
                    <a href="https://github.com/Sharm-Dev"><span>S</span>harmine</a>
                </div>
                <div>
                    <GithubOutlined className="GithubLogo"/>
                    <a href="https://github.com/erin-switchstitch"><span>E</span>rin</a>
                </div>
            </div>

            <div className="AboutParagraphContainer">
                <p>
                    Integer efficitur congue ante non dictum. Nulla facilisi. 
                    Aliquam feugiat commodo placerat. Aenean ipsum risus, lobortis nec arcu sit amet, 
                    blandit varius mi. 
                </p>
                <br></br>
                <p>
                    Praesent accumsan diam sit amet dolor ullamcorper, vitae semper 
                    enim posuere.
                </p>
                <br></br>
                <p>
                    Nullam non molestie nibh, quis gravida massa. Etiam cursus felis mollis turpis aliquam tempor. 
                    Integer porttitor tortor sed ipsum porttitor, in viverra ipsum tincidunt.
                </p>
            </div>
        </div>
    );
}

