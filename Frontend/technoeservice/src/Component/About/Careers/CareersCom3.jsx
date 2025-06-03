import React from 'react';
import '../../../Style/About-css/Careers-css/CareerForm.css';

const JobApplicationForm = () => {
  return (
    <div className="CareerCom3-form-container">
      <form className="CareerCom3-application-form">
        <div className="CareerCom3-logo">GWI Techno-E-Services</div>
        <h2 className='job-app-text'>Job Application Form</h2>

        <div className="CareerCom3-form-group double">
          <input type="text" placeholder="First" />
          <input type="text" placeholder="Last" />
        </div>

        <div className="CareerCom3-form-group">
          <input type="email" placeholder="Email address" />
        </div>

        <div className="CareerCom3-form-group">
          <input type="tel" placeholder="Phone number" />
        </div>

        <div className="CareerCom3-form-group">
          <input type="text" placeholder="Street Address" />
          <div className="CareerCom3-form-group triple">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Region" />
            <input type="text" placeholder="Postal / Zip Code" />
          </div>
          <select>
            <option>India</option>
          </select>
        </div>

     <div className="CareerCom3-radio-group">
  <div><label><input type="radio" name="position" /> E-commerce Operations Manager</label></div>
  <div><label><input type="radio" name="position" /> E-Commerce Customer Service Specialist</label></div>
  <div><label><input type="radio" name="position" /> Digital Marketing</label></div>
  <div><label><input type="radio" name="position" /> Web Development</label></div>
  <div><label><input type="radio" name="position" /> Web Design</label></div>
  <div><label><input type="radio" name="position" /> SEO</label></div>
</div>


        <div className="CareerCom3-form-group">
          <label>Available Start Date</label>
          <input type="date" />
        </div>

        {/* <div className="CareerCom3-form-group">
          <label>Verification*</label>
          <div className="CareerCom3-recaptcha">[reCAPTCHA widget here]</div>
        </div> */}

        <button  className='CareerCom3-submit-btn' type="submit">SUBMIT FORM</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
