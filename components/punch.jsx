import { useState } from "react"

export default function Punch(props){
  const [show, setShow] = useState(false);

  return(
    <div className="flex flex-col gap-4 mt-2">
      <p className="font-bold">{props.first}</p>
      <p className={`font-thin text-base ${show? "" : "hidden"}`}>{props.second}</p>
      <button onClick={()=>{setShow(current => !current)}} className={`text-xs bg-cyan-500 w-[fit-content] p-1 font-bold `}>{`${show ? "close" :"show"} punchline`}</button>
    </div>
  )
}