import { useState } from "react"
function State()
{
    const[name,setName]=useState("");
    const[displayname,setDisplayName]=useState("");
    let[count,setCount]=useState(0);
    return(
        <>
        {/* <h1>Name is:{name}</h1> */}
        <label htmlFor="name">Name:
            <input type="text" id="name" name="name" onChange={()=>setName(event.target.value)}></input>
        </label><br></br><br></br>
        <label htmlFor="name">Name is:
            <input type="text" id="displayname" name="displayname" value={displayname}></input>
        </label>
        <button onClick={()=>setDisplayName(name)}>set name</button><br></br><br></br>
        <h1>Count is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button><br></br><br></br>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        </>
    )
}
export default State;