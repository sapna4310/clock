const Validation = (values) => {
    console.log(values)
    let errors={};
    
    if(!values.email){
      errors.email="email is required."
     } else if(!/\S+@\S+/.test(values.email)){
       errors.email="Email is invalid."
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