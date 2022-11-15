import React from 'react';
import './about.css';
function About(){
  return(
    
    <div className="section">
      <div className="container">
        
        <div className="about">
          <h1 className="mainheading">Meet The Team</h1> 
            
            <br></br>
            <h2>Vision</h2>
            <p>Build a predictive analytics model for the investors 
              or offer practical analytical solutions to this issue. <br></br>
              If the stock market does crash in 2022, a confidence score would
              be provided along with an estimated time frame for when it might happen.</p>
            <br></br>
            <h2>Team members</h2>
            <div className="card">

              <div className="image">
              <img src="./pattern.jpg"></img>
                </div>
            <div className="title">
                <h1>Mayank Joshi</h1>
            </div>
            <div className="des">
              <h4>Full Stack Developer</h4>
              <p>Student</p>
              
              
            </div>
            </div>
            {/* <!--cards --> */}
            <div className="card">

              <div className="image">
              <img src="./pattern.jpg"></img>

              
              </div>
              <div className="title">
                <h1>Meetul Agarwal </h1>
              </div>
              <div className="des">
                <h4>AI Developer</h4>
                <p>Student</p>
                
            </div>
            </div>
            {/* {!--cards--!} */}
            <div className="card">

            <div className ="image">
              <img src="./pattern.jpg"/>
            </div>
            <div className="title">
               <h1> Mehak Gupta</h1>
            </div>
            <div className="des">
              <h4>Web Designer</h4>
              <p>Student</p>
            </div>
            </div>
              {/* <!--cards --> */}
              <div className="card">

            <div className="image">
              <img src="./pattern.jpg"></img>
            </div>
            <div className="title">
               <h1> Yashvardhan</h1>
            </div>
            <div className="des">
              <h4>Web Designer</h4>
              <p>Student</p>
            </div>
            </div>
            {/* {--cards--} */}
            <div className="card">

            <div className="image">
            <img src="./pattern.jpg"></img>

            </div>
            <div className="title">
               <h1> Vedant Patel</h1>
            </div>
            <div className="des">
              <h4>Web Designer</h4>
                <p>Student</p>
            </div>
            </div>
            {/* {--cards--} */}
            <div className="card">

            <div className="image">
            <img src="./pattern.jpg"></img>

            </div>
            <div className="title">
               <h1> Surendra Solanki</h1>
            </div>
            <div className="des">
              <h4>Mentor</h4>
                <p>Sr. faculty IT iNurture ,Sage Indore</p>
                
            </div>
            </div>
            {/* {--cards--} */}
            <div className="card">

            <div className="image">
            <img src="./pattern.jpg"></img>

            </div>
            <div className="title">
               <h1> Sandeep Wadekar</h1>
            </div>
            <div className="des">
              <h4>Co-Mentor</h4>
                <p>Sr. faculty IT iNurture ,Sage Indore</p>
            </div>
            </div>
            
            </div>
          </div>
        </div>
        
)
  }
export default About;
 