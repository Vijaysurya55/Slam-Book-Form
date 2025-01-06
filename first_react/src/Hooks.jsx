// useState and useEffect, useRef, useContext, use Memo

// import React, { useState, useEffect } from 'react';
// const Hooks=()=>{
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("Count value updated");

//         return(()=>{
//             console.log("Code cleanup");
//         })
//     },[count])
//     return(
        
//             <div>
            
//             <h1>You clicked:{count} times</h1>
//             <button onClick={()=>setCount(count+1)}>Increase</button>
//             <button onClick={()=>setCount(count-1)}>Decrease</button>
//             </div>
//     )
// }

// import React, { useState, useRef} from 'react';
// const Hooks=()=>{
//     const [count, setCount] = useState(0);
//     let countRef = useRef(0);
//     let increment=()=>{
//         setCount(count+1); //without this the component will not re-render and the ref will not get updated only it tracks the value and prints 0 only
//         countRef.current = countRef.current + 1;
//         console.log("State:"+count)
//         console.log("Ref:"+countRef.current);
//     }
//     return(
        
//             <div>            
//             {/* <h1>You clicked:{count} times</h1> */}
//             <h1>You clicked:{countRef.current} times</h1>
//             <button onClick={increment}>Increase</button>
//             </div>
//     )
// }



import React, { useState, useRef} from 'react';
const Hooks=()=>{
    const[input, setInput] = useState("");
    let inputRef=useRef("");
    let display=(event)=>{
        setInput(event.target.value)
        inputRef.current = event.target.value;
        console.log(inputRef.current);
    }
    return(
        <>
        <h1>Entered input:{input}</h1>
        <input type="text" onChange={(event)=>display(event)}></input>
        </>
    )
}
export default Hooks;