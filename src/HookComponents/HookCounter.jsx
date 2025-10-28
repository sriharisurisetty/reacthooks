import { useEffect, useState } from "react"

function HookCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    const tick = ()=>{
        setCount(prevCount => prevCount+1)

    }
    useEffect(()=> {
        const interval = setInterval(tick, 1000)
        return()=>{
            clearInterval(interval)
        }
    },[] )
    return(
        <div>
           {count} 
           
           {/*  <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>Clicked {count} times </button>  */}
        </div>
    )
}
export default HookCounter