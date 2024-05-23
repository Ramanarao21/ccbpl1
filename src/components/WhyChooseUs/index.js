import './index.css'
import { MdOutlineLight } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { RiShakeHandsFill } from "react-icons/ri";

const WhyChooseUs = () => {
    return (
     <div className='con-cls'>

        <div className='choose-hr'>
          <h1 className='chooseUs'>Why Choose Us ?</h1>
          <hr className='hr'/>
        </div>

    <div className='ChooseUs-Cards-Con'>
        <div className='ChooseUs-Card'>
           <MdOutlineLight className='choose-icons'/>
           <h className = "choose-card-head">Expert Faculty</h>
           <p className='choose-card-para'>Our qualified Faculty with significant practical experience guide students every step of the way.</p>
        </div>

        <div className='ChooseUs-Card'>
           <IoIosPeople className='choose-icons'/>
           <h className = "choose-card-head">Complete Success Package</h>
           <p className='choose-card-para'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
        </div>

        <div className='ChooseUs-Card'>
           <RiShakeHandsFill  className='choose-icons'/>
           <h className = "choose-card-head">Placements</h>
           <p className='choose-card-para'>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>
        </div>
    </div>

     </div>
    );
}
  
  export default  WhyChooseUs;
  