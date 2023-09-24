import React, {useState}  from 'react'

function Main() {

    const [counter,setCounter]=useState(0)
    function incrementCounter(){
        setCounter(counter+1)

    }
    function decrementCounter(){
        if(!counter==0){
            setCounter(counter-1)}

        
    }

    function reset(){
        setCounter(0)
    }
    
  return (
    <div className='m-3 p-5'>
    <div className='counter m-5 p-5'>
        <h3>Counter App</h3>
        <h1>{counter}</h1>
        <button style={{margin:'40px'}} onClick={incrementCounter} className='btn btn-primary'>Increment</button>
        <button style={{margin:'40px'}} onClick={decrementCounter} className='btn btn-danger'>Dncrement</button>
        <button style={{margin:'40px'}} onClick={reset} className='btn btn-dark'>Reset</button>
         </div> 
    </div>
    
  )
}

export default Main
