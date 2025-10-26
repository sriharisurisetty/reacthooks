import { useSearchParams } from "react-router-dom"

function Users(){
const [searchParams, setSearchParams] = useSearchParams()
const showActiveUsers = searchParams.get('filter'==='active')

return <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <div>
            <button onClick={()=> setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={()=> setSearchParams({})}>Reset filter</button>
        </div>
        {showActiveUsers ? (<h2>Active users</h2>) : (<h2>All users</h2>) }
    </div>
}

export default Users