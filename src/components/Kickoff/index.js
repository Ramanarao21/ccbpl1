import './index.css'
import React, { useState } from 'react';


const Kickoff = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleRequestCallback = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
     <div className='Kickoff-con'>

        <div className='con-1'>
            <div>
            <h1 className = "kick-main-head">Kick Off ACCA Prep Journey With IndigoLearn </h1>
            <p className = "kick-main-para">Sign In and get Instant access to our Free Course</p>
            </div>
            <div>
                    <button className='sign-btn' type="button" onClick={handleRequestCallback}>Request Call Back</button>
                </div>
        </div>

        {showPopup && (
                <div className='popup-container'>
                    <div className='popup-content'>
                    <span className='close' onClick={handleClosePopup}>&times;</span>
                        <p>We will get in touch with you shortly.</p>
                    </div>
                </div>
            )}


        <div className='kick-Callback-Con'>
            <h1 className='kick-Callback-head'>Aspiring to be an ACCA?</h1>
            <input type='text' placeholder='Name' className='kick-input-box'/>
            <input type='text' placeholder='Email' className='kick-input-box'/>
            <input type='text' placeholder='Mobile*' className='kick-input-box'/>
            <button className='kick-call-btn' type = "button">Submit</button>
        </div>

     </div>
    );
}
  
  export default Kickoff;
  