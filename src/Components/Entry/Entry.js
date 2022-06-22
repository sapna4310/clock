import React from 'react';

// React Router necessary imports
import { Routes, Route } from 'react-router-dom';

// Stylesheet import
import classes from './Entry.module.css';

// SignIn component import
import SignIn from './SignIn/SignIn';

// SignUp component import
import SignUp from './SignUp/SignUp';

// message 
import Message from './Message';
//signup2 component import
import Signup2 from './Signup2';
//new passwords poupup
import Createnewpassword from './Createnewpassword';
//upload profile picture
import Uploadpic from './Uploadpic';




function Entry() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/message" element={<Message />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/createpass" element={<Createnewpassword />} />
      <Route path="/uploadpic" element={<Uploadpic />} />
    </Routes>
  );
}

export default Entry;
