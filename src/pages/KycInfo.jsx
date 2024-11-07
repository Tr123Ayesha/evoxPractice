import './kycInfo.css';
import React from 'react';
import { useState } from 'react';
import tickCircle from '../assets/tick-circle.svg';
import RecentCircle from '../assets/recentCircle.svg';
import emptyCircle from '../assets/emptyCircle.svg';
import exportIcon from '../assets/exportIcon.svg';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
const KycInfo =()=> {
    const [selectedStep, setSelectedStep] = useState(1);
    const [phone, setPhone] = useState("");
    const steps = [
        { id: 1, text: "Step 1" },
        { id: 2, text: "Step 2" },
        { id: 3, text: "Step 3" },
        { id: 4, text: "Step 4" },
      ];
    
      const getIcon = (stepId) => {
        if (stepId < selectedStep) return tickCircle;
        if (stepId === selectedStep) return RecentCircle;
        return emptyCircle ;
      };
    
      const getTextColor = (stepId) => {
        return stepId <= selectedStep ? "#139ed5" : "#000000";
      };
      const handleNextStep = () => {
        setSelectedStep((prevStep) => prevStep + 1);
      };
      const handlePrevStep = () => {
        setSelectedStep((currentStep) => currentStep - 1);
      };
    return(
<div className="KYCInfo">
<p className='kycInfo'>KYC Info</p>
<p className='steps'>Steps to complete KYC</p>
<div className='InfoForm'>
    <div className='topdiv'>
    <div className="property__developer_step1_container">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className="property__developer_step1_container-1"
                  onClick={() => setSelectedStep(step.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={getIcon(step.id)} alt={`icon for ${step.text}`} />
                  <p
                    className="investor__step1__text"
                    style={{ color: getTextColor(step.id) }}
                  >
                    {step.text}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className='divider'></div>
                )}
              </React.Fragment>
            ))}
     </div>
    </div>
<div>
{selectedStep === 1 ? (
            <>
              <div className="form1">
              <div class="form-group">
    <p>Full Name</p>
    <input type="text" placeholder="Andrea" />
</div>
<div class="form-group">
    <p>Email</p>
    <input type="text" placeholder="andreasimmons@gmail.com" />
</div>
<div class="form-group1">
    <p>National ID/Passport/ Driving License</p>
    <input type="text" placeholder="Enter National ID/Passport/ Driving License" />
</div>

<div class="form-group1">
    <p>Phone Number</p>
    <PhoneInput
    className="phone-input-field"
    placeholder="+1 408 XXX XXXX"
    country="us"
    value={phone}
    onChange={setPhone}
    inputClass="phone-input"
    containerClass="phone-container"
    buttonClass="flag-button"
    dropdownClass="phone-dropdown"
    preferredCountries={["us", "gb", "ca", "au"]}
/>

</div>
   
              </div>
              <button className="next__steps__button" onClick={handleNextStep}>
                Next Step
              </button>
            </>
          ) : 
          selectedStep === 2 ? (
            <>
              <>
              <div className="form1">
              <div class="form-group1">
    <p>Company Name</p>
    <input type="text" placeholder="Enter Company Name" />
</div>
<div class="form-group1">
    <p>Registration Number</p>
    <input type="text" placeholder="Enter Registration Number" />
</div>
<div class="form-group1">
    <p>Company Address</p>
    <input type="text" placeholder="Enter Company Address" />
</div>

<div class="form-group1">
    <p>URL</p>
    <input type="text" placeholder="Enter URL" />
</div>
<div className="proof">
  <p>Proof of Incorporation</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>

<div class="form-group1">
    <p>Tax Identification Number</p>
    <input type="text" placeholder="Enter TIN" />
</div>

   
              </div>
                <div className="step_3_button_container">
                  <button
                    className="step_3_back_button"
                    onClick={handlePrevStep}
                  >
                    Back
                  </button>
                  <button
                    className="next__steps__button2"
                    onClick={handleNextStep}
                  >
                    Next Step
                  </button>
                </div>
            
              </>
            </>
          ) :
           selectedStep === 3 ? (
            <>
                 <div className="form1">

<div className="proof">
  <p>Company Director Name</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>

<div className="proof">
  <p>Director ID</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>


<div className="proof">
  <p>Phone Number</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>

<div className="proof">
  <p>Business License/Certificate</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>

<div className="proof">
  <p>Ultimate Beneficial Owners</p>
  <div className="ProofIncorporationcontainer">
    <input 
      type="file"
      className="Incorporationplaceholder"
      id="file-upload" 
      placeholder="Upload Document"
      style={{ display: 'none' }} // Hide the file input
    />
    <label htmlFor="file-upload" className="file-upload-label">
        <div className='inside'>
      <span className='uploaddoc'>Upload Document</span>
      <img
        className="icon"
        src={exportIcon}
        alt="upload icon"
        style={{ marginRight: '24px', cursor: 'pointer' }}
      />
      </div>
    </label>
  </div>
</div>


   
              </div>
                <div className="step_3_button_container">
                  <button
                    className="step_3_back_button"
                    onClick={handlePrevStep}
                  >
                    Back
                  </button>
                  <button
                    className="next__steps__button2"
                    onClick={handleNextStep}
                  >
                    Next Step
                  </button>
                </div>
              
            </>
          ) : 
          (
          <>
 <div className="form1">
              <div class="form-group">
    <p>Full Name</p>
    <input type="text" placeholder="Andrea" />
</div>
<div class="form-group">
    <p>National ID/Passport/ Driving License</p>
    <input type="text" placeholder="123456789" />
</div>
<div class="form-group1">
    <p>Phone Number</p>
    <PhoneInput
    className="phone-input-field"
    placeholder="+1 408 XXX XXXX"
    country="us"
    value={phone}
    onChange={setPhone}
    inputClass="phone-input"
    containerClass="phone-container"
    buttonClass="flag-button"
    dropdownClass="phone-dropdown"
    preferredCountries={["us", "gb", "ca", "au"]}
/>

</div>
<div class="form-group">
    <p>Your Email</p>
    <input type="text" placeholder="johnwilliams@gmail.com" />
</div>
<div class="form-group">
    <p>Company Name</p>
    <input type="text" placeholder="Evox" />
</div>
<div class="form-group">
    <p>Registration Number</p>
    <input type="text" placeholder="123456789" />
</div>
<div class="form-group">
    <p>Company Address</p>
    <input type="text" placeholder="Paris, France" />
</div>
<div class="form-group">
    <p>URL</p>
    <input type="text" placeholder="evoxnetwork.io" />
</div>
<div class="form-group">
    <p>Proof of Incorporation</p>
    <input type="text" placeholder="POI.doc" />
</div>
<div class="form-group">
    <p>Tax Identification Number</p>
    <input type="text" placeholder="1234" />
</div>
<div class="form-group">
    <p>Company Director Name</p>
    <input type="text" placeholder="POI.doc" />
</div>
<div class="form-group">
    <p>Director ID</p>
    <input type="text" placeholder="POI.doc" />
</div>
<div class="form-group">
    <p>Phone Number</p>
    <input type="text" placeholder="POI.doc" />
</div>
<div class="form-group">
    <p>Business License/Certificate</p>
    <input type="text" placeholder="POI.doc" />
</div>
<div class="form-group">
    <p>Ultimate Beneficial Owners</p>
    <input type="text" placeholder="POI.doc" />
</div>
   
              </div>
              <button className="next__steps__button" onClick={handleNextStep}>
              Submit
              </button>
          </>
          )}
</div>
</div>
</div>

    );
};
export default KycInfo;