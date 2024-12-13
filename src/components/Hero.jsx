import Image from "next/image";
import Header from "./Header";
import herobg from '../../public/hero.png'


export default function Hero() {
    return (
        <div className="  h-screen bg-[#11343E]">
            <Image src={herobg} className="bg-cover w-full h-screen "/>
        </div>
    )
}
