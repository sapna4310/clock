/* -----Importing necessary stuff----- */

import React, { useState } from 'react';
import { login } from '../../features/userSlice';

// Stylesheet import
import classes from './SignUp2.module.css';

// TextField import from Material UI
import { TextField } from '@mui/material';
import styled from 'styled-components';

// Link import
import { Link } from 'react-router-dom';

// imports for password field
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// imports image from /assets/images
import Image from '../../Assets/Images/EntryImg.png';
import google from '../../Assets/Images/google.svg';
import facebook from '../../Assets/Images/facebook.svg';

// Redux dispatch to dispatch user credentials
import { useDispatch } from 'react-redux';

// imports Modal component for forget password

import SignUp from './SignUp/SignUp';

/* ------- Function Sign In -------- */

function Signup2() {
  //For modal open and close
  const [modalOpen, setModalOpen] = useState(false);

  //To get users credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redux implementation
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  // For password field
 

  //TextField styles
  const BlackTextField = styled(TextField)`
    & label.Mui-focused {
      color: rgba(51, 51, 51, 1);
    
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: rgba(51, 51, 51, 1);
      }
    }
  `;

  

  /* -----Return to DOM------ */
  return (
    <div className={classes.screenContainer}>
      {/* <nav className={classes.navContainer}>
        <div className={classes.leftNavContainer}>
          <h1>Srijcon</h1>
          <p>
            Srijcon connects Makers and Innovative minds to come together and
            share inspiring creations and ideas to impact the world.
          </p>
        </div>
        <span>
          New User? <Link to="/entry/signup">Sign up</Link>
        </span>
      </nav> */}
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <nav className={classes.navContainer}>
            <div className={classes.leftNavContainer}>
              <h1>Srijcon</h1>
              <p>
                We connect Makers and Innovative minds to come together and
                share inspiring creations and ideas to impact the world.
              </p>
            </div>
          </nav>
          <img src={Image} alt="" />
        </div>
        <div className={classes.container}>
          <div className={classes.rightContainer}>
            <div className={classes.rightContainerDesc}>
              <h2 className={classes.heading}> User Details</h2>
            </div>

            <div className={classes.socialLoginContainer}>
              
              <div>
                <div className={classes.socialLogin}>
                  {/* <FacebookIcon className={classes.socialLoginIcon} /> */}
                  {/* <p className={classes.socialLoginText}>Sign In with Facebook</p> */}
                  
                </div>
              </div>
            </div>

            
            <div className={classes.formContainer}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={classes.formFieldsContainer}>
                  <div className={classes.formFields}>
                    <BlackTextField
                      label="First Name"
                      variant="outlined"
                      value={email}
                      
                      onChange={(e) => setEmail(e.target.value)}
                    
                      sx={{ width: 350 }}
                  
                      InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                      }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />

<BlackTextField
                      label="Last Name"
                      variant="outlined"
                      value={email}
                      
                      onChange={(e) => setEmail(e.target.value)}
                    
                      sx={{ width: 350 }}
                  
                      InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                      }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />

<BlackTextField
                      label="Create Username"
                      variant="outlined"
                      value={email}
                      
                      onChange={(e) => setEmail(e.target.value)}
                    
                      sx={{ width: 350 }}
                  
                      InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                      }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                  </div>

                  <button type="submit" className={classes.button}>
                    Next
                  </button>
                  <span>
                <Link to="/entry/"></Link>
                  </span>
                  {/* <div className={classes.signInFormErrorMsg}>Hello</div> */}
                </div>
              </form>

              {/* <div className={classes.signUpLink}>
                <p>
                  Don't have an account?{' '}
                  <span>
                    <Link exact to="/entry/signUp" className={classes.link}>
                      SignUp
                    </Link>
                  </span>{' '}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Signup2;
