import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";

function Landing() {
    const { state } = useLocation();

    // Use state safely, with a fallback if `state` or its properties are undefined
    const user = state?.store?.user || "Guest";

    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* Header */}
                <Header name={user} />
                {/* Card */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"} />
                    <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
                    <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
                </div>
                {/* Todo Container */}
                <TodoContainer />
            </div>
        </div>
    );
}

export default Landing;
