import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Landing(){

    const navigate = useNavigate();

    return(
        <div className='flex flex-row h-full w-full'>
            <div className='bg-amber-300 flex flex-1 p-2' onClick={()=>navigate("/login")}>
                am
            </div>
            <div className='bg-amber-900 flex flex-1 p-2' onClick={()=>navigate("/waitlist")}>
                hire
            </div>
        </div>
        )
}