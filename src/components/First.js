import React from 'react'
import './first.css'

function First() {
  return (
    <>
    <div className='aa'>First</div>
    <form>
        <label for="name">Name: </label>
        <input type="text" id="name"></input><br></br>
        <label for="age">Age: </label>
        <input type="number" id="age"></input>
        <label for="e-mail">E-MAIL:</label>
        <input type="text" id="e-mail"></input>
            <br></br>
            <label for="pwd">PASSWORD:</label>
            <input type="text" id="pwd" ></input>
            <br></br>
            <label for="dob">DATE OF BIRTH</label>
            <input type="text" id="dob" ></input>
            <br></br>
            <label for="gen">Gender:</label>
            <input type="text" id="gen" ></input>
            <br></br>
            <label for="mob">Mobile</label>
            <input type="text" id="mob" ></input><br></br>
           
           
    </form>
    </>
    

  )
}

export default First