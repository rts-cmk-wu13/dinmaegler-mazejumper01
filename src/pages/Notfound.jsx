import { Link } from "react-router";

export default function Notfound() {

    return (
        <>
            <div className="bg-[#eef7ff] flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-[12rem] font-bold bg-[#162A41] text-white capitalize">hov!</h1>
            <h2 className="text-[1.875rem] font-bold mt-[2.5rem] mb-[0.5rem]">Du er havnet på en side som ikke findes</h2>
            <p className="w-[28.6rem]">Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
            <Link to="/" className="w-[13.4rem] h-[3.87rem] mt-[2.5rem] bg-[#162A41] text-white flex items-center justify-center ">Tilbage til forsiden</Link>
            </div>
        </>
    )
}