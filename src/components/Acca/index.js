import './index.css'
import { SlBookOpen } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { SiTestcafe } from "react-icons/si";


const Acca = () => {
    return (
     <div className='main-con'>

        <div className='con-1'>
            <div>
            <h1 className = "main-head">Become ACCA In 18 Months</h1>
            <p className = "main-para">Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), <br/> and get placed in top MNCs & Big4s.</p>
            </div>
         <div className='btns-con'>
             <div className='options-con'>
             <SlBookOpen className='icons'/>
             <div>
             <h>Levels</h>
             <p>Three</p>
             </div>
             </div>

            <div className='options-con'>
            <SlCalender className='icons'/> 
            <div>
            <h>Duration</h>
            <p>6-20 Months</p>
            </div>
            </div>

            <div className='options-con'>
            <SiTestcafe className='icons'/>
            <div>
            <h>Exams</h>
            <p>Quarterly (Online)</p>
            </div>
            </div>

        </div>
        <div>
            <button className='Brochure-btn' type = "button">Download Brochure</button>
            <button className='silver-btn' type = "button">Silver Learning Partner</button>
        </div>
        </div>


        <div className='Callback-Con'>
            <h1 className='Callback-head'>Aspiring to be an ACCA?</h1>
            <input type='text' placeholder='Name' className='input-box'/>
            <input type='text' placeholder='Email' className='input-box'/>
            <input type='text' placeholder='Mobile*' className='input-box'/>
            <button className='call-btn' type = "button">Submit</button>
        </div>

     </div>
    );
}
  
  export default Acca;
  