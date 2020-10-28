import React from "react";
import moshood from "../../images/team/moshood.png";
import mriyaki from "../../images/team/mriyaki.png";
import mrdisman from "../../images/team/mrdisman.png";
import behance from "../../images/team/behance.png";


const Team =() => (

<div>

<div className="bac-team-color">


<div className="container" id="section_5">

<div className="row">

<div className="col-lg-12">
    <h3 className="head-style-team">Young & Vibrant.</h3>
    <p className="sub-head-style-team">Meet Our Team Of Experts</p>
</div>

</div>


<div className="row">
    <div className="col-md-4">
        <img src={moshood} className="img-fluid img-team" alt="mshood"/>
        <h5 className="team-name">Moshood Adesanya</h5>
        <p className="team-title">Graffiti Artist/Founder</p>
        <a href="#">
            <img src={behance} className="img-fluid behance" alt="behance"/>
        </a>
    </div>

    <div className="col-md-4">
    <img src={mriyaki} className="img-fluid img-team" alt="mriyaki"/>
    <h5 className="team-name">Micheal Iyaki</h5>
        <p className="team-title">Graffiti Artist</p>
        <a href="#">
            <img src={behance} className="img-fluid behance" alt="behance"/>
        </a>
    </div>

    <div className="col-md-4">
    <img src={mrdisman} className="img-fluid img-team" alt="mrdisman"/>
    <h5 className="team-name">Who be dis 1</h5>
        <p className="team-title">Graffiti Artist</p>
        <a href="#">
            <img src={behance} className="img-fluid behance" alt="behance"/>
        </a>
    </div>

</div>

</div>

</div>



{/**main closing div */}

</div>

);

export default Team;