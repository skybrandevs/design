import React from "react";
import up from "../../images/up.svg";



const Footer =() => (

<div>

<div className="bac-whitesmoke-footer">
    
<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="same-line">
                <a href="#section_2">
            <p className="xx">WHO WE ARE</p>
            </a>
            <a href="#section_how">
            <p className="xx">HOW WE WORK</p>
            </a>
            <a href="#">
            <p className="xx">CONTACT US</p>
            </a>
            </div>
        </div>
    </div>

</div>


<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="same-line">
            <p className="xx-2">THE DEZIGNS HUB, LEKKI, LAGOS</p>
            <p className="xx-2">+(234) 808 152 1302</p>
            <p className="xx-2">hello@dezignshub.com</p>
            </div>
        </div>
    </div>
</div>


<div className="container">
    <div className="row">
        <div className="col-lg-12">
            <p className="copy-right">&#169;2020 Dezignshub | All rights reserved.</p>
        
        </div>
    </div>
</div>


<div className="container">
    <div className="divider"></div>
    <div className="row">
        <div className="col-lg-12">
          
        <p className="float-left social">BEHANCE</p>
            <p className="float-left social">INSTAGRAM</p>
            <a href="#top">
            <p className="float-right up">scroll up <img src={up} className="img-fluid"/></p>
            </a>
        
        </div>
    </div>
</div>




</div>
{/**main closing div */}

</div>

);

export default Footer;