import {cn} from "../lib/utils"
import { useNavigate } from "react-router-dom";

interface logoProps {
    className ?: string
}

export default function Logo( {className} : logoProps) {
    const navigate = useNavigate();
    return (
        <div
            onClick={()=>navigate('/')}
            className={cn("logo-font text-lg sm:text-xl md:text-2xl text-black  cursor-pointer transition-transform duration-300 hover:scale-105",className)}
            // hover:scale-105
            style={{
                fontSize: "2.5rem",
                letterSpacing: "-0.02em",
                textShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px",
                display: "flex",
                alignItems: "baseline",
                color: "rgb(0, 182, 127)",
            }}
        >
            <span
                style={{
                    fontFamily: "Pacifico, cursive",
                    fontWeight: 100,
                }}
            >
                se
            </span>
            <span
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.7rem",
                    letterSpacing: "-0.2em",
                }}
            >
                W
                <i
                    style={{
                        fontSize: "1.7rem",
                        fontFamily: "Poppins, sans-serif",
                        fontStyle: "italic",
                        letterSpacing: "0em",
                    }}
                >
                    N
                </i>
            </span>
            <span
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 410,
                    letterSpacing: "-0.02em",
                    fontSize: "2.2rem",
                }}
            >
                a.
            </span>
        </div>
    );
}
