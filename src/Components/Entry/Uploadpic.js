import React from 'react'
import  './Uploadpic.css';
function Uploadpic() {
  return (
    <div className='main'>
        <h2>Upload a profile picture</h2>
        <br></br>
        <div className='main1'>
            
        <i class="fa fa-user-plus"></i>
        <br></br>
        
        <p>only image with a size Lower than 3MB are allowed</p>
        <button>Back</button>  <button>Next</button>
        </div>
    </div>
  )
}

export default Uploadpic