import "./Intro.css";
import React from 'react';
import Me from "../../images/me.png"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">

        <div className="name">
          <div className="name-wrapper">
            <h3 id = "name">Hello , My name is</h3>
            <h1 className="i-name">Krushna A. Durole</h1>
            <div className="work-prof">
              <div className="work-prof-wrapper">
                <div className="i-work-prof-item">C++ programmer</div> <br />
                <div className="i-work-prof-item">Elex & Telecomm. Student</div> <br />
                <div className="i-work-prof-item">Python,java basic programmer</div> <br />
                <div className="i-work-prof-item">Front End web Developer</div> <br />
                <div className="i-work-prof-item">SWD-scholarship-co-ordinator</div> <br />
              </div>
            </div>
            {/* <fieldset> */}
            <br /><br /><br />
            <p className="sm-i">
              I am Electronics and Telecommunicaiton Enginner,pursuing
              Btech Degree at <span><a href="https://www.vit.edu/">Vishwakarma Institute of Technology, pune</a></span>
              My area of interst are programming , web developement and
              {/* <div className="i-field"> */}
              Electronics and Telecommunication
              {/* </div> .  */}
            </p>
            {/* </fieldset> */}

          </div>

        </div>

      </div>
      <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        stroke="black"
        className="i-scroll"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="scroll">
          <path
            id="Vector"
            d="M40.5 15L34.5 9L28.5 15"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M28.5 24L34.5 30L40.5 24"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="Group">
            <path
              id="Vector_3"
              d="M9 37.5H60"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            id="Vector_4"
            d="M34.5 27V9"
            stroke-width="2.9895"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="Group_2">
            <path
              id="Vector_5"
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </svg>
      <div className="i-right">
        <div className="i-bg"></div>
        <img className="i-right-pic" src={Me} alt="" />
      </div>
    </div>
  )
}
export default Intro
