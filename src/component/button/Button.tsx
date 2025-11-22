import "@/app/globals.css";

interface ButtonProps {
    label: string;
    variant: "solid" | "outline";
}

const Button = ({ label, variant }: ButtonProps) => {
    return (
        <button
            className={`px-[30px] py-[9px] rounded-xl text-[24px] ${
                variant === "solid"
                    ? "bg-primary text-white"
                    : "bg-transparent text-primary border border-primary"
                }`}
        >
            {label}
        </button>
    );
};

export default Button;

