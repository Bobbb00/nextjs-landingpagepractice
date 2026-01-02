import Button from "../button/Button";
import Toogle from "../toogle/Toogle";
import "../../app/globals.css";

interface CardProps {
    name : string;
    price: string;
    bill: 'TEXT' | 'YEAR';
    billString?: string;
    featureLists: string[];
    isCenter: boolean;
    btnLabel: string;
}


const Card = ({name, price, bill, billString, featureLists, isCenter, btnLabel}: CardProps) => {
    return (
        <div className="w-[375px] h-[502px] bg-white rounded-2xl drop-shadow-[0_0_100px_rgba(0,0,0,0.3)] flex flex-col justify-between">
            <div className="p-6">
                <h6 className="text-[36px] font-bold">{name}</h6>
                <p className="text-[16px] font-regular">{price}</p>
            </div>
        
        <div className="h-px bg-natural w-full"></div>
        <div className="px-6 py-2">
            {bill === "TEXT" ? (
                <p className="text-[14px] text-grey font-regular">{billString}</p>
            ) : (
                <Toogle label="Billed Yearly"/>
            )}
        </div>
        <div className="h-px bg-natural w-full"></div>

        <div className="px-6 py-4">
            {featureLists.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 mb-3">
                <img src="#" alt="check-icon" />
                <p className="font-regular text-[14px]">{feature}</p>
            </div>
            ))}
        </div>

        <div className="flex flex-col justify-center items-center mt-auto w-full px-6 mb-6">
            <Button label={btnLabel} variant={isCenter ? "solid" : "outline"} styling="w-full" />
            {isCenter && (
            <p className="text-[14px] mt-4">
                or{' '}
                <a href="#" className="font-bold underline">Contact Sales</a>
            </p>
            )}
        </div>

        </div>

    );
};

export default Card;