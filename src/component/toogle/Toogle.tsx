"use client";
import "@/app/globals.css";
import { useState } from "react";


interface ToogleProps {
    label?: string;
    onToggle?: (checked: boolean) => void;
}

const Toogle = ({ label, onToggle }: ToogleProps) => {
    const [ischecked, setisChecked] = useState(false);
    
    return (
        <div className="flex items-center">
            <div 
            onClick={() => {
                setisChecked(!ischecked);
            }} 
            className={`flex w-[45px] h=[25px] rounded-full items-center duration-200 cursor-pointer 
                ${ischecked ? "bg-primary" 
                            : "bg-gray-300" }`}>
            
            <span
            className={`w-5 h-5 rounded-full duration-200
            ${ischecked ? "translate-x-[25px] bg-gray-100" 
                        : "translate-x-0 bg-primary"}`}
                ></span>     
            </div>

            {label && (
                <p className="text-[16px] ml-2.5 text-text-grey font-regular">
                    {label}
                </p>
            )}
            

        </div>
    );
}

export default Toogle;