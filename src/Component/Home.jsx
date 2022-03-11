import React from 'react';
import image from "../image/bg1.jpg";
import Navbar from "./Navbar/Navbar";
import Solutions from "./Solutions";
import Asking from "./Asking";
import ConnectOnline from "./ConnectOnline";
import MeetExpert from "./MeetExpert";
import OurProduct from "./OurProduct";
import LoginPage from "./LoginPage";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWork from "./HowItWork";
import Product from "./Product";
import OurTeam from "./OurTeam";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>

<Router>
        <Navbar />
        <Routes>
        <Route extact path="/home" component={<Home/>} />
          <Route path="/howitwork" component={<HowItWork/>} />
          <Route path="/product" component={<Product/>} />
          <Route path="/ourteam" component={<OurTeam/>} />
          <Route path="/faq" component={<FAQ/>} />
        </Routes>
</Router>

    <div style={{ backgroundImage: `url(${image})` }} className="main">

       <div className='main-heading'>
          <h1 className='heading'>Lorem ipsum is simply 
          <br/>
          dummy text of the
          <br/> printing</h1>
          <h3 className='heading-two'>Lorem ipsum is simply dummy text of the printing and <br/> typesetting industry. Lerem ipsum has been <br/> the industry's standard dummy text</h3>
          <a href="#" className='heading-btn'>Start free online visit</a>
       </div>
     
    </div>
       <Solutions />
        <Asking />
        <ConnectOnline />
        <Asking />
        <OurProduct />
        <MeetExpert />
        <LoginPage />
        <Footer />
    </>
  )
}

export default Home