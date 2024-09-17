import React,{useState} from 'react'

function Usestate() {
    const [count,setCount]=useState(0)
  return (
    <div style={{border:'2px solid',color:'black',padding:'20px',backgroundColor:'yellow'}}>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase</button><br/>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  );
}

export default Usestate;