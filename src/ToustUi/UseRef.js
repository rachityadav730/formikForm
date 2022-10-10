import React,{useRef,useState,useEffect} from 'react'

const UseRef =()=>{

    const [inputEle,setInputElement] =useState("")

    const inputElement =useRef("")

    useEffect(()=>{
        console.log("useEffect in useRef")
    },[])


    const buttonOnclick =() =>{
        console.log("buttonclick",inputElement.current)
    }

    function withoutFatArrayFunction () {

        inputElement.current.value = "yadav"
        console.log("value in withoutarrayfunction",inputElement)
    }

    const focusFunction = () =>{
        console.log("method runs we focus on focus function")
    }

    const Blurmethod =() =>{
        console.log("it runs when we call onbliur method")
    }


    return( 
    <>
    <h1>
       Use ref Hook
    </h1>
    <label>
        Name
    </label>
    <input type ="text" onFocus={focusFunction} onBlur= {Blurmethod} ref={inputElement}/>
 <br></br>
 <br></br>
 
    <button onClick={buttonOnclick}>Submit</button>
    <button onClick={withoutFatArrayFunction}>Click me</button>
    
    </>

    )
}

export default UseRef