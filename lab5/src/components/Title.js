import React from 'react'

const Title = ({title, setTitle}) => {
  
    const changeTheTitle=()=>{
        setTitle("new title")
    }

    return (
    <div>
        
      <p>{title}</p>
      <button onClick={()=>changeTheTitle()}>click</button>
    </div>
  )
}

export default Title
