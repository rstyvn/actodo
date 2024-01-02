
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props) {


    const users = props.users
    const setUsers = props.setUsers
    const[euser, seteuser]= useState()
    const[epwd, setepwd]=useState()

    const navigate = useNavigate()

    function handleUser(evt){
        seteuser(evt.target.value)
    }

    function handlePwd(evt){
        setepwd(evt.target.value)
    }

    function addUsers(){
        setUsers([...users,{username:euser, password:epwd}])
        navigate("/")
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
                <p >Sign Up here</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUser} />
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password" 
                        onChange={handlePwd} />
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm Password" />

                    <button onClick={addUsers} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup