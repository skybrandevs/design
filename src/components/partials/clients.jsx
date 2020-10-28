import React from "react";
import school from "../../images/clients/school.png";
import thebulb from "../../images/clients/thebulb.png";
import inky from "../../images/clients/inky.png";
import innova from "../../images/clients/innova.png";
import tiger from "../../images/clients/tiger.png";
import deck from "../../images/clients/deck.png";





const Clients = () => (

<div>

    <div className="">

        <div className="container">
<div className="row">
    <div className="col-lg-12">
        <h3 className="head-style-clients">Clients We Work With</h3>
        <p className="sub-head-clients">A small selection of clients across various industries we have been fortunate enough to partner with.</p>
    </div>
</div>
        </div>



<div className="container" id="section_1">
<div class="row">
    <div class="col-md-3">
        <img src={school} className="img-fluid logo-client-1" alt="school"/>
    </div>
    <div class="col-md-3">
    <img src={thebulb} className="img-fluid logo-client-2" alt="thebulb"/>
    </div>
    <div class="col-md-3">
        <img src={inky} className="img-fluid logo-client-3" alt="inky"/>
    </div>
    <div class="col-md-3">
    <img src={innova} className="img-fluid logo-client-4" alt="innova"/>  
    </div>
 
   
    <div class="w-100"></div>
    <div class="col-md-3">
    <img src={tiger} className="img-fluid logo-client-5" alt="tiger"/>  
    </div>
    <div class="col-md-3">
    <img src={deck} className="img-fluid logo-client-2" alt="deck"/> 
    </div>

    <div class="col-md-3">
 
    </div>

    <div class="col-md-3">
    
    </div>
  </div>

</div>

    </div>

</div>

    );

export default Clients;
