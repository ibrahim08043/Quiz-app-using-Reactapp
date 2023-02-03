import React from 'react'
import Box from '@mui/material/Box';
import "./App.css"
function Result(props) {
    const {mark ,correct ,uncorrect ,len , onClick } =props;
  return (
    <div >
<Box className='bg container'>



  <h4>YOUR MARKS: {mark}/{len}</h4>
  <h4>CORRECT ANSWER : {correct}</h4>
  <h4>INCORRECT ANSWER : {uncorrect}</h4>
  
</Box>

    </div>
  )
}

export default Result