import { useState } from "react"
import Question from "./Question"
import data from './data'



const App = () =>{
const [questions, setQuestions] = useState(data)




    return(
      <>
      <div className="container">
      <div className="ques">
      {
        questions.map((questions) =>{
          return <Question {...questions}/>
        })
      }
      </div>
      </div>
      </>
    )
  }
  
  export default App