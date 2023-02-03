import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import "./App.css"
import Button from '@mui/material/Button';

// import Button from './Button';
import Option from './Option';
import Result from './Result';




function App() {
  const [indexnumber , setindexnumber] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [mark, setmark] = useState(0);
  const [correct, setcorrect] = useState(0);
  const [uncorrect, setuncorrect] = useState(0);
  const [result, setshowresult] = useState(false);

  const [quizdata , setquestion] = useState({
QuizName : "React Quiz",
TotalMarks :60, 
perQuestion : 10,

question:[
    {
        question: "Html Stands For _______",
        options: [
            "Hyper  Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _________",
        options: [
            "Hypertext markup language",
            "Java",
            "Ram",
            "Casecading Style Sheet",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ]
  })
  const {question } = quizdata ;
  function getdata(e){
    console.log(e)
    console.log(question[indexnumber].correctAns)
    
    
    if(e === question[indexnumber].correctAns ){
      setmark(mark + 10 )
      console.log(mark)
    }if(e === question[indexnumber].correctAns){
      setcorrect (correct + 1)
    }
    if(e != question[indexnumber].correctAns){
      setuncorrect (uncorrect + 1)
    }
    setindexnumber(indexnumber +1)
    if(indexnumber +1 == question.length){
      setindexnumber(indexnumber )
      alert("Please Check your result")
  }}



  function showresult() {

    if (indexnumber >= 5) {
      if (result == false) {
        setshowresult(true)

      } else {
        setshowresult(false)
      }
    } else {
      alert("Please Attempte the all Question")
    }
  }

  return (
    <>
    
      <Box className='bg-dark color container mt-2 ' >
  <div className='d-flex'>
<Typography className='Quiz' variant='h3'>{quizdata.QuizName}</Typography>

<Typography className=' matgin2 color2'  variant='p'>Question no {indexnumber + 1}/{quizdata.question.length}  </Typography>
</div>
<br/>
<div className='d-flex'>

<Typography variant='h5' className='totalquestion'>Total Question: {quizdata.TotalMarks}</Typography>
<Typography className=' matgin ' variant='h6'>Quiz Marks {quizdata.perQuestion} </Typography>



</div>


  </Box>

<Box className="bg-light rounded shadow">
  <Typography variant='h5' className='question1' >QUESTION:</Typography>
  <Typography variant='h2' className='question' >{question[indexnumber].question}</Typography>
  </Box> 
  <br/>
  
  <Box  className='side container'>
      <Option  onClick={(e) => {
        
        }  } 
        data={question[indexnumber].options} data1={getdata}></Option>
<br/>
<br/>
<br/>
<br/>
         
         </Box>
         <div >
        
       <Result on mark={mark} correct={correct} len={quizdata.TotalMarks} uncorrect={uncorrect} />
        
      </div>
   
        
         {/* <h1>{uncorrect}</h1> */}

</>
)
}

export default App