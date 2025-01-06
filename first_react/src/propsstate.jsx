import { useState } from "react";
function Propsstate(props){
    let [num,setNum]=useState(0);
    let [sum,setSum]=useState(0);
    const add=()=>{
        setSum(Number(num)+props.value);
    }
return(
    <>
    <h1>State value:{num}</h1>
    <label htmlFor="state">Enter value
        <input type="number" id="state" name="state" onChange={(e)=>setNum(e.target.value)}></input>
    </label>

    <h1>Props value:{props.value}</h1>
    <h1>Sum:{sum}</h1>
    <button onClick={add}>Add</button>
    </>
)
}
export default Propsstate;