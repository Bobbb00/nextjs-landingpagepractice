import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Button from "../button/Button";

import "@/app/globals.css";

const Navbar = () => {
    return (
        <div className="w-screen relative">
            <nav className="max-w-[100vw] w-full flex justify-between items-center p-[50px] mx-auto">
            <Image src={Logo} alt="Logo" className="w-40"/>

            <div className="flex gap-[60px] items-center">
              <a href="#" className="text-[20px] text-black hover:text-primary hover:font-bold">Home</a>
                <a href="#" className="text-[20px] text-black hover:text-primary hover:font-bold">About</a>
                <a href="#" className="text-[20px] text-black hover:text-primary hover:font-bold">Pricing</a>
                <a href="#" className="text-[20px] text-black hover:text-primary hover:font-bold">Contact</a>
                <Button label="Get Started" variant="solid"/>
            </div>

        </nav>
        </div>
        
    );

};


export default Navbar;