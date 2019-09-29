import React from'react'
import mail from '../../../images/icons/mail.svg'
import mobile from '../../../images/icons/cellphone.svg'
import phone from '../../../images/icons/phone.svg'

 const AgencyFooterMainFirst =()=>{
    return(
        <div className='first'>
            <div>
                <img  src={mail} alt=""/>
                <span style={{marginLeft:'9px'}}>work.of.future@gmail.com</span>
            </div>

            <div>
                <img style={{margin:'23px 0'}} src={phone} alt=""/>
                <span style={{marginLeft:'11px'}}>+38 (050) 789 24 98</span>
            </div>

            <div>
                <img src={mobile} alt=""/>
                <span style={{marginLeft:'14px'}}>+38 (095) 556 08 45</span>
            </div>
        </div>
    )
}

export default AgencyFooterMainFirst