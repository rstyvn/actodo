import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import TodoContainer from "../components/TodoContainer";
import Card from "../components/Card";


function Landing(props) {

    const data = useLocation();

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.userId} />
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={"Jan 02"} subtitle={"02:10:12"} />
                    <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
                </div>
                <div>
                    <TodoContainer/>
                </div>
            </div>
            <h1>Hey {data.state.userId}</h1>
        </div>


    )
}

export default Landing