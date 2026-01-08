import '@/app/globals.css';
import React from 'react';

interface ButtonProps {
  label: string;
  variant: 'solid' | 'outline' | 'text';
  styling?: string;
}

const Button = ({ label, variant, styling }: ButtonProps) => {
  const variantStyling = () => {
    switch (variant) {
      case 'solid':
        return 'bg-primary text-white cursor-pointer hover:bg-primary-hover transition-colors duration-300';
      case 'outline':
        return 'bg-transparent text-primary border border-primary cursor-pointer hover:bg-primary-hover hover:text-white transition-colors duration-300';
      case 'text':
        return 'bg-transparent text-primary cursor-pointerd hover:text-black transition-colors duration-300';
      default:
        return '';
    }
  };
  return (
    <button
      className={`rounded-xl px-[30px] py-[10px] text-[24px] whitespace-nowrap ${variantStyling()} ${styling}`}
    >
      {label}
    </button>
  );
};

export default Button;

// just in case if u wanna use children prop

// import React from "react";
// import "@/app/globals.css";

// interface ButtonProps {
//     children?: React.ReactNode;
//     label?: string;
//     variant: "solid" | "outline" | "text";
// }

// const Button = ({ children, label, variant }: ButtonProps) => {
//     const variantStyling = () => {
//         switch (variant) {
//             case "solid":
//                 return "bg-primary text-white";
//             case "outline":
//                 return "bg-transparent text-primary border border-primary";
//             case "text":
//                 return "bg-transparent text-primary";
//             default:
//                 return "";
//         }
//     };
//     return (
//         <button
//             className={`px-[30px] py-[9px] rounded-xl text-[24px]
//                 ${variantStyling()}`}
//         >
//             {children ?? label}
//         </button>
//     );
// };

// export default Button;
