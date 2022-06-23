const Validation = (values) => {
    console.log(values)
    let errors={};
    
    if(!values.email){
      errors.email="Please enter a valid Email ID."
     } else if(!/\S+@\S+/.test(values.email)){
       errors.email="Please enter a valid Email ID."
      }else{
        errors.email = ""
      }
      if(!values.password){
        errors.password="password is required."
      } else if(values.password.length < 5){
          errors.password="Password must be more than Five chracters."
      }else{
        errors.password = ""
      }
    
  
  
    return errors;
  }
  
export default Validation