import { Icon } from "@mui/material";
import { color } from "@mui/system";
import {FiAlertCircle} from 'react-icons/fi';

const Validation = (values) => {
    console.log(values)
    let errors={};
    
    if(!values.email){
      errors.email= <p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Please enter a valid Email ID.</p>
     } else if(!/\S+@\S+./.test(values.email)){
       errors.email=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Please enter a valid Email ID.</p>
      }else{
        errors.email = ""
      }
      if(!values.password){
        errors.password=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Please create a valid password.</p>
      } else if(values.password.length < 8){
          errors.password=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Password must be atleast 8 characters.</p>
      }else if(!(/[a-z]/.test(values.password) && /[A-Z]/.test(values.password))  ){
        errors.password=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Password must have atleast 1 capital letter.</p>
        
      }else if(!/\d/.test(values.password)){
        errors.password=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Password must have atleast 1 number.</p>
      }else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(values.password)){
        errors.password=<p className="team" style={{color:"red", marginTop:"-4%", fontSize:"14px",marginLeft:"1%"}}><FiAlertCircle  size="16" /> Password must have atleast 1 special character.</p>
      }else{
        errors.password = ""
      }
      
       



    
  
  
    return errors;
  }
  
export default Validation