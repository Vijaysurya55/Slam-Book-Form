import React, {useState, useMemo} from 'react'

function Memo() {
    const [Number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)

    let doubleNum = useMemo(() =>{
        return slowFunction(Number)
    },[Number])

    let themestyle={
        backgroundColor:dark ? 'black' : 'white',
        color:dark ? 'white' : 'black'
    }

    function slowFunction(num){
        for(let i=0;i<1000000000;i++){
            //do nothing
        }
        return num*2;
    }

    return(
        <>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} />
        <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
        <div style={themestyle} >
            <p>Double Number: {doubleNum}</p>
        </div>
        </>
    )
}
export default Memo