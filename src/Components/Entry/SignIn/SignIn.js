/* -----Importing necessary stuff----- */

import React, { useState } from 'react';
import { login } from '../../../features/userSlice';

// Stylesheet import
import classes from './SignIn.module.css';

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
import Image from '../../../Assets/Images/EntryImg.png';
import google from '../../../Assets/Images/google.svg';
import facebook from '../../../Assets/Images/facebook.svg';

// Redux dispatch to dispatch user credentials
import { useDispatch } from 'react-redux';

// imports Modal component for forget password
import Modal from '../ForgetPassword/ForgetPassword';

/* ------- Function Sign In -------- */

function SignIn() {
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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
              <h2 className={classes.heading}>Welcome Back !</h2>
            </div>

            <div className={classes.socialLoginContainer}>
              <div>
                <div className={classes.socialLogin}>
                  <img
                    className={classes.socialLoginIcon}
                    src={google}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className={classes.socialLogin}>
                  {/* <FacebookIcon className={classes.socialLoginIcon} /> */}
                  {/* <p className={classes.socialLoginText}>Sign In with Facebook</p> */}
                  <img
                    className={classes.socialLoginIcon}
                    src={facebook}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <p className={`element-description ${classes.divider}`}>or</p>
            <div className={classes.formContainer}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={classes.formFieldsContainer}>
                  <div className={classes.formFields}>
                    <BlackTextField
                      label="Email or Username"
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
                      label=" Password"
                      variant="outlined"
                      type={showPassword ? 'text' : ' password'} // <-- This is where the magic happens
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputLabelProps={{
                        style: { fontSize: 14 },
                      }}
                      InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <div className={classes.moreFeatures}>
                    <div className={classes.checkbox}>
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <button
                      onClick={() => {
                        setModalOpen(true);
                      }}
                      className="element-color"
                    >Forgot password ?
                    
                    </button>
                  </div>

                  <button type="submit" className={classes.button}>
                    Sign In 
                  </button>
                  <span> 
                    New User? <Link to="/entry/SignUp/">Sign Up</Link>
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
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default SignIn;
