import './index.css'


const LearnInAcca = () => {
    return (
     <div className='container-cls'>

        <div className='Learnings-hr'>
          <h1 className='Learnings'>What Will You Learn In ACCA ?</h1>
          <hr className='hr'/>
        </div>

    <div className='Learnings-Acca-Con'>
        <div className='Learnings-Card'>
           <h className = "Learnings-head">Knowledge Level</h>
           <div>
           <ul className='list-items'>
            <li>Business and Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
           </ul>
           </div>
           <h className = "Learnings-head">3 papers</h>
        </div>

        <div className='Learnings-Card'>
           
           <h className = "Learnings-head">Skill Level</h>
           <div>
           <ul className='list-items'>
            <li>Corporate and Business Law (LW)</li>
            <li>Performance Management (PM)</li>
            <li>Taxation (TX)</li>
           </ul>
           </div>
           <h className = "Learnings-head">6 papers</h>
        </div>

        <div className='Learnings-Card'>
           <h className = "Learnings-head">Professional Level</h>
           <div>
           <ul className='list-items'>
            <li>SBL - Strategic Business Leader</li>
            <li>SBR - Strategic Business Reporting</li>
            <li>Advanced Taxation (ATX)</li>
           </ul>
           </div>
           <h className = "Learnings-head">4 papers</h>
        </div>
    </div>

     </div>
    );
}
  
  export default  LearnInAcca ;
  