import React from 'react'
import pic from "../../images/cameraman.jpeg"
import Award from "../../images/award.png"
import "./About.css"
function About() {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card-bg">

        </div>
        <div className="a-card">
          <img
            src="https://tse4.explicit.bing.net/th?id=OIP.IsDB2y6YeUlfS7Yy0960zAHaEK&pid=Api&P=0&w=302&h=170" alt=""
            alt=""
            className='a-img'
          />
        </div>
      </div>
      <div className="a-right">
        <div>
          <h1 className='a-title-a'>Experience/ Extra-curricular </h1>
          <div>
            <div className="org-name">
              <h4 className='org-title'>Social Welfare and Developement </h4>
              <h3 className='org-role'>Scholarship co-ordinator</h3>
              <p className='org-descr'>
                In this student committie of vit pune , my responsibility is find the scholarship
                for the all the four year undergraduate students , and make them aware about it .
                solve the doubts of that students and contact with scholarship provider if students
                are facing some probelm in filling (private) scholarship.
              </p>
            </div>
            <div className="org-name">
              <h4 className='org-title'>TRF</h4>
              <h3 className='org-role'>Trainne-student</h3>
              <p className='org-descr'>
                In this student club of vit pune , I was the student . in the workshop organized by the
                trf i have explored many domain like web, flutter , spark , ar vr etc . which helps me to
                to choose domain for software Developement.
              </p>
            </div>
            <div className="org-name">
              <h4 className='org-title'>Acting team of SMS JAIN HIGH SCHOL,JALNA</h4>
              <h3 className='org-role'>Actor-Doctor</h3>
              <p className='org-descr'>
                I had participated in the acting compeition . Our team had ranked 2nd in the district 
                in these competition. 
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default About