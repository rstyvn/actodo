import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {


    const users = props.users

    const [enteredusr, setEnteredUsr] = useState()
    const [enteredpwd, setEnteredPwd] = useState()
    const [ruser, setruser] = useState(true)

    const navigate = useNavigate()

    function handleUInput(evt) {
        setEnteredUsr(evt.target.value)
    }

    function handlePInput(evt) {
        setEnteredPwd(evt.target.value)
    }

    function checkUsers() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === enteredusr && item.password === enteredpwd) {
                userfound = true
                navigate("/landing", { state: { userId: enteredusr}})

            }
        })

        if (userfound === false) {
            setruser(false)
        }

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded">
                <h1 className="text-2xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage you activity after you Login</p> : <p className="text-red-800">Please sign up before you login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                        onChange={handleUInput} />
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                        onChange={handlePInput} />

                    <button onClick={checkUsers} className="bg-[#8272DA] w-24 p-1 rounded-md" >Login</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login