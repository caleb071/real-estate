import React from "react";
import { Link } from 'react-router-dom';
import './about.css'

function about(){
    return (
<>
 <div className="navbar">

    <div className="nav-links">
        <Link to="/home">
          <button>Home</button>
        </Link>
      
       <Link to="/Properties">
          <button>Properties</button>
        </Link>
        
         <Link to="/about">
          <button>about</button>
        </Link>
        
          <Link to="/contact">
          <button>contact</button>
        </Link>

</div>
</div>
<div className="sectiona">
<h3>About us</h3>
<div className="Intro">
    <p>Welcome to <span>Calebian Investment</span>, where technology meets trust. 
        We're redefining the real estate experience by offering smart, 
        streamlined solutions for modern homebuyers, renters, and sellers. 
        From virtual tours to instant valuations, our tools are built for 
        convenience — while our team of dedicated professionals ensures a personal,
         human touch at every step.

</p>
</div>

</div>
<hr></hr>
<div className="sectionb">
<h3>Mission</h3>
<div className="Intro">
    <p>
         To simplify property ownership by connecting clients with affordable, 
         secure, and quality real estate solutions.
</p>
</div>

</div>
<hr></hr>

<div className="sectionc">
<h2>Why Choose Us?</h2>
      <ul>
        <li>✅ Over 10 years of real estate experience</li>
        <li>✅ Friendly, licensed agents</li>
        <li>✅ 1000+ happy homeowners</li>
        <li>✅ Fast property listings and updates</li>
      </ul>
</div>
<hr></hr>

 <div className='footer'>
          <p>© 2025 All Rights Reserved</p>
        </div>
   
</>

    );
}
export default about;