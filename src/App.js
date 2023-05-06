import { useState } from "react"
import informations from './components/data'
import Item from './components/item'
const App = () =>{

  const [tests, setTests] = useState(informations)
    return(
      <>
      <div className="container">
      {
        tests.map((info, index) =>{
          return <Item key={index} {...info} />
        })
      }
  
      </div>
      </>
    )
  }
  
  export default App