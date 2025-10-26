import { useParams } from "react-router-dom"

function UserDetails(){
    const params= useParams()
    const userId = params.userId
    console.log(userId)
    const isNumber = !isNaN(Number(userId))
    return <div>
{isNumber
        ? `This is user details of ${userId}`
        : "Invalid user ID"}
</div>
}

export default UserDetails