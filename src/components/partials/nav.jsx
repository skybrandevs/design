import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";


const Nav = () => (
<div className="sticky-top" id="#top">


<nav id="navbar_1" class="navbar navbar-expand-lg navbar-light shadow-sm bg-white">
   <img src={logo} class="img-fluid logo" alt="logo"/>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a href="#section_1" class=" nav-link"> CLIENTS</a></li>
          <li class="nav-item"><a href="#section_2" class=" nav-link"> ABOUT </a></li>
          <li class="nav-item"><a href="#section_3" class=" nav-link"> CONTACT </a></li>
          <li class="nav-item"><a href="#section_4" class=" nav-link"> PORTFOLIO </a></li>
          <li class="nav-item"><a href="#section_5" class=" nav-link"> TEAM </a></li>
         
         </ul>
   </div>
 </nav>

  
{/* main closing div */}
</div>


    );

export default Nav;
