import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
// import { AiFillGithub } from 'react-icons/fa';
import { GithubOutlined } from '@ant-design/icons';

export default function AboutPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            {/* <Header globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/> */}
            <h1>About Page .....</h1>
            <p>Our Team</p>
            <div class="social-container">
  <h3>Github </h3>
  <div>
 <a href="https://github.com/blasisi"> Bimbola</a><GithubOutlined />
</div>

<div>
 <a href="https://github.com/xtremelibasic"> Amanda</a>
 <GithubOutlined />
</div>
<div>
 <a href="https://github.com/Sharm-Dev"> Sharmine</a>
 <GithubOutlined />
 </div>
 <div>
 <a href="https://github.com/erin-switchstitch"> Erin</a>
 <GithubOutlined />
</div>
     </div>
            <p></p>
            {/* </div> */}
        </div>
    );
}

