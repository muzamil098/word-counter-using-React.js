import React, {useState} from "react";
const TextForm = () => {

    const [text, setText] = useState("")
    
    const onChangeHandler = (event) => {
        let newtext = event.target.value
        setText(newtext)
    };
    const toUpperCase = () => { 
        console.log("This is upper case");
    }
    const toLowerCase = () => {
        console.log("This is lower case");
    }

  return (
    <div>
      <h1>Enter Your Paragraph</h1>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" rows={8} value={text} onChange={onChangeHandler} ></textarea>
      </div>
      <button className="btn btn-primary mt-2 mx-2" onClick={toUpperCase}>Convert to Uppercase</button>
      <button className="btn btn-primary mt-2 mx-2" onClick={toLowerCase}>Convert to Uppercase</button>

        <div className="container">
            <h2>Total Characters are </h2>
            <p>{text.length}</p>
            <h2>Total Words are </h2>
            <p>{text.split(" ").length}</p>
            <h2>Final Text to read is....</h2>
            <p>{text}</p>
        </div>

    </div>
    
  );
};
export default TextForm;
