import React from "react"
import Header from "./Header"
import Body from "./Body"
import  data from "../data"


function App() {
  const placeDetails = data.map(item => {
     return(
      <Body 
         key = {item.id}
         item=  {item}
      />
     ) 
  })
  

  return (
    <div>
       <Header />
       { placeDetails}
    </div>
  )
}

export default App
