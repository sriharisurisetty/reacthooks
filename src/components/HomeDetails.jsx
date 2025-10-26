import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function HomeDetails(){
    const navigate = useNavigate()

    return (
        <>
<div>This is Home Details page</div>
<button onClick={()=> navigate('/order-summary', {replace:true})}>Place Order </button>
</>
    )
}
export default HomeDetails