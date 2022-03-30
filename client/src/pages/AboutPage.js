import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";

export default function AboutPage(props){

    //  ↓↓↓↓↓ globalUserDetails useState AND setGlobalUserDetails setState ↓↓↓↓↓
    let globalUserDetails = props.globalUserDetails;
    let setGlobalUserDetails = props.setGlobalUserDetails;
    console.log(globalUserDetails);
    //  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    return(
        <div>
            <Header globalUserDetails={globalUserDetails} setGlobalUserDetails={(data)=>setGlobalUserDetails(data)}/>
            <h1>About Page .....</h1>
            <p>Our Team</p>
            <div class="social-container">
  <h3>Github </h3>
  <div>
 <a href="https://github.com/blasisi"> Bimbola</a>
 {/* <span>
 <FontAwesomeIcon icon={["fab", "github"]} />

 </span> */}
</div>
<div>
 <a href="https://github.com/xtremelibasic"> Amanda</a>
 <i class="fab fa-github-square"></i>
</div>
 <a href="https://github.com/Sharm-Dev"> Sharmine</a>
 <a href="https://github.com/erin-switchstitch"> Erin</a>

     </div>
            <p></p>
            {/* </div> */}
        </div>
    );
}

