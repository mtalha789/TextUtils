import React, { useState } from 'react'


export default function Editor(props) {
  let [text, settext] = useState('')
  const changetext = (event) => {
    let newtext = event.target.value;
    // console.log(newtext);
    settext(newtext)
  }
  const removextraspaces=()=>{
    if(text===""){
      props.showalert('Please enter some text','warning')
      return
    }
    let newtext=text.split(/[ ]+/)
    console.log(newtext)
    text=newtext.join(" ")
    settext(text)
  }
  const uppercase = () => {
    if(text===""){
      props.showalert('Please enter some text','warning')
      return
    }
    let newtext = text.toUpperCase()
    settext(newtext)
    props.showalert('Converted to upper case','success')
  }
  const lowercase = () => {
    if(text===""){
      props.showalert('Please enter some text','warning')
      return
    }
    let newtext = text.toLowerCase()
    settext(newtext)
    props.showalert('Converted to lower case','success')
  }
  
  const clear = () => {
    let newtext = "";
    settext(newtext)
    props.showalert('Cleared','success')
  }
  const inverse = () => {
    if(text===""){
      props.showalert('Please enter some text','warning')
      return
    }
    let newtext = text.split("").reverse().join("");     //string splitted to array,reversed array,rejoin array to string 
    settext(newtext)
    props.showalert('Inversed','success')
  }
  const copy=()=>{
    if(text===""){
      props.showalert('Please enter some text','warning')
      return
    }
    navigator.clipboard.writeText(text)
    props.showalert('Copied to clipboard','success')
  } 

  return (

    <>
      <div className="container my-2">
        <h1>Text Editor</h1>
        {/* <div className="mb-2">
  <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
</div> */}
        <div className="mb-2">
          <label htmlFor="exampleFormControlTextarea2" className="form-label">Enter Text To Edit</label>
          <textarea className="form-control" id="textbox" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#d2b8b84d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={changetext} rows="8"></textarea>
          <button className='btn btn-primary mx-2 my-2' onClick={uppercase}>Upper Case</button>
          <button className='btn btn-primary my-2 mx-2' onClick={lowercase}>Lower Case</button>
          <button className='btn btn-primary mx-2 my-2' onClick={inverse}>Inverse</button>
          <button className='btn btn-primary mx-2 my-2' onClick={clear}>Clear</button>
          <button className='btn btn-primary mx-2 my-2' onClick={copy}>Copy To Clipboard</button>
          <button className='btn btn-primary mx-2 my-2' onClick={removextraspaces}>Remove extra Spaces</button>
          <h2>Text Summary</h2>
          <p>Total Words={text.split(/\s/).filter((Element)=>{return Element.length!==0}).length} and Total Characters={text.length}</p>
          <p>Words={text.split(/[^\s]+/g)}</p>
        </div>
      </div>
    </>
  )
}
