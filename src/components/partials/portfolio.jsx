import React from "react";
import work1 from "../../images/portfolio/work1.JPG";
import work2 from "../../images/portfolio/work2.JPG";
import work3 from "../../images/portfolio/work3.JPG";
import work4 from "../../images/portfolio/work4.jpg";
import work5 from "../../images/portfolio/work5.jpg";
import work6 from "../../images/portfolio/work6.png";
import work7 from "../../images/portfolio/work7.png";



const Portfolio =() => (


    <div>


        <div className="container" id="section_4">
            <div className="row">
                <div className="col-lg-12">
            <h3 className="portfolio-heading">Our Portfolio</h3>
            <p className="body-style style-only">We offer Corporate Office Mural, Corporate Outdoor Mural, Residential Mural, Graffiti for Musical Video and Concert, Graffiti for Event Backdrop, Graffiti for Activation Campaign</p>
</div>
            </div>
        </div>

<div className="container-fluid">
<div class="row">
    <div class="col-sm-4">
        <div className="show">
            <img src={work1} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work2} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work3} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="w-100"></div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work4} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work5} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work6} className="img-fluid img-adjust"/>
        </div>
    </div>
  </div>

</div>


<div className="container-fluid">
<div class="row">
    <div class="col-sm-4">
        <div className="show">
            <img src={work7} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work2} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work3} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="w-100"></div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work4} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work5} className="img-fluid img-adjust"/>
        </div>
    </div>
    <div class="col-sm-4">
    <div className="show">
            <img src={work6} className="img-fluid img-adjust"/>
        </div>
    </div>
  </div>

</div>


    </div>


);

export default Portfolio;